import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export interface PDFExportOptions {
  filename?: string;
  onProgress?: (progress: number, message: string) => void;
}

export const exportResumeToPDF = async (
  elementId: string,
  options: PDFExportOptions = {}
): Promise<boolean> => {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`Element with id '${elementId}' not found for PDF generation`);
    return false;
  }

  const { filename = 'resume.pdf', onProgress } = options;

  try {
    onProgress?.(10, 'Preparing document layout...');

    // Save initial element styles to restore later
    const originalShadow = element.style.boxShadow;
    const originalTransform = element.style.transform;
    element.style.boxShadow = 'none';
    element.style.transform = 'none';

    onProgress?.(30, 'Rendering high-resolution vector canvas...');

    const canvas = await html2canvas(element, {
      scale: 2, // 2x retina scale for ultra-sharp typography
      useCORS: true, // Allow cross-origin images (profile photos)
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
      onclone: (clonedDoc) => {
        const clonedEl = clonedDoc.getElementById(elementId);
        if (clonedEl) {
          clonedEl.style.boxShadow = 'none';
          clonedEl.style.transform = 'none';
          clonedEl.style.margin = '0 auto';
        }
      }
    });

    onProgress?.(70, 'Building PDF vector pages...');

    // A4 measurements in mm: 210 x 297
    const imgData = canvas.toDataURL('image/png', 1.0);
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true,
    });

    const pdfWidth = 210;
    const pdfHeight = 297;
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // Calculate height of image in PDF mm
    const imgHeight = (canvasHeight * pdfWidth) / canvasWidth;

    let heightLeft = imgHeight;
    let position = 0;

    // First page
    pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight, undefined, 'FAST');
    heightLeft -= pdfHeight;

    // Multi-page handling if content exceeds 1 page
    while (heightLeft > 5) {
      position = -(imgHeight - heightLeft);
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight, undefined, 'FAST');
      heightLeft -= pdfHeight;
    }

    onProgress?.(95, 'Finalizing download...');

    // Trigger PDF download
    const cleanFilename = filename.endsWith('.pdf') ? filename : `${filename}.pdf`;
    pdf.save(cleanFilename);

    // Restore original styles
    element.style.boxShadow = originalShadow;
    element.style.transform = originalTransform;

    onProgress?.(100, 'Download complete!');
    return true;
  } catch (error) {
    console.error('Failed to generate PDF:', error);
    return false;
  }
};

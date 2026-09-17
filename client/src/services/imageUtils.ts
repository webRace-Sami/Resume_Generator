/**
 * Universal Image Processing & Optimization Utility
 * Supports all picture formats: JPG, JPEG, PNG, WEBP, SVG, BMP, GIF, AVIF, HEIC, HEIF, etc.
 * Resizes large camera photos down to an optimized Base64 string (~30KB - 80KB)
 * to prevent browser LocalStorage quota overflow and enable rapid PDF export.
 */

export interface ProcessImageOptions {
  maxWidth?: number;
  maxHeight?: number;
  quality?: number;
}

export const ACCEPTED_IMAGE_EXTENSIONS =
  'image/*, .jpg, .jpeg, .png, .webp, .svg, .bmp, .gif, .avif, .heic, .heif, .jfif, .pjpeg, .pjp, .tif, .tiff, image/jpeg, image/png, image/webp, image/svg+xml, image/bmp, image/gif, image/avif, image/heic, image/heif';

/**
 * Validates and processes any selected image file
 */
export const processImageFile = async (
  file: File,
  options: ProcessImageOptions = {}
): Promise<string> => {
  const { maxWidth = 800, maxHeight = 800, quality = 0.88 } = options;

  return new Promise((resolve, reject) => {
    if (!file) {
      return reject(new Error('No file selected'));
    }

    const fileName = file.name.toLowerCase();
    const isSvg = file.type === 'image/svg+xml' || fileName.endsWith('.svg');
    const isGif = file.type === 'image/gif' || fileName.endsWith('.gif');

    const reader = new FileReader();

    reader.onerror = () => {
      reject(new Error('Failed to read image file. Please try a different photo.'));
    };

    reader.onload = (readerEvent) => {
      const rawDataUrl = readerEvent.target?.result as string;
      if (!rawDataUrl) {
        return reject(new Error('Could not convert image to data URL.'));
      }

      // Preserve SVGs and GIFs directly without canvas rasterization
      if (isSvg || isGif) {
        return resolve(rawDataUrl);
      }

      // For raster formats (JPG, JPEG, PNG, WEBP, BMP, AVIF, etc.), resize via Canvas
      const img = new Image();
      img.onerror = () => {
        // If image object fails to load (e.g., custom format), fallback to raw DataURL
        resolve(rawDataUrl);
      };

      img.onload = () => {
        try {
          let width = img.naturalWidth || img.width;
          let height = img.naturalHeight || img.height;

          // If already appropriately sized and lightweight, return raw data URL
          if (width <= maxWidth && height <= maxHeight && file.size < 150 * 1024) {
            return resolve(rawDataUrl);
          }

          // Calculate proportional scale dimensions
          if (width > maxWidth || height > maxHeight) {
            if (width / height > maxWidth / maxHeight) {
              height = Math.round((height * maxWidth) / width);
              width = maxWidth;
            } else {
              width = Math.round((width * maxHeight) / height);
              height = maxHeight;
            }
          }

          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext('2d');
          if (!ctx) {
            return resolve(rawDataUrl);
          }

          // High-quality rendering
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';

          ctx.drawImage(img, 0, 0, width, height);

          // If source was PNG with possible transparency, keep PNG, otherwise use high-efficiency JPEG
          const isPng = file.type === 'image/png' || fileName.endsWith('.png');
          const outputType = isPng ? 'image/png' : 'image/jpeg';
          const compressedDataUrl = canvas.toDataURL(outputType, quality);

          resolve(compressedDataUrl);
        } catch {
          // Fallback to raw DataURL if canvas conversion encounters error
          resolve(rawDataUrl);
        }
      };

      img.src = rawDataUrl;
    };

    reader.readAsDataURL(file);
  });
};

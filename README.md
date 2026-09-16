# 📄 Resume & CV Generator Studio (Web & Android)

A full-stack, ATS-engineered Resume and Curriculum Vitae (CV) builder application built using the **MERN Stack with TypeScript, Vite, Tailwind CSS, and Capacitor**.

---

## 🚀 Key Features

- **10 Professional CV & Resume Layouts**:
  1. **Modern Clean**: Contemporary single-column layout with section badges and balanced typography.
  2. **Harvard Classic Ivy**: Traditional academic & legal standard with supreme ATS compliance.
  3. **Tech & Developer Pro**: High-density engineering layout with monospace meta tags and code repositories.
  4. **Creative Split Sidebar**: 2-column layout with full-height colored left sidebar.
  5. **Corporate Executive**: Polished C-suite 2-column layout with top executive banner.
  6. **Nordic Crisp Grid**: Scandinavian minimalist design with spacious typography.
  7. **Monochrome ATS Master**: Pure black & white layout with zero clutter, 100% parseable by every ATS scanner.
  8. **Luxury Elegance**: High-end monogram crest avatar with refined serif fonts and double border framing.
  9. **Academic & Research CV**: Extended curriculum vitae format with research grants, publications, and teaching.
  10. **Startup Dynamic**: High-energy timeline milestones, vibrant tag pills, and project impact highlights.

- **Color Customization & Pure Monochrome Mode**:
  - 1-Click switch between **Pure Black & White (No Colors)** and **Custom Color Accent Mode**.
  - 10 Curated color palettes (*Ocean Navy, Emerald Forest, Midnight Indigo, Crimson Burgundy, Royal Slate, Amethyst Purple, Forest Teal, Sunset Amber, Rose Gold, Electric Cyan*).
  - Custom HEX color picker with live preview.

- **Interactive Popup Data Builder**:
  - Modal window for Personal Details, Experience, Education, Skills, Projects, Certifications, and Languages.
  - Profile photo upload with local Base64 rendering.
  - 1-Click Sample Profile Presets (*Senior Software Engineer, Corporate VP, Product Designer, Medical Doctor/Academic*) or start blank.

- **Pixel-Perfect Vector PDF Export**:
  - Powered by `html2canvas` + `jsPDF` at 2x retina scale.
  - Multi-page and single-page aware without cutoffs.

- **Web & Android Ready**:
  - PWA Manifest for instant mobile installation.
  - Capacitor Android integration for native Google Play Store builds.

---

## 🛠️ Technology Stack

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS, Lucide Icons, html2canvas, jsPDF.
- **Backend (MERN)**: Express, Node.js, TypeScript, Mongoose (MongoDB) with local in-memory fallback.
- **Mobile Packaging**: Capacitor Android (`@capacitor/android`, `@capacitor/cli`).

---

## 💻 Local Development

### 1. Install Dependencies
```bash
npm install
npm install --prefix client
npm install --prefix server
```

### 2. Start Development Servers (Concurrent)
```bash
npm run dev
```
- Frontend Web App: `http://localhost:5173/`
- Backend API: `http://localhost:5001/`

---

## 🌐 Web Deployment (Vercel)

### Option A: Deploy Frontend on Vercel
1. Push your code to GitHub.
2. Go to [Vercel Dashboard](https://vercel.com/) and click **Add New Project**.
3. Import your `Resume_Generator` repository.
4. Set **Root Directory** to `client`.
5. Framework Preset: **Vite**.
6. Build Command: `npm run build`.
7. Output Directory: `dist`.
8. Click **Deploy**!

---

## 📱 Android Play Store Deployment (Capacitor)

### 1. Build the Web Application
```bash
npm run build:client
```

### 2. Add Android Platform
```bash
npx cap add android
```

### 3. Sync Web Assets with Android Project
```bash
npx cap sync android
```

### 4. Open in Android Studio
```bash
npx cap open android
```

### 5. Generate Signed AAB & Release to Play Store
1. In Android Studio, go to **Build** > **Generate Signed Bundle / APK**.
2. Select **Android App Bundle (.aab)**.
3. Create or select your **Keystore key** and sign the release build.
4. Upload the generated `.aab` file to the [Google Play Console](https://play.google.com/console).

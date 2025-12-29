# Handy AF Home Services Website

Professional landscaping services website built with React, ready for Vercel deployment.

**Business:** Handy AF LLC  
**Location:** Blooming Grove, NY  
**Phone:** (845) 494-1727  
**Email:** imhandyaf@gmail.com

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm start

# Build for production
npm run build
```

## Deploying to Vercel

1. Connect this repository to Vercel
2. Vercel will auto-detect React and configure build settings
3. Deploy!

## Configuration Needed

### 1. Logo Files
Upload your logo files to `/public/images/`:
- `logo.png` - Main logo (header, light backgrounds)
- `logo-white.png` - White version (footer, dark backgrounds)
- `favicon.ico` - Browser favicon
- `logo192.png` - PWA icon (192x192)
- `logo512.png` - PWA icon (512x512)

### 2. Hero & Background Images
Add images to `/public/images/`:
- `hero-bg.jpg` - Home page hero background
- `page-header-bg.jpg` - Default page header background
- `about-preview.jpg` - About section preview image
- `about-team.jpg` - Team photo for About page

### 3. Service Images
Add service images to `/public/images/services/`:
- `landscape-design.jpg`
- `landscape-planting.jpg`
- `landscape-lighting.jpg`
- `lawn-care.jpg`
- `snow-removal.jpg`

### 4. LightWidget Instagram Feed
To set up the gallery Instagram feed:
1. Go to [LightWidget](https://lightwidget.com/)
2. Connect the @imhandyaf Instagram account
3. Customize your widget (grid layout recommended)
4. Copy the embed code
5. Update `/src/pages/Gallery.js` - replace the placeholder with your widget

### 5. Promo Video
To add your promo video:
1. Upload to YouTube or Vimeo
2. Get the embed URL
3. Update `/src/pages/Home.js` - uncomment the iframe and add your video URL

## File Structure

```
src/
├── components/
│   ├── Navbar.js/.css
│   ├── Footer.js/.css
│   ├── Hero.js/.css
│   └── PageHeader.js/.css
├── pages/
│   ├── Home.js/.css
│   ├── About.js/.css
│   ├── Services.js/.css
│   ├── ServiceDetail.js/.css
│   ├── Gallery.js/.css
│   └── Contact.js/.css
├── data/
│   └── services.js
├── App.js/.css
└── index.js/.css
```

## Features

- ✅ Responsive design (mobile-first)
- ✅ Services dropdown in navigation
- ✅ Individual service detail pages
- ✅ LightWidget Instagram integration (gallery)
- ✅ Yardbook quote form integration (contact)
- ✅ Video section placeholder (home)
- ✅ 100% Recommended badge (13 reviews)
- ✅ SEO-friendly structure
- ✅ Vercel-ready deployment

## Service Areas

- Blooming Grove, NY
- Cornwall, NY
- Campbell Hall, NY
- Orange County, NY
- & Surrounding Areas

## Color Scheme

- Primary Green: `#2d5a27`
- Primary Green Dark: `#1e3d1a`
- Primary Green Light: `#4a7c43`
- Accent Gold: `#c9a227`

## License

Private - Handy AF LLC

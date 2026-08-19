# Raunak Chhabra Portfolio — Media & Content Guide

Welcome to your creative portfolio! This simple guide explains how to replace placeholder images, videos, resume files, and contact details with your real media assets **without needing to modify complex code**.

---

## 📁 File Folder Structure Overview

All media files are stored in the `public/` directory so they can be loaded instantly:

```
public/
├── videos/
│   ├── hero/
│   │   └── hero.mp4            <-- Your Main Hero Showreel Video
│   ├── projects/               <-- Portfolio Video Previews
│   └── services/               <-- Service Video Previews
├── images/
│   ├── hero/
│   │   └── hero.jpg            <-- Hero Poster / Fallback Image
│   ├── profile/
│   │   └── raunak.jpg          <-- Your Cinematic Portrait (About Section)
│   ├── projects/               <-- Portfolio Project Thumbnails
│   └── services/               <-- Services Preview Images
└── resume/
    └── raunak-chhabra-resume.pdf <-- Your Official PDF Resume
```

---

## 🎥 1. How to Replace the Hero Reel

1. Export your main showreel video as **`hero.mp4`** (recommended resolution: 1080p, compressed with H.264 / AAC for fast web playback).
2. Save it to:
   `public/videos/hero/hero.mp4`
3. Export a high-quality frame or poster image as **`hero.jpg`** and save it to:
   `public/images/hero/hero.jpg`

---

## 📷 2. How to Replace Your Profile Portrait (About Section)

1. Select your cinematic portrait photograph (vertical format recommended).
2. Save it as **`raunak.jpg`** to:
   `public/images/profile/raunak.jpg`

---

## 🎬 3. How to Update Portfolio Projects

All portfolio project details are managed in a single central file:
**`[src/data/projects.js](file:///c:/Users/raun/Documents/raunak%20creative%20portfolio/src/data/projects.js)`**

### Adding or Updating a Project:
Open `src/data/projects.js` in your editor. Each project looks like this:

```js
{
  id: "proj-1",
  title: "NEON HORIZON",
  subtitle: "Brand Commercial · 2026",
  category: "CINEMATICS",        // Choice of: CINEMATICS, ADS, DOCUMENTARY, PODCAST, SHORT FORM
  year: "2026",
  aspectRatio: "16/9",           // 16/9 for wide, 9/16 for vertical reels, 4/3 for doc
  gridSpan: "col-span-large",    // Choices: col-span-large, col-span-vertical, col-span-standard
  thumbnail: "/images/projects/neon-horizon.jpg",
  videoUrl: "/videos/projects/neon-horizon.mp4",
  description: "Cinematic commercial edit crafted with dynamic sound design...",
  role: "Director & Lead Editor",
  tags: ["Color Grading", "Sound Design", "Commercial Film"]
}
```

1. Add your project thumbnail image to `public/images/projects/your-project.jpg`.
2. Add your short video preview to `public/videos/projects/your-project.mp4`.
3. Update `thumbnail` and `videoUrl` paths in `src/data/projects.js`.

---

## 📄 4. How to Update Your Resume PDF

1. Name your CV PDF file **`raunak-chhabra-resume.pdf`**.
2. Save it to:
   `public/resume/raunak-chhabra-resume.pdf`

---

## 📬 5. How to Update Social Links & Contact Details

Open `[src/data/experience.js](file:///c:/Users/raun/Documents/raunak%20creative%20portfolio/src/data/experience.js)`:

```js
export const CONTACT_INFO = {
  email: "your.email@example.com",        // Replace with real email
  whatsapp: "+919876543210",              // Replace with your WhatsApp number
  instagram: "raunak.chhabra",            // Replace with Instagram handle
  linkedin: "raunakchhabra",             // Replace with LinkedIn handle
  resumeFile: "raunak-chhabra-resume.pdf"
};
```

---

## 🚀 Recommended Media Settings for Web
- **Video Format**: MP4 (H.264 video codec, AAC audio).
- **Project Previews**: 5–15 second muted loops, keeping file sizes under 5MB per preview video for maximum performance.
- **Images**: JPG or WebP compressed format (under 500KB per image).

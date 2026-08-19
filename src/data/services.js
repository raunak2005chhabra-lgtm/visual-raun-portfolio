// Services data for Raunak Chhabra Portfolio — V2.2 Stacked Cards

const createServicePreviewSVG = (number, title, tag, color1 = '#1c1613', color2 = '#08080a') => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="750" viewBox="0 0 1000 750">
    <defs>
      <linearGradient id="serv_${number}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${color1}" />
        <stop offset="100%" stop-color="${color2}" />
      </linearGradient>
    </defs>
    <rect width="1000" height="750" fill="url(#serv_${number})" />
    <text x="500" y="340" font-family="'Space Grotesk', sans-serif" font-size="110" font-weight="900" fill="rgba(255,255,255,0.04)" text-anchor="middle">${number}</text>
    <text x="500" y="410" font-family="'Space Grotesk', sans-serif" font-size="40" font-weight="900" fill="#F5F3EE" text-anchor="middle" letter-spacing="2">${title}</text>
    <text x="500" y="460" font-family="'Playfair Display', serif" font-size="22" font-style="italic" fill="#FF6A00" text-anchor="middle">[ ${tag} ]</text>
    <text x="500" y="680" font-family="sans-serif" font-size="13" fill="rgba(255,255,255,0.3)" text-anchor="middle">MEDIA PLACEHOLDER • /images/services/${title.toLowerCase().replace(/\s+/g, '-')}.jpg</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export const SERVICES = [
  {
    number: "01",
    title: "VIDEO EDITING",
    description: "Turning raw footage into structured, engaging visual stories with precise pacing and narrative flow.",
    tag: "Timeline & Pacing",
    localMedia: "/images/services/video-editing.png",
    localVideo: "",
    previewImage: "/images/services/video-editing.png",
    details: ["Narrative Pacing", "Sound Design & Mix", "Multi-Cam Assembly", "Motion Graphics"]
  },
  {
    number: "02",
    title: "SOCIAL MEDIA CONTENT",
    description: "Short-form content designed specifically around attention retention, pacing, and platform algorithms.",
    tag: "Hooks & Engagement",
    localMedia: "/images/services/social-content.png",
    localVideo: "",
    previewImage: "/images/services/social-content.png",
    details: ["Retention Hook Strategy", "Kinetic Typography", "TikTok & Reels", "Platform Optimization"]
  },
  {
    number: "03",
    title: "CINEMATOGRAPHY",
    description: "Shooting cinematic visuals with intentional camera movement, lighting design, and framing for creators and brands.",
    tag: "Camera & Framing",
    localMedia: "/images/services/cinematography.png",
    localVideo: "",
    previewImage: "/images/services/cinematography.png",
    details: ["Camera Direction", "Lighting Design", "Movement & Gimbals", "Composition"]
  },
  {
    number: "04",
    title: "PHOTOGRAPHY",
    description: "Editorial, product, event, and brand photography capturing raw moments and polished commercial stills.",
    tag: "Stills & Composition",
    localMedia: "/images/services/photography.png",
    localVideo: "",
    previewImage: "/images/services/photography.png",
    details: ["Editorial Portraits", "Brand & Commercial", "Event Documentation", "High-End Retouching"]
  }
];

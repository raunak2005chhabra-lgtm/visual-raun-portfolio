// Centralized Project Data Structure for Raunak Chhabra Portfolio
// Organized into clear, equal categories for uniform visual archive grid.

export const CATEGORIES = [
  { id: 'ALL', label: 'ALL WORK' },
  { id: 'CINEMATICS', label: 'CINEMATICS' },
  { id: 'INSTAGRAM ADS / SHORT-FORM CONTENT', label: 'INSTAGRAM ADS / SHORT-FORM CONTENT' },
  { id: 'PHOTOGRAPHY', label: 'PHOTOGRAPHY' }
  // { id: 'PODCAST', label: 'PODCAST' } // Temporarily disabled
];

// Helper to generate sleek high-contrast placeholder SVG poster images without inner grid lines
const createPlaceholderSVG = (title, categoryTag, color1 = '#1c1613', color2 = '#08080a') => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675">
    <defs>
      <linearGradient id="grad_${title.replace(/\s+/g, '')}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${color1}" />
        <stop offset="100%" stop-color="${color2}" />
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#grad_${title.replace(/\s+/g, '')})" />
    <text x="600" y="325" font-family="'Space Grotesk', sans-serif" font-size="42" font-weight="900" fill="#F5F3EE" text-anchor="middle" letter-spacing="-1">${title.toUpperCase()}</text>
    <text x="600" y="380" font-family="'Playfair Display', serif" font-size="20" font-style="italic" fill="#FF6A00" text-anchor="middle">${categoryTag}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

// Helper for 9:16 vertical Reels placeholders
const createVerticalPlaceholderSVG = (title, categoryTag, color1 = '#1c1613', color2 = '#08080a') => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1600" viewBox="0 0 900 1600">
    <defs>
      <linearGradient id="grad_v_${title.replace(/\s+/g, '')}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${color1}" />
        <stop offset="100%" stop-color="${color2}" />
      </linearGradient>
    </defs>
    <rect width="900" height="1600" fill="url(#grad_v_${title.replace(/\s+/g, '')})" />
    <text x="450" y="780" font-family="'Space Grotesk', sans-serif" font-size="44" font-weight="900" fill="#F5F3EE" text-anchor="middle" letter-spacing="-1">${title.toUpperCase()}</text>
    <text x="450" y="840" font-family="'Playfair Display', serif" font-size="24" font-style="italic" fill="#FF6A00" text-anchor="middle">${categoryTag}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const BASE_PROJECTS = [
  // CINEMATICS CATEGORY
  {
    id: "cinematic-1",
    title: "THE WEIGHT OF SILENCE",
    subtitle: "Loneliness · Human Stories",
    category: "CINEMATICS",
    year: "2026",
    thumbnail: createPlaceholderSVG("The Weight Of Silence", "Cinematic Commercial", "#1c140d", "#08080a"),
    videoUrl: "/videos/projects/cinematics/cinematic_01.mp4",
    localThumbnail: "/videos/projects/cinematics/cinematic_01.jpg",
    localVideo: "/videos/projects/cinematics/cinematic_01.mp4",
    description: "An exploration of loneliness and the quiet need for someone to confide in. Shot and edited to capture isolation in everyday moments.",
    role: "Director & Lead Editor",
    tags: ["Color Finishing", "Sound Design", "Commercial Film"]
  },
  {
    id: "cinematic-2",
    title: "BRING IT TO LIFE",
    subtitle: "Ideas · Creative Expression",
    category: "CINEMATICS",
    year: "2025",
    thumbnail: createPlaceholderSVG("Bring It To Life", "Color Suite Reel", "#131b20", "#080c0f"),
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    localThumbnail: "/images/projects/chromatic-shift.jpg",
    localVideo: "/videos/projects/cinematics/cinematic_02.mp4",
    description: "A visual reminder to bring your ideas to life before they fade away. Shot and edited as an exploration of turning imagination into reality.",
    role: "Colorist",
    tags: ["DaVinci Resolve", "Look Dev", "Film Emulation"]
  },
  {
    id: "cinematic-3",
    title: "WHERE MEMORIES LINGER",
    subtitle: "Nostalgia · Memory",
    category: "CINEMATICS",
    year: "2026",
    thumbnail: createPlaceholderSVG("Where Memories Linger", "Cinematography", "#17121b", "#09060c"),
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    localThumbnail: "/images/projects/midnight-drive.jpg",
    localVideo: "/videos/projects/cinematics/cinematic_03.mp4",
    description: "A cinematic exploration of nostalgia, memories, and missing someone. Shot and edited to capture the feeling of moving between the present and the past.",
    role: "Cinematographer & Editor",
    tags: ["Night Shoot", "Low Light", "Pacing"]
  },
  {
    id: "cinematic-4",
    title: "THE WEIGHT WE CARRY",
    subtitle: "Men’s Mental Health · Street Stories",
    category: "CINEMATICS",
    year: "2025",
    thumbnail: createPlaceholderSVG("The Weight We Carry", "Narrative Brand Film", "#13171c", "#06080b"),
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    localThumbnail: "/images/projects/beyond-horizon.jpg",
    localVideo: "/videos/projects/cinematics/cinematic_04.mp4",
    description: "A street-level visual exploring men’s mental health and the everyday struggles that often go unseen. Shot and edited to capture the quiet realities of daily life.",
    role: "Director & Editor",
    tags: ["Brand Story", "Cinematics", "Editorial"]
  },

  // INSTAGRAM ADS / SHORT-FORM CONTENT CATEGORY
  {
    id: "ads-1",
    title: "",
    subtitle: "",
    category: "INSTAGRAM ADS / SHORT-FORM CONTENT",
    year: "2025",
    thumbnail: createVerticalPlaceholderSVG("Masalchi Brand Reels", "Social First Campaign", "#181824", "#0a0a10"),
    videoUrl: "/videos/projects/instagram-ads/instagram_01.mp4",
    localThumbnail: "/videos/projects/instagram-ads/instagram_01.png",
    localVideo: "/videos/projects/instagram-ads/instagram_01.mp4",
    description: "Edited this video.",
    role: "Videographer & Lead Editor",
    tags: ["Social First", "Reels", "Kinetic Motion"]
  },
  {
    id: "ads-2",
    title: "",
    subtitle: "",
    category: "INSTAGRAM ADS / SHORT-FORM CONTENT",
    year: "2026",
    thumbnail: createVerticalPlaceholderSVG("Urban Apparel Ad", "Fashion Commercial", "#1e1612", "#0c0805"),
    videoUrl: "/videos/projects/instagram-ads/instagram_02.mp4",
    localThumbnail: "/images/projects/urban-apparel.jpg",
    localVideo: "/videos/projects/instagram-ads/instagram_02.mp4",
    description: "Edited this video.",
    role: "Editor & Motion Designer",
    tags: ["Commercial Ad", "Beat Match", "Fashion"]
  },
  {
    id: "ads-3",
    title: "",
    subtitle: "",
    category: "INSTAGRAM ADS / SHORT-FORM CONTENT",
    year: "2025",
    thumbnail: createVerticalPlaceholderSVG("Kinetic Energy", "Social Commercial", "#191b12", "#080a04"),
    videoUrl: "/videos/projects/instagram-ads/instagram_03.mp4",
    localThumbnail: "/images/projects/kinetic-energy.jpg",
    localVideo: "/videos/projects/instagram-ads/instagram_03.mp4",
    description: "Edited this video.",
    role: "Lead Editor",
    tags: ["Sound Design", "Product Ad", "High Energy"]
  },
  {
    id: "ads-4",
    title: "",
    subtitle: "",
    category: "INSTAGRAM ADS / SHORT-FORM CONTENT",
    year: "2026",
    thumbnail: createVerticalPlaceholderSVG("Velocity Reels", "Short Form Content", "#1e1e12", "#0c0c05"),
    videoUrl: "/videos/projects/instagram-ads/instagram_04.mp4",
    localThumbnail: "/images/projects/velocity.jpg",
    localVideo: "/videos/projects/instagram-ads/instagram_04.mp4",
    description: "Edited this video.",
    role: "Short-Form Editor",
    tags: ["Hook Strategy", "TikTok/Reels", "Whip Transitions"]
  },
  {
    id: "ads-5",
    title: "",
    subtitle: "",
    category: "INSTAGRAM ADS / SHORT-FORM CONTENT",
    year: "2025",
    thumbnail: createVerticalPlaceholderSVG("Street Culture", "Reels Series", "#1c1216", "#0a0407"),
    videoUrl: "/videos/projects/instagram-ads/instagram_05.mp4",
    localThumbnail: "/images/projects/street-culture.jpg",
    localVideo: "/videos/projects/instagram-ads/instagram_05.mp4",
    description: "Shot and edited.",
    role: "Editor & Videographer",
    tags: ["Viral Shorts", "Reels", "Sound Design"]
  },
  {
    id: "ads-6",
    title: "",
    subtitle: "",
    category: "INSTAGRAM ADS / SHORT-FORM CONTENT",
    year: "2026",
    thumbnail: createVerticalPlaceholderSVG("Dynamic Reel Cut", "Vertical Reel #06", "#141a22", "#080c12"),
    videoUrl: "/videos/projects/instagram-ads/instagram_06.mp4",
    localThumbnail: "",
    localVideo: "/videos/projects/instagram-ads/instagram_06.mp4",
    description: "Shot and edited.",
    role: "Short-Form Editor",
    tags: ["Viral Shorts", "Reels", "Sound Design"]
  },
  {
    id: "ads-7",
    title: "",
    subtitle: "",
    category: "INSTAGRAM ADS / SHORT-FORM CONTENT",
    year: "2026",
    thumbnail: createVerticalPlaceholderSVG("Reel #07", "Instagram Reel #07", "#12181c", "#06090e"),
    videoUrl: "/videos/projects/instagram-ads/instagram_07.mp4",
    localThumbnail: "",
    localVideo: "/videos/projects/instagram-ads/instagram_07.mp4",
    description: "Edited this video.",
    role: "Editor",
    tags: ["Vertical 9:16", "Reels", "Short-Form"]
  },
  {
    id: "ads-8",
    title: "",
    subtitle: "",
    category: "INSTAGRAM ADS / SHORT-FORM CONTENT",
    year: "2026",
    thumbnail: createVerticalPlaceholderSVG("Reel #08", "Instagram Reel #08", "#1c1512", "#0e0906"),
    videoUrl: "/videos/projects/instagram-ads/instagram_08.mp4",
    localThumbnail: "",
    localVideo: "/videos/projects/instagram-ads/instagram_08.mp4",
    description: "Shot and edited.",
    role: "Editor",
    tags: ["Vertical 9:16", "Reels", "Short-Form"]
  },
  {
    id: "shortform-landscape-9",
    title: "",
    subtitle: "",
    category: "INSTAGRAM ADS / SHORT-FORM CONTENT",
    year: "2026",
    isLandscape: true,
    aspectRatio: "16/9",
    thumbnail: createPlaceholderSVG("Landscape Campaign Edit", "16:9 Commercial Ad #01", "#161c24", "#080b10"),
    videoUrl: "/videos/projects/instagram-ads/instagram_09.mp4",
    localThumbnail: "",
    localVideo: "/videos/projects/instagram-ads/instagram_09.mp4",
    description: "Edited a spec ad for Netflix.",
    role: "Director & Lead Editor",
    tags: ["Landscape 16:9", "Commercial Ad", "Social Campaign"]
  },
  {
    id: "shortform-landscape-10",
    title: "",
    subtitle: "",
    category: "INSTAGRAM ADS / SHORT-FORM CONTENT",
    year: "2026",
    isLandscape: true,
    aspectRatio: "16/9",
    thumbnail: createPlaceholderSVG("Landscape Commercial #02", "16:9 Commercial Ad #02", "#18141c", "#08060f"),
    videoUrl: "/videos/projects/instagram-ads/instagram_10.mp4",
    localThumbnail: "",
    localVideo: "/videos/projects/instagram-ads/instagram_10.mp4",
    description: "Shot and edited.",
    role: "Director & Lead Editor",
    tags: ["Landscape 16:9", "Commercial Ad", "Social Campaign"]
  }
];

// Vite glob imports for /videos/projects/ and /images/projects/
const projectMediaGlobs = import.meta.glob([
  '/public/videos/projects/**/*.(mp4|webm|mov|m4v|jpg|jpeg|png|svg)',
  '/public/images/projects/**/*.(jpg|jpeg|png|webp|svg)'
], { query: '?url', eager: true, import: 'default' });

// Category matching helper based on subfolder or filename prefix
const detectCategoryFromKey = (key) => {
  const lowerKey = key.toLowerCase();
  if (lowerKey.includes('/cinematics/') || lowerKey.includes('cinematic')) {
    return "CINEMATICS";
  }
  if (lowerKey.includes('/instagram-ads/') || lowerKey.includes('instagram') || lowerKey.includes('ad')) {
    return "INSTAGRAM ADS / SHORT-FORM CONTENT";
  }
  if (lowerKey.includes('/photography/') || lowerKey.includes('photo')) {
    return "PHOTOGRAPHY";
  }
  if (lowerKey.includes('/podcast/') || lowerKey.includes('podcast')) {
    return "PODCAST";
  }
  return null;
};

// Automatic Work Section Mapping Function
const getMappedProjects = () => {
  // Collect files grouped by category
  const categoryMediaMap = {};

  Object.keys(projectMediaGlobs).forEach(key => {
    const category = detectCategoryFromKey(key);
    if (!category) return;

    if (!categoryMediaMap[category]) {
      categoryMediaMap[category] = [];
    }
    const cleanUrl = key.replace(/^\/public/, '');
    categoryMediaMap[category].push({
      key,
      filename: key.split('/').pop(),
      cleanUrl: cleanUrl.startsWith('/') ? cleanUrl : '/' + cleanUrl
    });
  });

  const finalProjects = [];

  const baseCategoryProjects = {};
  BASE_PROJECTS.forEach(p => {
    if (!baseCategoryProjects[p.category]) {
      baseCategoryProjects[p.category] = [];
    }
    baseCategoryProjects[p.category].push(p);
  });

  CATEGORIES.filter(c => c.id !== 'ALL').forEach(catObj => {
    const catId = catObj.id;
    const staticItems = baseCategoryProjects[catId] || [];
    const mediaFiles = categoryMediaMap[catId] || [];

    // Separate videos and images, sorted naturally by filename
    const videos = mediaFiles
      .filter(m => /\.(mp4|webm|mov|m4v)$/i.test(m.filename))
      .sort((a, b) => a.filename.localeCompare(b.filename, undefined, { numeric: true, sensitivity: 'base' }));

    const images = mediaFiles
      .filter(m => /\.(jpg|jpeg|png|webp|svg)$/i.test(m.filename))
      .sort((a, b) => a.filename.localeCompare(b.filename, undefined, { numeric: true, sensitivity: 'base' }));

    const isVertical = catId === "INSTAGRAM ADS / SHORT-FORM CONTENT";
    const maxCount = isVertical ? staticItems.length : Math.max(staticItems.length, videos.length);

    for (let i = 0; i < maxCount; i++) {
      const staticItem = staticItems[i];
      const videoAsset = videos[i];
      const imageAsset = images[i] || (videoAsset ? images.find(img => img.filename.startsWith(videoAsset.filename.split('.')[0])) : null);

      if (staticItem) {
        const updatedItem = { ...staticItem };
        if (videoAsset) {
          updatedItem.localVideo = videoAsset.cleanUrl;
          updatedItem.videoUrl = videoAsset.cleanUrl;
        }
        if (imageAsset) {
          updatedItem.localThumbnail = imageAsset.cleanUrl;
        }
        finalProjects.push(updatedItem);
      } else if (videoAsset || imageAsset) {
        const baseName = (videoAsset || imageAsset).filename.split('.')[0];
        const projectTitle = baseName.replace(/[_-]/g, ' ').toUpperCase();
        const placeholderFunc = isVertical ? createVerticalPlaceholderSVG : createPlaceholderSVG;

        finalProjects.push({
          id: `${catId.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${i + 1}`,
          title: projectTitle,
          subtitle: `${catObj.label} · 2026`,
          category: catId,
          year: "2026",
          thumbnail: placeholderFunc(projectTitle, catObj.label, "#1a1a24", "#090910"),
          videoUrl: videoAsset ? videoAsset.cleanUrl : "",
          localThumbnail: imageAsset ? imageAsset.cleanUrl : "",
          localVideo: videoAsset ? videoAsset.cleanUrl : "",
          description: `Cinematic project edit featuring polished pacing, dynamic sound design, and creative storytelling.`
        });
      }
    }
  });

  return finalProjects;
};

export const PROJECTS = getMappedProjects();


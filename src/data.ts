import { Service, Project, Testimonial } from "./types";

export const COMPANY_DETAILS = {
  name: "Stantons Building & Landscaping",
  tagline: "Family run Building & Landscaping company. No job is too big or small.",
  description: "Covering all aspects of building and landscaping across South Yorkshire and surrounding areas. Helping you achieve your dream garden and home.",
  location: "South Yorkshire, UK",
  phone: "+44 7437 048983",
  phoneDisplay: "07437 048983",
  email: "Stantons@buildinglandscaping.net",
  yearsExperience: "15+",
  facebookUrl: "#", // placeholder for local biz
  instagramUrl: "#"
};

export const SERVICES_DATA: Service[] = [
  {
    id: "porcelain-paving",
    title: "Porcelain Paving & Hard Landscaping",
    description: "Ultra-modern, low-maintenance premium porcelain paving that transforms any outdoor area.",
    icon: "LayoutGrid",
    longDescription: "Porcelain paving is the gold standard for contemporary gardens. It is scratch-resistant, frostproof, slip-resistant, and maintains its premium finish for decades. We are specialists in precision porcelain installation, matching layouts with expert drainage.",
    features: [
      "Premium calibrated Italian & Spanish porcelain",
      "Robust wet-mix mortar bed laying with priming slurry",
      "Expert drainage channels & slope alignment",
      "Brush-in jointing compound in matching colors"
    ]
  },
  {
    id: "garden-design",
    title: "Garden Design & Landscaping",
    description: "Full garden transformations, custom designs, and professional landscaping tailored to your home.",
    icon: "Trees",
    longDescription: "From conception to execution, we collaborate with you to craft beautiful, practical outdoor spaces. We integrate flower beds, pathways, and seating arrangements to deliver cohesive landscapes.",
    features: [
      "Bespoke layout design & material advice",
      "Excavation and professional level management",
      "Planting schemes and borders",
      "Retaining walls and integrated features"
    ]
  },
  {
    id: "patios-driveways",
    title: "Patios, Driveways & Paving",
    description: "Stunning block paving, Indian sandstone, gravel driveways, and custom patio layouts.",
    icon: "Grid",
    longDescription: "Create a welcoming entrance to your home with a beautiful driveway or durable patio. We install high-quality natural stone, block paving, and traditional flagstones engineered to withstand high load-bearing demands.",
    features: [
      "Natural Indian Sandstone & Yorkstone flagstones",
      "Block paving for driveways with professional sub-base",
      "Aco drainage installation & drop-curb matching",
      "Weed-free long-lasting polymer jointing"
    ]
  },
  {
    id: "fencing-gates",
    title: "Fencing & Gates",
    description: "Premium closed-board, contemporary slatted fencing, concrete posts, and custom timber gates.",
    icon: "Shield",
    longDescription: "Add privacy and security to your property with our custom timber fencing options. We install everything from classic closeboard to ultra-modern horizontal slatted fence systems, using tanalised (pressure-treated) timber.",
    features: [
      "Horizontal contemporary slatted fencing",
      "Heavy-duty closeboard & panel fencing",
      "Timber or heavy-duty concrete posts and gravel boards",
      "Custom timber gates with premium security ironmongery"
    ]
  },
  {
    id: "turfing-grass",
    title: "Turfing & Artificial Grass",
    description: "Lush, high-grade natural turfing or premium evergreen artificial grass for year-round usability.",
    icon: "Sprout",
    longDescription: "Enjoy a pristine, vibrant green lawn. We handle comprehensive soil preparation, level-raking, and feed laying before rolling out premium local South Yorkshire turf, or installing high-density child- and pet-friendly artificial grass.",
    features: [
      "Premium weed-free cultivated lawn turf",
      "High-density multi-tone realistic artificial grass",
      "Full soil replacement, leveling & rotavating",
      "Permeable sub-base for artificial turf drainage"
    ]
  },
  {
    id: "brickwork-blockwork",
    title: "Brickwork & Blockwork",
    description: "Professional masonry, retaining walls, decorative garden walls, steps, and structural bricklaying.",
    icon: "Layers",
    longDescription: "Our building roots shine in our brickwork. We specialize in sturdy retaining walls to manage sloping gardens, customized garden steps, decorative pillars, and structural blockwork.",
    features: [
      "Structural retaining walls engineered for earth load",
      "Decorative brick garden borders & pillars",
      "Precision step building in brick or stone",
      "Lime mortar, pointing, and brick matching"
    ]
  },
  {
    id: "extensions-improvements",
    title: "Extensions & Home Improvements",
    description: "From garden offices and outbuildings to home extensions, structural alterations, and brickwork additions.",
    icon: "Home",
    longDescription: "As complete builders, we help you expand your indoor living space. We handle smaller single-story brick extensions, porch construction, and structural wall removals to merge home and garden beautifully.",
    features: [
      "Single-story house extensions & porch construction",
      "Structural steel beam installation (wall removal)",
      "General domestic brickwork alterations",
      "High-end bi-fold door installations"
    ]
  },
  {
    id: "buildings-decking",
    title: "Garden Buildings & Decking",
    description: "Bespoke composite or tanalised timber decking, pergolas, custom summer houses, and sheds.",
    icon: "Hammer",
    longDescription: "Create functional areas in your garden. We build beautiful composite decking areas that resist rot, pressure-treated timber decks, bespoke pergolas for climbing plants, and sturdy base work for custom garden cabins.",
    features: [
      "Premium wood-plastic composite (WPC) decking",
      "Traditional tanalised Scandinavian timber decks",
      "Bespoke timber pergolas, gazebos, and canopy covers",
      "Concrete sub-bases for garden rooms, sheds, & cabins"
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "proj-1",
    title: "Modern Grey Porcelain Patio Installation",
    category: "Patios & Paving",
    image: "/images/patio_project_1782997775408.jpg",
    description: "A gorgeous contemporary porcelain tiled patio with matching charcoal borders and high-end timber privacy panels, complete with comfortable seating space in Sheffield."
  },
  {
    id: "proj-2",
    title: "Luxury Lawn Turf & Bespoke Sleeper Planters",
    category: "Landscaping & Turfing",
    image: "/images/lawn_project_1782997793084.jpg",
    description: "Complete garden overhaul with premium local turf, precision-edged lawn, and raised tanalised timber sleeper flower beds creating a multi-level garden layout."
  },
  {
    id: "proj-3",
    title: "Contemporary Horizontal Slatted Timber Fence",
    category: "Fencing & Gates",
    image: "/images/fencing_project_1782997810608.jpg",
    description: "A stunning boundary perimeter using premium slatted horizontal wood panels and a heavy-duty matching security gate, set off with decorative gravel borders."
  },
  {
    id: "proj-4",
    title: "Bespoke Brick Wall & Natural Stone Steps",
    category: "Building & Masonry",
    image: "/images/brick_project_1782997825121.jpg",
    description: "A perfectly engineered red brick retaining wall featuring natural grey flagstone steps to elegantly manage a sloped residential rear garden."
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t-1",
    name: "David Croft",
    location: "Sheffield, South Yorkshire",
    rating: 5,
    text: "Stantons did an absolute masterpiece with our backyard! The porcelain paving looks flawless and the family team was professional from start to finish. They arrived on time, kept everything tidy, and completed the job on schedule.",
    service: "Porcelain Paving & Hard Landscaping",
    date: "June 2026"
  },
  {
    id: "t-2",
    name: "Sarah Jenkins",
    location: "Rotherham, South Yorkshire",
    rating: 5,
    text: "Fabulous service from a friendly family business. They replaced our old storm-damaged fence with modern slatted timber panels and re-turfed our patchy lawn. Absolutely over the moon with the results. Trustworthy, polite, and very reasonably priced.",
    service: "Fencing & Turfing",
    date: "May 2026"
  },
  {
    id: "t-3",
    name: "Mark & Helen Wood",
    location: "Barnsley, South Yorkshire",
    rating: 5,
    text: "We contracted Stantons for our new brick retaining wall and composite deck. The level of brickwork craftsmanship is top-tier, and they worked alongside us to refine the layout. They truly live up to the motto that no job is too big or small.",
    service: "Brickwork & Decking",
    date: "April 2026"
  },
  {
    id: "t-4",
    name: "James Thompson",
    location: "Doncaster, South Yorkshire",
    rating: 5,
    text: "Exceptional workmanship on our porcelain patio and block paved driveway. They excavated properly, installed a solid sub-base, and laid the tiles beautifully. Very easy to communicate with and highly professional. Will use them again!",
    service: "Patios, Driveways & Paving",
    date: "March 2026"
  }
];

export const GALLERY_CATEGORIES = [
  "All",
  "Patios & Paving",
  "Landscaping & Turfing",
  "Fencing & Gates",
  "Building & Masonry"
];

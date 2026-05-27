// Navbar section
interface Link {
  text: string;
  href: string;
}
export const NAVLINKS: Link[] = [
  {
    text: "HOME",
    href: "#home",
  },
  {
    text: "MOON BASE",
    href: "#moon-base",
  },
  {
    text: "PHASES",
    href: "#phases",
  },
  {
    text: "GALLERY",
    href: "#gallery",
  },
  {
    text: "MARS-FORWARD",
    href: "#mars",
  },
];

// Phases Section
import { BsRocketTakeoffFill, BsRocketFill, BsFire } from "react-icons/bs";
import { FaWeightHanging, FaSatellite, FaTruckMonster } from "react-icons/fa";

export interface PhaseStat {
  icon: React.ReactNode;
  text: string;
}
export interface Phase {
  id: string | number;
  imageSrc: string;
  imageAlt: string;
  title: string;
  bullets: string[];
  stats: PhaseStat[];
}
export const PHASES_LIST: Phase[] = [
  {
    id: 1,
    imageSrc: "/assets/images/phases/phase-1.png",
    imageAlt: "Building a Moon base: Phase One",
    title: "PHASE ONE",
    bullets: [
      "Achieve high-rate, reliable surface access",
      "Establish ground truth for Moon Base landing sites",
      "Experiment and test capabilities",
      "Complete first crewed Moon Base mission",
    ],
    stats: [
      { icon: <BsRocketTakeoffFill />, text: "25 Launches" },
      { icon: <BsRocketFill />, text: "21 Landings" },
      { icon: <BsFire />, text: "Radioisotope heating units" },
      { icon: <FaWeightHanging />, text: "~ 4,000 kg payload to surface" },
      {
        icon: <FaSatellite />,
        text: "2 lunar orbital comm satellite constellations",
      },
    ],
  },
  {
    id: 2,
    imageSrc: "/assets/images/phases/phase-2.png",
    imageAlt: "Building a Moon base: Phase Two",
    title: "PHASE TWO",
    bullets: [
      "Secure initial site(s)",
      "Establish initial lunar infrastructure",
      "Increase CLPS lander payload mass capability to 5 MT",
      "Technology demonstrations to enable lunar permanence",
      "Semi-annual crewed missions",
    ],
    stats: [
      { icon: <BsRocketTakeoffFill />, text: "27 Launches" },
      { icon: <BsRocketFill />, text: "24 Landings" },
      { icon: <FaTruckMonster />, text: "7 rovers" },
      { icon: <FaWeightHanging />, text: "~ 60,000 kg payload to surface" },
    ],
  },
  {
    id: 3,
    imageSrc: "/assets/images/phases/phase-3.png",
    imageAlt: "Building a Moon base: Phase Three",
    title: "PHASE THREE",
    bullets: [
      "Enable long-duration and distance human exploration",
      "Increase CLPS lander payload mass capability to 8 MT",
      "Regolith manipulation & site preparation capable",
      "Routine logistics deliveries from Earth",
      "Initial uncrewed mission cargo return capabilities",
    ],
    stats: [
      { icon: <BsRocketTakeoffFill />, text: "29 Launches" },
      { icon: <BsRocketFill />, text: "28 Landings" },
      { icon: <FaTruckMonster />, text: "4 rovers" },
      { icon: <FaWeightHanging />, text: "~ 150,000 kg payload to surface" },
    ],
  },
];

export interface GalleryImage {
  id: string | number;
  src: string;
  alt: string;
}
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: "/assets/images/gallery/gallery-1.jpeg",
    alt: "Gallery Image 1",
  },
  {
    id: 2,
    src: "/assets/images/gallery/gallery-2.jpeg",
    alt: "Gallery Image 2",
  },
  {
    id: 3,
    src: "/assets/images/gallery/gallery-3.jpeg",
    alt: "Gallery Image 3",
  },
  {
    id: 4,
    src: "/assets/images/gallery/gallery-4.jpeg",
    alt: "Gallery Image 4",
  },
  {
    id: 5,
    src: "/assets/images/gallery/gallery-5.jpeg",
    alt: "Gallery Image 5",
  },
  {
    id: 6,
    src: "/assets/images/gallery/gallery-6.jpeg",
    alt: "Gallery Image 6",
  },
  {
    id: 7,
    src: "/assets/images/gallery/gallery-7.jpeg",
    alt: "Gallery Image 7",
  },
];

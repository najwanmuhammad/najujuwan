export type Project = {
  id: number;
  title: string;
  category: "Frontend" | "Machine Learning" | "DevOps";
  description: string;
  tech: string[];
  image: string;
  link: string;
  github: string;
  size: "large" | "small"; // layout Bento Grid
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Smart Analytics Dashboard",
    category: "Machine Learning",
    description:
      "Dashboard interaktif yang memvisualisasikan prediksi penjualan menggunakan model regresi linear. Terintegrasi dengan Python API.",
    tech: ["Next.js", "Python", "TensorFlow", "D3.js"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", // Placeholder image
    link: "#",
    github: "#",
    size: "large", // Ini akan memakan 2 kolom
  },
  {
    id: 2,
    title: "E-Commerce CI/CD Pipeline",
    category: "DevOps",
    description:
      "Automasi deployment frontend ke AWS S3 + CloudFront menggunakan GitHub Actions dan Docker containers.",
    tech: ["Docker", "AWS", "GitHub Actions", "Terraform"],
    image:
      "https://images.unsplash.com/photo-1761839257661-c2392c65ea72?w=600&auto=format&fit=crop",
    link: "#",
    github: "#",
    size: "small",
  },
  {
    id: 3,
    title: "Cinematic Portfolio V1",
    category: "Frontend",
    description:
      "Eksplorasi animasi web performa tinggi menggunakan WebGL dan GSAP dengan skor Lighthouse 100.",
    tech: ["React", "Three.js", "Tailwind", "Framer Motion"],
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    link: "#",
    github: "#",
    size: "small",
  },
  {
    id: 4,
    title: "Smart Analytics Dashboard",
    category: "Machine Learning",
    description:
      "Dashboard interaktif yang memvisualisasikan prediksi penjualan menggunakan model regresi linear. Terintegrasi dengan Python API.",
    tech: ["Next.js", "Python", "TensorFlow", "D3.js"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", // Placeholder image
    link: "#",
    github: "#",
    size: "large", // Ini akan memakan 2 kolom
  },
];

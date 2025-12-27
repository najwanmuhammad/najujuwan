export type Project = {
  id: number;
  title: string;
  category: "Full Stack" | "Machine Learning" | "IoT" | "Mobile";
  description: string;
  tech: string[];
  image: string;
  link: string;
  github: string;
  size: "large" | "small";
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Automated Cutting Description",
    category: "Machine Learning",
    description:
      "Sistem B2B untuk analisis batuan otomatis menggunakan Computer Vision. Arsitektur full-stack yang menghubungkan layanan AI dengan dashboard interaktif untuk klien industri migas.",
    tech: ["YOLOv11", "Python", "FastAPI", "Next.js", "Supabase"],
    image: "/images/projects/acd.jpg",
    link: "https://github.com/najwanmuhammad/pmld-pdu-acd-ai",
    github: "https://github.com/najwanmuhammad/pmld-pdu-acd-ai",
    size: "large",
  },
  {
    id: 2,
    title: "AI Political Hoax Detection",
    category: "Machine Learning",
    description:
      "Sistem deteksi berita palsu politik menggunakan model IndoBERT dan Scikit-learn yang dikemas dalam layanan web Flask.",
    tech: ["Python", "IndoBERT", "Scikit-learn", "Flask"],
    image: "/images/projects/cekpolitikai.jpg",
    link: "https://github.com/najwanmuhammad/uas-ppd-deteksi-berita-hoaks",
    github: "https://github.com/najwanmuhammad/uas-ppd-deteksi-berita-hoaks",
    size: "small",
  },
  {
    id: 3,
    title: "Pharmaflow IoT System",
    category: "IoT",
    description:
      "Sistem inventaris obat cerdas menggunakan ESP32 dan Kotlin dengan fitur lokalisasi visual/audio instan.",
    tech: ["ESP32", "Kotlin", "C++", "IoT"],
    image: "/images/projects/pharmaflow.jpg",
    link: "#",
    github: "#",
    size: "small",
  },
  {
    id: 4,
    title: "Gamantaray Official Profile",
    category: "Full Stack",
    description:
      "Web profil organisasi yang sangat responsif dengan integrasi Headless CMS untuk manajemen konten tim riset.",
    tech: ["Next.js 15", "Tailwind CSS v4", "Framer Motion", "Sanity CMS"],
    image: "/images/projects/gamantaray.jpg",
    link: "https://github.com/najwanmuhammad/gayantaray",
    github: "https://github.com/najwanmuhammad/gayantaray",
    size: "large",
  },
  {
    id: 5,
    title: "Donora App (Top 50 APAC)",
    category: "Mobile",
    description:
      "Aplikasi mobile berbasis Flutter untuk donor darah yang berhasil masuk Top 50 Google Solution Challenge APAC 2025.",
    tech: ["Flutter", "Dart", "Firebase", "Google Cloud"],
    image: "/images/projects/donora.jpg",
    link: "https://github.com/orgs/PT-Istirahat-Sejenak/repositories",
    github: "https://github.com/orgs/PT-Istirahat-Sejenak/repositories",
    size: "large",
  },
];

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiReact, // Frontend
  SiPython,
  SiFastapi,
  SiLaravel,
  SiPostgresql,
  SiDocker,
  SiGit, // Backend
  SiKotlin,
  SiDart,
  SiFlutter,
  SiAndroid, // Mobile
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiPytorch, // AI
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Code2, Server, Smartphone, BrainCircuit } from "lucide-react";

export const techCategories = [
  {
    title: "Frontend Developer",
    icon: Code2,
    rotate: -3, // Miring Kiri (Judul di Kiri)
    direction: "left",
    speed: 40, // Sedikit diperlambat agar smooth
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    text: "text-blue-400",
    skills: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "React", icon: SiReact },
    ],
  },
  {
    title: "Backend Developer",
    icon: Server,
    rotate: 2, // Miring Kanan (Judul di Kanan)
    direction: "right",
    speed: 50,
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    text: "text-emerald-400",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Laravel", icon: SiLaravel },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Docker", icon: SiDocker },
      { name: "Git", icon: SiGit },
    ],
  },
  {
    title: "Mobile Developer",
    icon: Smartphone,
    rotate: -2, // Miring Kiri (Judul di Kiri)
    direction: "left",
    speed: 45,
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    text: "text-orange-400",
    skills: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
      { name: "Kotlin", icon: SiKotlin },
      { name: "Java", icon: FaJava },
      { name: "Android", icon: SiAndroid },
    ],
  },
  {
    title: "AI & Data Scientist",
    icon: BrainCircuit,
    rotate: 3, // Miring Kanan (Judul di Kanan)
    direction: "right",
    speed: 35,
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    text: "text-rose-400",
    skills: [
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "PyTorch", icon: SiPytorch },
      { name: "Scikit-Learn", icon: SiScikitlearn },
      { name: "Pandas", icon: SiPandas },
    ],
  },
];

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white selection:bg-primary/30 overflow-x-hidden">
      <Navbar />
      <Hero />
      <TechStack />
      <FeaturedProjects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

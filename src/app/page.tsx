import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white selection:bg-primary/30">
      <Navbar />
      <Hero />
      <TechStack />
      <FeaturedProjects />
      {/* selanjutnya */}
      <Footer />
    </main>
  );
}

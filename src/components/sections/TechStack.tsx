export default function TechStack() {
  const skills = [
    "Next.js 15",
    "TypeScript",
    "Tailwind CSS",
    "React", // Frontend
    "Python",
    "TensorFlow",
    "Scikit-Learn",
    "Pandas", // ML
    "Docker",
    "GitHub Actions",
    "AWS",
    "Linux", // DevOps
    "Figma",
    "Git",
    "PostgreSQL",
    "Framer Motion", // Tools
  ];

  return (
    <section className="py-10 border-y border-white/5 bg-white/[0.02] overflow-hidden">
      <div className="flex w-full">
        {/* Kita duplikasi list 2x untuk efek infinite loop yang seamless */}
        <div className="flex animate-scroll whitespace-nowrap">
          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="mx-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span className="text-2xl md:text-4xl font-bold text-white/20 uppercase hover:text-white transition-colors cursor-default">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

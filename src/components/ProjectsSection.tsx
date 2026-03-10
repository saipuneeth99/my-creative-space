import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Realtime Chat Application",
    tech: "Flutter · Supabase · PostgreSQL",
    period: "Jan 2026 – Feb 2026",
    points: [
      "Cross-platform real-time chat with Supabase Auth & Realtime APIs",
      "Provider-based MVCS architecture with read-receipt tracking",
      "Instant message delivery via database event listeners",
    ],
    github: "https://github.com/saipuneeth99",
  },
  {
    title: "Fake Account Detector",
    tech: "Python · scikit-learn · XGBoost · Streamlit",
    period: "Oct 2025 – Nov 2025",
    points: [
      "End-to-end ML pipeline for fake social media account detection",
      "Optimized models using hyperparameter tuning and AUC metrics",
      "Production-ready Streamlit app with real-time inference",
    ],
    github: "https://github.com/saipuneeth99",
    live: "#",
  },
  {
    title: "Grabit – Quick Commerce App",
    tech: "Flutter · Dart · GetX",
    period: "Jun 2025 – Jul 2025",
    points: [
      "Multi-screen Flutter app with catalog, cart, OTP login, and order tracking",
      "Auto-scrolling grids, category nav, and GetX state management",
      "40% reduction in cold-start time vs Blinkit/Zepto",
    ],
    github: "https://github.com/saipuneeth99",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">What I've built</p>
          <h2 className="text-3xl md:text-5xl font-bold font-mono">Projects</h2>
        </motion.div>

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-1">{project.title}</h3>
                  <p className="font-mono text-primary text-sm">{project.tech}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs text-muted-foreground font-mono">{project.period}</span>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              <ul className="space-y-2">
                {project.points.map((point, j) => (
                  <li key={j} className="text-muted-foreground text-sm md:text-base flex items-start gap-2">
                    <span className="text-primary mt-1.5 text-[6px]">●</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

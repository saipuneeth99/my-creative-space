import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const projects = [
  {
    title: "Realtime Chat Application",
    tech: "Flutter · Supabase Auth · PostgreSQL",
    period: "Jan 2026 – Feb 2026",
    points: [
      "Developed a cross-platform real-time chat app using Flutter, Supabase Auth, PostgreSQL, and Realtime APIs",
      "Implemented Provider-based MVCS architecture with conversation-participant schema and read-receipt tracking",
      "Achieved instant message delivery and state synchronization using database event listeners instead of polling",
    ],
    github: "https://github.com/saipuneeth99",
    image: "/project-chat.jpg",
    screenshots: [
      "/chat-splash.jpg",
      "/chat-signup.jpg", 
      "/chat-login.jpg",
      "/chat-messages.jpg",
      "/chat-conversation.jpg",
      "/chat-new-chat.jpg"
    ]
  },
  {
    title: "Fake Social Media Account Detector",
    tech: "Python · scikit-learn · XGBoost · Streamlit",
    period: "Oct 2025 – Nov 2025",
    points: [
      "Built an end-to-end ML pipeline using Python, scikit-learn, and XGBoost for fake account detection",
      "Optimized and selected models (LR, RF, GBM, XGBoost) using hyperparameter tuning and AUC metrics",
      "Deployed a production-ready Streamlit app with real-time inference and serialized model pipelines",
    ],
    github: "https://github.com/saipuneeth99",
    live: "#",
    image: "/project-fake-detector.jpg",
  },
  {
    title: "Grabit – Quick Commerce App",
    tech: "Flutter · Dart · GetX",
    period: "Jun 2025 – Jul 2025",
    points: [
      "Built a multi-screen Flutter app with product catalog, singleton-based cart, OTP login, and order tracking",
      "Designed responsive UI with auto-scrolling grids, category navigation, and GetX state management",
      "Reduced cold-start time and memory usage by 40% vs Blinkit/Zepto via optimized widget rendering",
    ],
    github: "https://github.com/saipuneeth99",
    image: "/project-grabit.jpg",
  },
];

const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <div>
      <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">What I've built</p>
      <h3 className="text-2xl md:text-3xl font-bold font-mono mb-8">Projects</h3>

      <Accordion type="single" collapsible defaultValue="projects-section">
        <AccordionItem value="projects-section" className="border-border/50">
          <AccordionTrigger className="hover:text-primary transition-colors text-lg font-mono font-bold">
            Projects ({projects.length})
          </AccordionTrigger>
          <AccordionContent className="pt-6 pb-4">
            <div className="space-y-3 max-h-[800px] overflow-y-auto pr-2">
              {projects.map((project) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="border border-border/50 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedProject(expandedProject === project.title ? null : project.title)}
                    className="w-full flex items-center justify-between p-4 hover:bg-secondary/20 transition-colors text-left group"
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold transition-colors group-hover:text-primary mb-1">{project.title}</h4>
                      <p className="font-mono text-primary text-xs truncate">{project.tech}</p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0 ml-4">
                      <span className="text-xs text-muted-foreground font-mono whitespace-nowrap">{project.period}</span>
                      {project.github && (
                        <motion.a 
                          whileHover={{ scale: 1.1 }} 
                          whileTap={{ scale: 0.9 }} 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="p-1.5 rounded-full bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-3.5 h-3.5" />
                        </motion.a>
                      )}
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform ${expandedProject === project.title ? 'rotate-180' : ''}`}
                      />
                    </div>
                  </button>
                  
                  {expandedProject === project.title && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-border/50 bg-secondary/10 p-4 space-y-4"
                    >
                      {project.image && (
                        <div className="w-full h-80 rounded-lg overflow-hidden bg-secondary/20 border border-border/50">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}
                      
                      {project.screenshots && project.screenshots.length > 0 && (
                        <div className="space-y-2">
                          <p className="text-xs font-mono text-primary">App Screenshots</p>
                          <div className="grid grid-cols-3 gap-2">
                            {project.screenshots.map((screenshot, idx) => (
                              <div key={idx} className="aspect-[9/16] rounded-lg overflow-hidden bg-secondary/20 border border-border/50">
                                <img 
                                  src={screenshot} 
                                  alt={`${project.title} screenshot ${idx + 1}`}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <ul className="space-y-2">
                        {project.points.map((point, j) => (
                          <li
                            key={j}
                            className="text-muted-foreground text-sm flex items-start gap-2"
                          >
                            <span className="text-primary mt-1 text-[6px]">■</span>
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                      {project.live && (
                        <motion.a
                          whileHover={{ x: 5 }}
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-medium text-foreground hover:text-primary transition-colors"
                        >
                          View Project <ExternalLink className="w-3.5 h-3.5" />
                        </motion.a>
                      )}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ProjectsSection;

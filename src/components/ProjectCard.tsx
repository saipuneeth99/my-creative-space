import { motion } from "framer-motion";
import { Github, ExternalLink, Image as ImageIcon } from "lucide-react";

interface ProjectCardProps {
  title: string;
  tech: string;
  period: string;
  points: string[];
  github?: string;
  live?: string;
  image?: string;
}

const ProjectCard = ({ title, tech, period, points, github, live, image }: ProjectCardProps) => {
  return (
    <div>
      {/* Screenshot area */}
      <div className="w-full aspect-video rounded-xl overflow-hidden bg-secondary/30 border border-border/30 mb-5 relative flex items-center justify-center group-hover:border-primary/20 transition-colors">
        <ImageIcon className="w-10 h-10 opacity-15 absolute" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover z-10 opacity-0 transition-all duration-700 group-hover:scale-105"
          onLoad={(e) => (e.currentTarget.style.opacity = "1")}
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
        <span className="absolute z-0 text-[10px] font-mono opacity-40">Screenshot</span>
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-1 transition-colors group-hover:text-primary">{title}</h3>
          <p className="font-mono text-primary text-xs">{tech}</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs text-muted-foreground font-mono bg-secondary/50 px-2 py-0.5 rounded-full">{period}</span>
          {github && (
            <motion.a whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }} href={github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors">
              <Github className="w-4 h-4" />
            </motion.a>
          )}
          {live && (
            <motion.a whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }} href={live} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors">
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Bullet points */}
      <ul className="space-y-2 mt-4">
        {points.map((point, j) => (
          <li key={j} className="text-muted-foreground text-sm flex items-start gap-2">
            <span className="text-primary mt-1.5 text-[6px] transition-transform group-hover:scale-150">■</span>
            <span className="leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;

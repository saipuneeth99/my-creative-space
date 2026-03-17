import { motion } from "framer-motion";
import { Users, Brain, Target, Handshake, Zap } from "lucide-react";

const softSkills = [
  {
    title: "Rapid Adaptive Learning",
    description: "Quick to pick up new technologies and frameworks",
    icon: Zap,
  },
  {
    title: "Strategic Problem Solving",
    description: "Breaking complex problems into elegant solutions",
    icon: Brain,
  },
  {
    title: "Analytical Decision-Making",
    description: "Data-driven approach to critical decisions",
    icon: Target,
  },
  {
    title: "Cross-Functional Collaboration",
    description: "Effective teamwork across engineering & design",
    icon: Users,
  },
  {
    title: "Ownership & Execution",
    description: "Result-oriented delivery with accountability",
    icon: Handshake,
  },
];

const SoftSkillsSection = () => {
  return (
    <div>
      <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">How I work</p>
      <h3 className="text-2xl md:text-3xl font-bold font-mono mb-8">Soft Skills</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {softSkills.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.3 }}
              whileHover={{ y: -3, scale: 1.02 }}
              className="group flex items-start gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">{skill.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{skill.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SoftSkillsSection;

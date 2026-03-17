import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "C++", "Java", "Dart"],
  },
  {
    title: "Web Technologies & Frameworks",
    skills: ["HTML", "CSS", "JavaScript", "Flutter", "Streamlit"],
  },
  {
    title: "Core Competencies",
    skills: ["DSA", "Operating Systems", "DBMS", "API Integration"],
  },
  {
    title: "Machine Learning",
    skills: ["Model Evaluation (AUC)", "Feature Engineering", "Data Preprocessing", "scikit-learn", "XGBoost", "Pandas", "NumPy"],
  },
  {
    title: "Databases & Cloud",
    skills: ["MongoDB", "Firebase Firestore", "Supabase"],
  },
];

const SkillsSection = () => {
  return (
    <div>
      <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">What I work with</p>
      <h3 className="text-2xl md:text-3xl font-bold font-mono mb-8">Technical Skills</h3>

      <div className="grid grid-cols-1 gap-4">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.3 }}
            className="p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-all duration-300"
          >
            <h4 className="font-mono text-primary text-xs tracking-wider uppercase mb-3">{cat.title}</h4>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.2)", color: "hsl(var(--primary))" }}
                  className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground font-medium cursor-default transition-colors duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;

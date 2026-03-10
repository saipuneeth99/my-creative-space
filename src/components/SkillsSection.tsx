import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "C++", "Java", "Dart", "JavaScript"],
  },
  {
    title: "Frameworks & Tools",
    skills: ["Flutter", "Streamlit", "HTML/CSS", "GetX", "Provider"],
  },
  {
    title: "Data & ML",
    skills: ["scikit-learn", "XGBoost", "Pandas", "NumPy", "Feature Engineering"],
  },
  {
    title: "Databases & Cloud",
    skills: ["MongoDB", "Firebase", "Supabase", "PostgreSQL"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">What I work with</p>
          <h2 className="text-3xl md:text-5xl font-bold font-mono">Skills & Tech</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <h3 className="font-mono text-primary text-sm tracking-wider uppercase mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

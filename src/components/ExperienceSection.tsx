import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Where I've worked</p>
          <h2 className="text-3xl md:text-5xl font-bold font-mono">Experience</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Internship */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 rounded-2xl bg-card border border-border"
          >
            <p className="font-mono text-xs text-muted-foreground mb-2">Jun 2025 – Aug 2025</p>
            <h3 className="text-xl font-bold mb-1">Gen AI Intern</h3>
            <p className="text-primary font-mono text-sm mb-4">NeuroverseAI</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-primary mt-1.5 text-[6px]">●</span>Generative AI model experimentation and benchmarking</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1.5 text-[6px]">●</span>Advanced prompt engineering for contextual accuracy</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1.5 text-[6px]">●</span>Prototype automation tools for content generation workflows</li>
            </ul>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 md:p-8 rounded-2xl bg-card border border-border"
          >
            <p className="font-mono text-xs text-muted-foreground mb-2">Since Aug 2023</p>
            <h3 className="text-xl font-bold mb-1">B.Tech in Computer Science</h3>
            <p className="text-primary font-mono text-sm mb-4">Lovely Professional University · AI & ML</p>
            <p className="text-muted-foreground text-sm">CGPA: 7.27</p>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="font-mono text-xs text-primary uppercase tracking-wider mb-3">Certifications</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Flutter & Dart – The Complete Guide (Udemy)</li>
                <li>Master Generative AI & Tools (Udemy)</li>
                <li>Python towards ML/AI (CSE Pathshala)</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

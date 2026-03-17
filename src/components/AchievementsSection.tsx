import { motion } from "framer-motion";
import { Award, Star } from "lucide-react";

const achievements = [
  {
    title: "Implemented realtime messaging system using Flutter Provider and Supabase Realtime",
    date: "Feb 2026",
  },
  {
    title: "Built AI-powered Fake Social Media Account Detector showcased during project review",
    date: "Nov 2025",
  },
  {
    title: "Coordinator of 36-Hour Hackathon at LPU – managed 200+ participants",
    date: "Dec 2024",
  },
];

const extracurriculars = [
  {
    title: "AWS Student Community Day Jalandhar – Attendee",
    date: "Nov 2025",
  },
  {
    title: "Community Service – Happy Homes Old Age Home",
    date: "Aug 2024",
  },
  {
    title: "Binary Blitz Hackathon – Participant, Lovely Professional University",
    date: "Mar 2024",
  },
];

const AchievementsSection = () => {
  return (
    <div>
      <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Milestones</p>
      <h3 className="text-2xl md:text-3xl font-bold font-mono mb-8">Achievements</h3>

      <div className="grid gap-6">
        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-5 rounded-xl bg-secondary/20 border border-border/50 hover:border-primary/30 transition-all duration-300"
        >
          <div className="flex items-center gap-2 mb-5">
            <Award className="w-5 h-5 text-primary" />
            <h4 className="text-base font-bold">Key Highlights</h4>
          </div>
          <ul className="space-y-4">
            {achievements.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + (i * 0.08) }}
                className="flex gap-3 group"
              >
                <div className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-primary transition-transform group-hover:scale-150" />
                <div>
                  <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors">{item.title}</p>
                  <span className="text-xs font-mono text-primary/70 mt-1 block">{item.date}</span>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Extracurriculars */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="p-5 rounded-xl bg-secondary/20 border border-border/50 hover:border-primary/30 transition-all duration-300"
        >
          <div className="flex items-center gap-2 mb-5">
            <Star className="w-5 h-5 text-primary" />
            <h4 className="text-base font-bold">Extra-Curriculars</h4>
          </div>
          <ul className="space-y-4">
            {extracurriculars.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + (i * 0.08) }}
                className="flex gap-3 group"
              >
                <div className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-primary transition-transform group-hover:scale-150" />
                <div>
                  <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors">{item.title}</p>
                  <span className="text-xs font-mono text-primary/70 mt-1 block">{item.date}</span>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default AchievementsSection;

import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-primary text-sm md:text-base tracking-widest uppercase mb-4"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-mono tracking-tight mb-6"
        >
          <span className="text-gradient">Sai Puneeth</span>
          <br />
          <span className="text-foreground">Yerramsetti</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          B.Tech CSE (AI & ML) student building real-time apps, ML pipelines, and cross-platform mobile experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-5"
        >
          {[
            { icon: Github, href: "https://github.com/saipuneeth99", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/sai-puneeth-yerramsetti", label: "LinkedIn" },
            { icon: Mail, href: "mailto:saipuneeth919@gmail.com", label: "Email" },
            { icon: Phone, href: "tel:+919010743807", label: "Phone" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary hover:glow-border transition-all duration-300 group"
              aria-label={label}
            >
              <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

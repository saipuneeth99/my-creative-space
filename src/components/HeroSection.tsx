import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import FloatingParticles from "./FloatingParticles";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax: background moves slower
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </motion.div>

      {/* Floating Particles */}
      <FloatingParticles />

      <motion.div className="relative z-10 text-center max-w-4xl mx-auto px-6" style={{ y: textY, opacity }}>
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
          <span className="text-shimmer">Sai Puneeth</span>
          <br />
          <span className="text-foreground">Yerramsetti</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          B.Tech CSE (AI & ML) at Lovely Professional University. Passionate about building intelligent systems, real-time applications, and seamless cross-platform experiences using Flutter, Python, and Machine Learning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 glow-pulse"
          >
            About Me
          </motion.a>
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full border border-border bg-card/50 backdrop-blur-sm font-medium hover:border-primary transition-colors"
          >
            View Resume
          </motion.a>
        </motion.div>

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
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary hover:glow-border transition-all duration-300 group inline-flex"
              aria-label={label}
              whileHover={{ y: -5, scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

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
          <motion.div
            className="w-1 h-2 rounded-full bg-primary"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

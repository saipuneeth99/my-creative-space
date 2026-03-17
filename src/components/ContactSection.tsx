import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

const links = [
  { icon: Mail, label: "saipuneeth919@gmail.com", href: "mailto:saipuneeth919@gmail.com" },
  { icon: Phone, label: "+91 9010743807", href: "tel:+919010743807" },
  { icon: Github, label: "github.com/saipuneeth99", href: "https://github.com/saipuneeth99" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/sai-puneeth-yerramsetti" },
];

const ContactSection = () => {
  return (
    <div className="text-center">
      <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Get in touch</p>
      <h3 className="text-2xl md:text-3xl font-bold font-mono mb-3 text-shimmer">Let's Connect</h3>
      <p className="text-muted-foreground mb-8 text-sm max-w-sm mx-auto">
        Open to opportunities in software development, ML engineering, and mobile app development.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
        {links.map(({ icon: Icon, label, href }, i) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + (i * 0.08) }}
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border/50 bg-secondary/20 hover:border-primary/30 hover:glow-border transition-all duration-300 text-sm text-muted-foreground hover:text-foreground group"
          >
            <Icon className="w-4 h-4 text-primary transition-transform group-hover:scale-110" />
            <span className="text-xs">{label}</span>
          </motion.a>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-xs text-muted-foreground font-mono"
      >
        © 2026 Sai Puneeth Yerramsetti
      </motion.p>
    </div>
  );
};

export default ContactSection;

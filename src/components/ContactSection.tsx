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
    <section id="contact" className="section-padding bg-card/30">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Get in touch</p>
          <h2 className="text-3xl md:text-5xl font-bold font-mono mb-6">Let's Connect</h2>
          <p className="text-muted-foreground mb-12 max-w-lg mx-auto">
            Open to opportunities in software development, ML engineering, and mobile app development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {links.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-border bg-card hover:border-primary/50 hover:glow-border transition-all duration-300 text-sm text-muted-foreground hover:text-foreground"
            >
              <Icon className="w-4 h-4 text-primary" />
              {label}
            </a>
          ))}
        </motion.div>

        <p className="mt-20 text-xs text-muted-foreground font-mono">
          © 2026 Sai Puneeth Yerramsetti
        </p>
      </div>
    </section>
  );
};

export default ContactSection;

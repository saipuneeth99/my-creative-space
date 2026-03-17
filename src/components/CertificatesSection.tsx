import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const certificates = [
  {
    title: "Flutter and Dart – The Complete Guide",
    issuer: "Udemy",
    date: "Nov 2025",
    link: "#",
    description: "Comprehensive training in Flutter and Dart, focusing on UI design, app architecture, and cross-platform development.",
    image: "/cert-flutter.jpg",
  },
  {
    title: "Master Generative AI & Generative AI Tools",
    issuer: "Udemy",
    date: "Aug 2025",
    link: "#",
    description: "Deep dive into generative AI models, prompt engineering, and utilizing AI tools for advanced workflows.",
    image: "/cert-genai.jpg",
  },
  {
    title: "Unrevealing Basic Python towards ML/AI",
    issuer: "CSE Pathshala",
    date: "Mar 2024",
    link: "#",
    description: "Foundational course covering Python basics and transitioning into fundamental Machine Learning and AI concepts.",
    image: "/cert-python.jpg",
  },
];

const CertificatesSection = () => {
  const [expandedCert, setExpandedCert] = useState<string | null>(null);

  return (
    <div>
      <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">My Verifiable Skills</p>
      <h3 className="text-2xl md:text-3xl font-bold font-mono mb-8">Certificates</h3>

      <Accordion type="single" collapsible defaultValue="certs-section">
        <AccordionItem value="certs-section" className="border-border/50">
          <AccordionTrigger className="hover:text-primary transition-colors text-lg font-mono font-bold">
            Certificates ({certificates.length})
          </AccordionTrigger>
          <AccordionContent className="pt-6 pb-4">
            <div className="space-y-3 max-h-[800px] overflow-y-auto pr-2">
              {certificates.map((cert) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="border border-border/50 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedCert(expandedCert === cert.title ? null : cert.title)}
                    className="w-full flex items-center justify-between p-4 hover:bg-secondary/20 transition-colors text-left group"
                  >
                    <div className="flex-1">
                      <p className="font-mono text-primary text-xs mb-1">{cert.issuer}</p>
                      <h4 className="text-sm font-bold transition-colors group-hover:text-primary">{cert.title}</h4>
                    </div>
                    <div className="flex items-center gap-3 shrink-0 ml-4">
                      <span className="text-xs text-muted-foreground font-mono">{cert.date}</span>
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform ${expandedCert === cert.title ? 'rotate-180' : ''}`}
                      />
                    </div>
                  </button>
                  
                  {expandedCert === cert.title && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-border/50 bg-secondary/10 p-4 space-y-4"
                    >
                      {cert.image && (
                        <div className="w-full h-80 rounded-lg overflow-hidden bg-secondary/20 border border-border/50">
                          <img 
                            src={cert.image} 
                            alt={cert.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}
                      <p className="text-muted-foreground text-sm mb-4">{cert.description}</p>
                      <motion.a
                        whileHover={{ x: 5 }}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-medium text-foreground hover:text-primary transition-colors"
                      >
                        View Certificate <ExternalLink className="w-3.5 h-3.5" />
                      </motion.a>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CertificatesSection;

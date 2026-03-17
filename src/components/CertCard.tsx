import { motion } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";

interface CertCardProps {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image?: string;
}

const CertCard = ({ title, issuer, date, description, image }: CertCardProps) => {
  return (
    <div>
      {/* Screenshot area */}
      <div className="w-full aspect-video rounded-xl overflow-hidden bg-secondary/30 border border-border/30 mb-5 relative flex items-center justify-center group-hover:border-primary/20 transition-colors">
        <ImageIcon className="w-10 h-10 opacity-15 absolute" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover z-10 opacity-0 transition-all duration-700 group-hover:scale-105"
          onLoad={(e) => (e.currentTarget.style.opacity = "1")}
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
        <span className="absolute z-0 text-[10px] font-mono opacity-40">Certificate</span>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <p className="font-mono text-primary text-xs font-medium">{issuer}</p>
        <span className="text-xs text-muted-foreground font-mono bg-secondary/50 px-2 py-0.5 rounded-full">{date}</span>
      </div>

      <h3 className="text-lg md:text-xl font-bold mb-3 leading-tight transition-colors group-hover:text-primary">{title}</h3>
      <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{description}</p>
    </div>
  );
};

export default CertCard;

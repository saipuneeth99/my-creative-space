import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, type ReactNode, Children, cloneElement, isValidElement } from "react";

interface RoadmapTimelineProps {
  children: ReactNode;
}

const RoadmapTimeline = ({ children }: RoadmapTimelineProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Clone children, injecting openIndex + setOpenIndex
  const nodes = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child as React.ReactElement<any>, {
        openIndex,
        setOpenIndex,
      });
    }
    return child;
  });

  return (
    <div ref={containerRef} className="relative px-4 md:px-8 pb-20">
      {/* ===== THE WINDING MAP PATH ===== */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 z-10">
        {/* Thick unfilled track — the visible road */}
        <div className="absolute inset-0 w-[6px] -translate-x-1/2 bg-border/30 rounded-full" />

        {/* Dashed guide marks */}
        <div className="absolute inset-0 w-[6px] -translate-x-1/2 rounded-full" style={{
          backgroundImage: "repeating-linear-gradient(to bottom, transparent 0px, transparent 30px, hsl(var(--border)/0.2) 30px, hsl(var(--border)/0.2) 34px)",
        }} />

        {/* Filled progress — glowing */}
        <motion.div
          className="absolute top-0 w-[6px] -translate-x-1/2 bg-primary rounded-full shadow-[0_0_12px_hsl(var(--primary)/0.4)]"
          style={{ height: fillHeight }}
        />

        {/* Glowing tip orb */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-primary shadow-[0_0_20px_hsl(var(--primary)/0.7)] z-20"
          style={{ top: fillHeight }}
        />
      </div>

      {/* ===== LEVEL NODES ===== */}
      <div className="relative z-20">
        {nodes}
      </div>
    </div>
  );
};

export default RoadmapTimeline;

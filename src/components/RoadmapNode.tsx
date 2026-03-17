import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { X } from "lucide-react";

interface RoadmapNodeProps {
  icon: LucideIcon;
  label: string;
  children: ReactNode;
  id?: string;
  index: number;
  side: "left" | "right";
  openIndex?: number | null;
  setOpenIndex?: (index: number | null) => void;
}

const RoadmapNode = ({ icon: Icon, label, children, id, index, side, openIndex, setOpenIndex }: RoadmapNodeProps) => {
  const dotRef = useRef<HTMLDivElement>(null);
  // No once:true — re-triggers on scroll up AND down
  // Tight margin so it only fires when dot is near viewport center
  const isInView = useInView(dotRef, { margin: "-40% 0px -40% 0px" });
  const isOpen = openIndex === index;

  // Open when dot enters center zone, close when it leaves
  useEffect(() => {
    if (isInView && setOpenIndex) {
      const timer = setTimeout(() => setOpenIndex(index), 300);
      return () => clearTimeout(timer);
    } else if (!isInView && isOpen && setOpenIndex) {
      // Dot scrolled out of view — close this popup
      setOpenIndex(null);
    }
  }, [isInView]);

  const close = () => setOpenIndex?.(null);

  return (
    <div id={id} className="relative flex items-center justify-center" style={{ minHeight: "60vh" }}>
      {/* The level dot on the map */}
      <div
        ref={dotRef}
        className="relative z-20 flex flex-col items-center cursor-pointer"
        onClick={() => setOpenIndex?.(isOpen ? null : index)}
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="relative"
        >
          <div
            className={`w-16 h-16 rounded-full border-[3px] flex items-center justify-center transition-all duration-500 ${
              isInView
                ? "border-primary bg-primary/15 shadow-[0_0_30px_hsl(var(--primary)/0.5)] scale-110"
                : "border-border/40 bg-card/60 scale-100"
            }`}
          >
            <Icon className={`w-7 h-7 transition-colors duration-500 ${isInView ? "text-primary" : "text-muted-foreground/50"}`} />
          </div>

          {/* Pulse rings when active */}
          {isInView && (
            <>
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/40"
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border border-primary/20"
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{ scale: 3, opacity: 0 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.3 }}
              />
            </>
          )}
        </motion.div>

        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: isInView ? 1 : 0.4, y: 0 }}
          className="mt-3 text-[10px] font-mono tracking-[0.15em] uppercase px-3 py-1 rounded-full border transition-all duration-500"
          style={{
            color: isInView ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
            borderColor: isInView ? "hsl(var(--primary)/0.3)" : "hsl(var(--border)/0.3)",
            background: isInView ? "hsl(var(--primary)/0.08)" : "transparent",
          }}
        >
          {label}
        </motion.span>
      </div>

      {/* ===== POPUP — pops from the dot ===== */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            {/* Dark backdrop */}
            <motion.div
              key={`backdrop-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/70 backdrop-blur-md z-40"
              onClick={close}
            />

            {/* Burst rings from dot */}
            <motion.div
              key={`ring1-${index}`}
              className="absolute z-45 rounded-full border-2 border-primary/30 pointer-events-none"
              initial={{ width: 16, height: 16, opacity: 1 }}
              animate={{ width: 600, height: 600, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <motion.div
              key={`ring2-${index}`}
              className="absolute z-45 rounded-full border border-primary/15 pointer-events-none"
              initial={{ width: 16, height: 16, opacity: 0.6 }}
              animate={{ width: 900, height: 900, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            />

            {/* The popup card */}
            <motion.div
              key={`popup-${index}`}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none"
            >
              <motion.div
                initial={{ scale: 0, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: -10 }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 25,
                }}
                style={{ transformOrigin: "center center" }}
                className="w-full max-w-3xl max-h-[85vh] overflow-y-auto pointer-events-auto roadmap-popup rounded-3xl bg-card/95 backdrop-blur-xl border border-primary/20 shadow-[0_25px_80px_hsl(var(--primary)/0.2),0_0_0_1px_hsl(var(--primary)/0.05)] p-8 md:p-10 relative"
              >
                {/* Close button */}
                <button
                  onClick={close}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-secondary/60 hover:bg-destructive/20 hover:text-destructive flex items-center justify-center transition-all duration-200 z-10 border border-border/30"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Header with icon */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-full border-2 border-primary bg-primary/10 flex items-center justify-center shadow-[0_0_15px_hsl(var(--primary)/0.3)]">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-mono text-primary tracking-[0.15em] uppercase font-semibold">{label}</span>
                </div>

                {children}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RoadmapNode;

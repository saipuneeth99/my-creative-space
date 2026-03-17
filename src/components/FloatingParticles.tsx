import { motion } from "framer-motion";
import { useMemo } from "react";

const FloatingParticles = () => {
    const particles = useMemo(() => {
        return Array.from({ length: 20 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 6 + 2,
            duration: Math.random() * 15 + 10,
            delay: Math.random() * 5,
            opacity: Math.random() * 0.3 + 0.05,
        }));
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-primary"
                    style={{
                        width: p.size,
                        height: p.size,
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        opacity: p.opacity,
                    }}
                    animate={{
                        y: [0, -40, 20, -25, 0],
                        x: [0, 15, -10, 20, 0],
                        scale: [1, 1.2, 0.9, 1.1, 1],
                        opacity: [p.opacity, p.opacity * 2, p.opacity * 0.5, p.opacity * 1.5, p.opacity],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Larger glowing orbs */}
            <motion.div
                className="absolute w-72 h-72 rounded-full"
                style={{
                    background: "radial-gradient(circle, hsl(174 72% 56% / 0.05) 0%, transparent 70%)",
                    top: "20%",
                    right: "10%",
                }}
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute w-96 h-96 rounded-full"
                style={{
                    background: "radial-gradient(circle, hsl(190 80% 65% / 0.04) 0%, transparent 70%)",
                    bottom: "10%",
                    left: "5%",
                }}
                animate={{
                    scale: [1.1, 0.9, 1.1],
                    opacity: [0.2, 0.5, 0.2],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
        </div>
    );
};

export default FloatingParticles;

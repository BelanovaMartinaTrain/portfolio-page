"use client";
import React, { useEffect, useRef } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../../components/ui/revealEffect";

export function CanvasRevealEffectDemo3({ children }) {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const revealRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!revealRef.current) return;
        setIsLoaded(true);
    }, []);

    return (
        <div
            ref={revealRef}
            onMouseEnter={() => setIsLoaded(true)}
            className="z-10 rounded-2xl h-[40rem] flex flex-col lg:flex-row overflow-hidden items-center justify-center bg-black w-full gap-4 mx-auto px-8 relative"
        >
            {children}
            <AnimatePresence>
                {!!isLoaded && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full w-full absolute inset-0">
                        <CanvasRevealEffect
                            animationSpeed={4}
                            containerClassName="bg-transparent"
                            colors={[
                                [59, 130, 246],
                                [139, 92, 246],
                                [147, 197, 253],
                            ]}
                            opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1, 1, 1, 1]}
                            dotSize={1}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            {/* Radial gradient for the cute fade */}
            <div className="absolute inset-0 [mask-image:radial-gradient(600px_at_center,white,transparent)] bg-black/60 dark:bg-black/100" />
        </div>
    );
}

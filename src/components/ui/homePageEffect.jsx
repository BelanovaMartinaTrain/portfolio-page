"use client";
import React, { useEffect, useRef } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./revealEffect";

// eslint-disable-next-line react/prop-types
export function CanvasRevealEffectDemo3({ children }) {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const revealRef = useRef(null);

    useEffect(() => {
        if (!revealRef.current) return;
        setIsLoaded(true);
    }, []);

    return (
        <div
            ref={revealRef}
            onMouseEnter={() => setIsLoaded(true)}
            className="z-10 rounded-2xl h-[30rem] sm:h-[40rem] flex flex-row overflow-hidden items-center justify-center bg-black w-full  mx-auto px-2 relative"
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
                            dotSize={2}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            {/* Radial gradient for the cute fade */}
            <div className="absolute inset-0 [mask-image:radial-gradient(100px_at_center,white,transparent)] xl:[mask-image:radial-gradient(600px_at_center,white,transparent)] bg-black/60 dark:bg-black/100" />
        </div>
    );
}

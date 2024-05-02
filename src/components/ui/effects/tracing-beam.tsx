"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { cn } from "../../../utils/cn";

export const TracingBeam = ({ children, className, divKey }: { children: React.ReactNode; className?: string; divKey: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    let y1Num = 2000;

    const contentRef = useRef<HTMLDivElement>(null);
    const [svgHeight, setSvgHeight] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            setSvgHeight(contentRef.current.offsetHeight);
        }
    }, [divKey]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setWindowHeight(window.innerHeight);
        }
    }, []);

    if (svgHeight && windowHeight && svgHeight > windowHeight && svgHeight - windowHeight < 300) {
        y1Num = 3500;
    } else {
        y1Num = 2000;
    }

    const y1 = useSpring(useTransform(scrollYProgress, [0, 0.8], [0, svgHeight + y1Num]), {
        stiffness: 500,
        damping: 90,
    });
    // const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, svgHeight + 200]), {
    //     stiffness: 500,
    //     damping: 90,
    // });

    return (
        <motion.div ref={ref} className={cn("relative w-full max-w-4xl mx-auto h-full ", className)}>
            <div className="absolute -left-8 xs:-left-14 md:-left-18 lg:-left-18 top-3">
                <svg
                    viewBox={`0 0 20 ${svgHeight}`}
                    width="20"
                    height={svgHeight} // Set the SVG height
                    className=" ml-4 block"
                    aria-hidden="true"
                >
                    <motion.path
                        d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.7} l -18 24V ${svgHeight}`}
                        fill="none"
                        stroke="#9091A0"
                        strokeOpacity="0.16"
                        transition={{
                            duration: 10,
                        }}
                    ></motion.path>
                    <motion.path
                        d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.7} l -18 24V ${svgHeight}`}
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="1.25"
                        className="motion-reduce:hidden"
                        transition={{
                            duration: 10,
                        }}
                    ></motion.path>
                    <defs>
                        <motion.linearGradient
                            id="gradient"
                            gradientUnits="userSpaceOnUse"
                            x1="0"
                            x2="0"
                            y1={y1} // set y1 for gradient
                            y2={windowHeight + (windowHeight - svgHeight) < 0 ? 0 : windowHeight + (windowHeight - svgHeight)} // set y2 for gradient
                        >
                            <stop stopColor="#fff" stopOpacity="0"></stop>
                            <stop stopColor="#fff"></stop>
                            <stop offset="0.325" stopColor="#0284C7"></stop>
                            <stop offset="1" stopColor="#0369A1" stopOpacity="0"></stop>
                        </motion.linearGradient>
                    </defs>
                </svg>
            </div>
            <div ref={contentRef} key={divKey} className="relative">
                {children}
            </div>
        </motion.div>
    );
};

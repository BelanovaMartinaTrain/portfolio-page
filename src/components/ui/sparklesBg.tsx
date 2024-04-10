"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";

export function SparklesBg({ children }) {
    return (
        <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
            <div className="w-full absolute inset-0 h-screen">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.2}
                    maxSize={1.8}
                    particleDensity={150}
                    className="w-full h-full"
                    particleColor="#2563EB"
                    speed={0.5}
                />
            </div>
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(70%_90%_at_center,transparent_40%,white)]"></div>
            <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center font-dmsans tracking-wider text-white relative z-20">{children}</h1>
        </div>
    );
}

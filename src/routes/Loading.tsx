import { useEffect, useState } from "react";
import { Loading } from "../components/LoadingWithEffect";
import { SparklesCore } from "../components/ui/effects/sparkles";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function LoadingPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setIsLoaded(true);
        });
    }, []);

    return (
        <>
            <div
                className={`absolute font-dmsans inset-0 w-full h-full bg-black transition-opacity ease-out duration-1000  ${
                    isLoaded ? "opacity-0" : "opacity-100"
                }`}
            >
                <Loading />
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.2}
                    maxSize={1.8}
                    particleDensity={200}
                    className="w-full h-full hidden"
                    particleColor="#2563EB"
                    speed={1}
                />
            </div>
        </>
    );
}

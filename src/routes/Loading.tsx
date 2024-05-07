import { useEffect, useState } from "react";
import { Loading } from "../components/LoadingWithEffect";
import { SparklesCore } from "../components/ui/effects/sparkles";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function LoadingPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 7000);

        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        });

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div
                className={`absolute font-dmsans inset-0 w-full h-full bg-black transition-opacity ease-out duration-1000  ${
                    isLoaded ? "opacity-0" : "opacity-100"
                }`}
            >
                <Loading />
            </div>
        </>
    );
}

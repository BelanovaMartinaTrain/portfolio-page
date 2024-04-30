import { useEffect, useState } from "react";
import { Loading } from "../components/LoadingWithEffect";
import { SparklesCore } from "../components/ui/effects/sparkles";

export default function LoadingPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 7000);
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
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.2}
                    maxSize={1.8}
                    particleDensity={150}
                    className="w-full h-full hidden"
                    particleColor="#2563EB"
                    speed={0.5}
                />
            </div>
        </>
    );
}
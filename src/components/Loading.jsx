import { Loading } from "./LoadingGemini";
import { SparklesCore } from "./ui/sparkles";

export default function LoadingPage() {
    return (
        <>
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(70%_90%_at_center,transparent_40%,white)]"></div>
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
        </>
    );
}

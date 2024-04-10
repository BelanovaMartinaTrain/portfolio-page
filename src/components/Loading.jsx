import { Loading } from "./LoadingGemini";

export default function LoadingPage() {
    return (
        <>
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(70%_90%_at_center,transparent_40%,white)]"></div>
            <Loading />
        </>
    );
}

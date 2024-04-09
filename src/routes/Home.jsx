//import { CanvasRevealEffectDemo3 } from "../components/ui/homePageEffect";
import { useEffect, useState, useRef } from "react";
import Button from "../components/Button";
import { SparklesBg } from "../components/ui/sparklesBg";

function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const textRef = useRef(null);

    useEffect(() => {
        if (!textRef) return;
        setTimeout(() => {
            setIsLoading(false);
        }, 300);
    }, []);

    return (
        <div className={`p-0 transition-opacity ease-in duration-500 mt-auto ${isLoading ? "opacity-0" : "opacity-100"}`}>
            <SparklesBg>
                <div ref={textRef} className=" sm:p-12  p-4 rounded-2xl z-50 ">
                    <div className="grid lg:grid-cols-8 lg:grid-rows-2  grid-flow-row tracking-wider">
                        <section className=" sm:self-center flex justify-center mt-8 sm:mt-0 sm:row-span-2 sm:col-span-6 "></section>
                        <section className="text-lg md:text-xl lg:text-2xl leading-9 text-center text-stone-50 font-dmsans   grid-flow-col sm:col-span-6 sm:col-start-2 sm:align-middle sm:row-span-2 sm:items-center sm:justify-between sm:self-center">
                            <h1 className="text-xl md:text-2xl lg:text-3xl font-medium mt-5 z-50 uppercase  drop-shadow-[0px_2px_2px_rgba(0,0,0,1)] ">
                                Ahoj!
                            </h1>

                            <h1 className="font-medium sm:p-10 mt-4 mb-6  drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]">
                                My name is <span className="font-semibold uppercase">Martina</span>. I&apos;m a{" "}
                                <span className="font-semibold capitalise">FULLSTACK </span>
                                Web Developer.
                                <br /> Feel free to browse through my portfolio and get a glimpse of my work. Enjoy!
                            </h1>
                            <Button>CV</Button>
                        </section>
                    </div>
                </div>
                <div className="absolute inset-0 [mask-image:radial-gradient(80%_80%_at_center,white,transparent_40%)] -z-10 bg-black/10 dark:bg-black/90" />
            </SparklesBg>
        </div>
    );
}

export default Home;

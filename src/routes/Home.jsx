import { CanvasRevealEffectDemo3 } from "../components/ui/homePageEffect";
import Button from "../components/Button";

function Home() {
    //bg-black bg-opacity-40
    return (
        <div className="  p-1   ">
            <CanvasRevealEffectDemo3>
                <div className=" sm:p-12  p-4 rounded-2xl z-50 ">
                    <div className="grid lg:grid-cols-8 lg:grid-rows-2  grid-flow-row tracking-wider">
                        <section className=" sm:self-center flex justify-center mt-8 sm:mt-0 sm:row-span-2 sm:col-span-6 "></section>
                        <section className="text-2xl leading-9 text-center text-stone-200 font-dmsans   grid-flow-col sm:col-span-6 sm:col-start-2 sm:align-middle sm:row-span-2 sm:items-center sm:justify-between sm:self-center">
                            <h1 className=" text-3xl font-semibold mt-5 z-50 uppercase ">Ahoj!</h1>

                            <h1 className=" sm:p-10 mt-4 mb-6">
                                My name is <span className="font-semibold uppercase">Martina</span>. I&apos;m a{" "}
                                <span className="font-semibold capitalise">FULLSTACK </span>
                                Web Developer.
                                <br /> Feel free to browse through my portfolio and get a glimpse of my work. Enjoy!
                            </h1>
                            <Button>CV</Button>
                        </section>
                    </div>
                    <div className="fixed ml-[40%] mr-auto w-1/4 mb-96  h-5/6 z-0 xl:ml-[28%]"></div>
                </div>
            </CanvasRevealEffectDemo3>
        </div>
    );
}

export default Home;

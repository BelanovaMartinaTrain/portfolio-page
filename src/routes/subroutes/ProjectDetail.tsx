import { TracingBeam } from "../../components/ui/effects/tracing-beam";
import { useParams } from "react-router-dom";
import { projectData } from "../../data/data";
import { Link } from "react-router-dom";
import { IconBrandGithub, IconBrowser } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import SkeletonImage from "../../components/ui/effects/skeletonImage";

export default function ProjectDetail() {
    const { id } = useParams();
    const {
        id: projectId,
        title,
        image,
        alt,
        description,
        continueDesc,
        imageClass,
        goals,
        links,
        stack,
        lighthouse,
    } = projectData.filter((project) => project.id === id)[0];
    const imgRef = useRef(null);
    const [imgLoaded, setImgLoaded] = useState(false);

    useEffect(() => {
        if (!imgRef.current) return;

        imgRef.current.addEventListener("load", () => setImgLoaded(true));

        return imgRef.current.removeEventListener("load", () => setImgLoaded(true));
    }, []);

    return (
        <>
            <TracingBeam divKey={`project-${projectId}`} className="relative px-5 lg:px-6 h-full mb-[10%]">
                <div className=" md:mt-4">
                    <h2 className=" font-medium text-xl xxs:text-2xl  text-center    lg:text-3xl flex justify-center pt-4 pb-6 md:pb-10 bg-gradient-to-r from-blue-500 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                        {title}{" "}
                    </h2>

                    <div className="grid grid-flow-row grid-cols-1 md:grid-flow-col gap-y-2  md:grid-cols-10 mb-10  ">
                        <div className="grid md:items-start col-span-2  md:col-span-4 md:col-start-1  order-2 mt-4 md:mt-0 md:order-none  ">
                            <h3 className="text-lg  text-slate-200 normal-case">Tech Stack:</h3>
                            <ul className="text-slate-300  flex flex-wrap font-normal normal-case mb-[5%] gap-x-2 pr-4">
                                {stack.map((stack) => (
                                    <li
                                        key={stack}
                                        className="border-slate-600 rounded-xl px-2 py-[0.2rem] whitespace-nowrap
                                         flex justify-center self-center align-middle text-center border w-fit my-1"
                                    >
                                        {stack}
                                    </li>
                                ))}
                            </ul>
                            <div className=" md:mt-3  flex flex-wrap">
                                {links.map((link) => (
                                    <Link
                                        to={link.link}
                                        key={link.link}
                                        target="_blank"
                                        tabIndex={-1}
                                        className="  max-w-[9rem] transition ease-in-out hover:-translate-y-[0.05rem] min-w-6 mr-2 rounded-lg border max-h-[2.2rem] whitespace-nowrap flex justify-center bg-slate-950 border-blue-500 my-2 px-4 py-1 text-center  hover:shadow-effect w-full"
                                    >
                                        {link.text === "Github" ? (
                                            <IconBrandGithub className="h-4 w-4 mt-1 mr-1" />
                                        ) : link.text === "Live site" ? (
                                            <IconBrowser className="h-4 w-4 mt-1 mr-1" />
                                        ) : (
                                            ""
                                        )}

                                        {link.text}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <img
                            src={image}
                            alt={alt}
                            ref={imgRef}
                            className={`${!imgLoaded && "hidden opacity-0"} ${
                                projectId === "project-3" ? "border  border-b-blue-600/[0.4]" : ""
                            } shadow-decor rounded-xl w-[100%] sm:w-3/4 md:w-[100%] md:col-span-6 md:col-start-5  place-self-center self-center md:place-self-end md:self-start order-1 md:order-none ${imageClass}`}
                        />

                        {!imgLoaded && (
                            <SkeletonImage
                                imgClass={
                                    "shadow-decor rounded-xl w-[100%] md:col-span-6 md:col-start-5  place-self-center self-center md:place-self-end md:self-start order-1 md:order-none"
                                }
                            />
                        )}
                    </div>
                    <div className="text-slate-50 pb-6">
                        {description} {continueDesc}
                    </div>
                    <div className="grid md:grid-flow-col  ">
                        <div className=" md:mr-[7vw]">
                            <h3 className="pb-2 text-slate-200 normal-case">
                                {projectId === "project-4" ? "Ideas for future projects:" : "Learning goals:"}
                            </h3>
                            <ul className=" list-disc list-outside pl-4 pb-4 text-slate-300 font-normal normal-case">
                                {goals.map((goal) => (
                                    <li key={goal}>{goal}</li>
                                ))}
                            </ul>
                        </div>
                        {lighthouse && <img src={lighthouse} alt="lighthouse tool stats" className=" mt-8 md:mt-0   rounded-md w-[80%]     " />}
                    </div>
                </div>
            </TracingBeam>
        </>
    );
}

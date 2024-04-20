import { TracingBeam } from "../../components/ui/tracing-beam";
import { useParams } from "react-router-dom";
import { projectData } from "../../api/data/data";
import { Link } from "react-router-dom";
import { IconBrandGithub, IconBrowser } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import SkeletonImage from "../../components/ui/skeletonImage";

export default function ProjectDetail() {
    const { id } = useParams();
    const { id: projectId, title, image, alt, description, imageClass, goals, links, stack } = projectData.filter((project) => project.id === id)[0];
    const imgRef = useRef(null);
    const [imgLoaded, setImgLoaded] = useState(false);

    useEffect(() => {
        if (!imgRef.current) return;

        imgRef.current.addEventListener("load", () => setImgLoaded(true));

        return imgRef.current.removeEventListener("load", () => setImgLoaded(true));
    }, []);

    return (
        <>
            <TracingBeam className="px-5 lg:px-6 h-full ">
                <div className="md:mt-4">
                    <h2 className=" font-medium xs:text-lg text-center text-base sm:text-xl md:text-xl lg:text-2xl flex justify-center pt-4 pb-10 bg-gradient-to-r from-blue-500 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                        {title}{" "}
                    </h2>

                    <div className="grid grid-flow-row grid-cols-1 md:grid-flow-col gap-y-2  md:grid-cols-10 mb-10  ">
                        <div className="grid col-span-2  md:col-span-4 md:col-start-1  order-2 mt-4 md:mt-0 md:order-none  ">
                            <h3 className="">Tech Stack:</h3>
                            <ul className="text-white   grid grid-flow-row grid-cols-1 xxs:grid-cols-2 mb-[5%] gap-x-4 md:py-1">
                                {stack.map((stack) => (
                                    <li
                                        key={stack}
                                        className="border-slate-600 rounded-md px-2 py-1 whitespace-nowrap
                                        my-1 flex justify-center self-center align-middle text-center border w-fit "
                                    >
                                        {stack}
                                    </li>
                                ))}
                            </ul>
                            <div className=" mt-3  grid grid-flow-col lg:grid-flow-row dunno:grid-flow-col">
                                {links.map((link) => (
                                    <button
                                        key={link.link}
                                        className=" max-w-[9rem] min-w-6 mr-2 rounded-lg border max-h-[2.2rem] whitespace-nowrap flex justify-center bg-slate-950 border-blue-500 my-2 px-4 py-1 text-center  hover:shadow-effect "
                                    >
                                        {link.text === "Github" ? (
                                            <IconBrandGithub className="h-4 w-4 mt-1 mr-1" />
                                        ) : link.text === "Live site" ? (
                                            <IconBrowser className="h-4 w-4 mt-1 mr-1" />
                                        ) : (
                                            ""
                                        )}
                                        <Link to={link.link} target="_blank" tabIndex={-1}>
                                            {link.text}
                                        </Link>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <img
                            src={image}
                            alt={alt}
                            ref={imgRef}
                            className={`${!imgLoaded && "hidden opacity-0"} ${
                                projectId === "project-3" ? "border  border-b-blue-600/[0.3]" : ""
                            } rounded-xl w-[100%] sm:w-3/4 md:w-[100%] md:col-span-6 md:col-start-5  place-self-center self-center md:place-self-end md:self-start order-1 md:order-none ${imageClass}`}
                        />

                        {!imgLoaded && (
                            <SkeletonImage
                                imgClass={
                                    "rounded-xl w-[100%] md:col-span-6 md:col-start-5  place-self-center self-center md:place-self-end md:self-start order-1 md:order-none"
                                }
                            />
                        )}
                    </div>
                    <div className="pb-6">{description}</div>
                    <h3 className="pb-2">Learning goals:</h3>
                    <ul className="text-white list-disc list-outside pl-4 pb-4">
                        {goals.map((goal) => (
                            <li key={goal}>{goal}</li>
                        ))}
                    </ul>
                </div>
            </TracingBeam>
        </>
    );
}

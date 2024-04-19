import { TracingBeam } from "../../components/ui/tracing-beam";
import { useParams } from "react-router-dom";
import { projectData } from "../../api/data/data";
import { Link } from "react-router-dom";

export default function ProjectDetail() {
    const { id } = useParams();
    const { id: projectId, title, image, alt, description, imageClass, goals, links, stack } = projectData.filter((project) => project.id === id)[0];

    return (
        <>
            <TracingBeam className="px-8 sm:px-6 h-screen">
                <div className="sm:mt-4">
                    <h2 className=" font-medium xs:text-lg text-center text-base sm:text-xl md:text-xl lg:text-2xl flex justify-center pt-4 pb-10 bg-gradient-to-r from-blue-500 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                        {title}{" "}
                    </h2>
                    <div className="grid grid-flow-col  gap-4 grid-cols-9 mb-10 ">
                        <div className="grid col-span-2 py-2">
                            <ul className="text-white list-disc list-inside ">
                                {stack.map((stack) => (
                                    <li key={stack}>{stack}</li>
                                ))}
                            </ul>
                            <div className="text-white pb-4 pt-3 grid ">
                                {links.map((link) => (
                                    <Link to={link.link} target="_blank" key={link.link} className="border rounded-lg my-2 p-1 text-center">
                                        {link.text}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <img src={image} alt={alt} width="80%" className={`rounded-xl col-span-7 place-self-end self-start  ${imageClass}`} />
                    </div>
                    <div className="">{description}</div>
                    <ul className="text-white list-disc list-inside mb-4">
                        {goals.map((goal) => (
                            <li key={goal}>{goal}</li>
                        ))}
                    </ul>
                </div>
            </TracingBeam>
        </>
    );
}

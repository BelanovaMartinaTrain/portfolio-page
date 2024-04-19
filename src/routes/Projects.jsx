import Card from "../components/Card";
import { projectData } from "../api/data/data";

function Projects() {
    return (
        <>
            {/* //TODO Link ikonku link, badges s technologiami, more click*/}
            <div className="md:max-w-5xl grid gap-5 grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-4  rounded-2xl mx-auto ">
                {projectData.map((project, index) => (
                    <Card key={`project-${index}`} props={project} />
                ))}
            </div>
        </>
    );
}

export default Projects;

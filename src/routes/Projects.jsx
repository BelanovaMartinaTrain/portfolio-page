import Card from "../components/Card";
import { projectData } from "../api/data/data";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import filtering from "../api/utils/filtering";
import useSearchParamsToFilterArray from "../api/hooks/useSearchParamsToFilterArray";

function Projects() {
    const { searchArray, handleChange, handleClick } = useSearchParamsToFilterArray("stack");

    return (
        <>
            <div className="flex mt-4  justify-start items-baseline ">
                <Label htmlFor="filter" className="text-lg text-slate-300 mr-2 whitespace-nowrap">
                    Filter Stack:
                </Label>
                <Input
                    id="filter"
                    onChange={handleChange}
                    value={searchArray.join(" ")}
                    placeholder="typescript python"
                    className="bg-slate-950 h-8 md:w-[17rem] text-base border-1 border-blue-900 placeholder:text-blue-900"
                ></Input>

                <span
                    className={`px-1 self-center  cursor-pointer ${searchArray.length !== 0 && searchArray[0] !== "" ? "visible" : "invisible"}`}
                    onClick={handleClick}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-white align-middle ">
                        <path d="m259-206-52-53 220-221-220-221 52-53 221 221 221-221 52 53-220 221 220 221-52 53-221-221-221 221Z" />
                    </svg>
                </span>
            </div>
            <div className="md:max-w-7xl grid gap-5 grid-flow-row grid-cols-1 md:grid-cols-8 lg:grid-cols-9 mt-4  rounded-2xl mx-auto ">
                {searchArray.length !== 0 && searchArray[0] !== ""
                    ? filtering(projectData, "stack", searchArray).map((project) => <Card key={project.id} props={project} />)
                    : projectData.map((project) => <Card key={project.id} props={project} />)}
            </div>
        </>
    );
}

export default Projects;

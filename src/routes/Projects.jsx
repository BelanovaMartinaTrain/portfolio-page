import Card from "../components/Card";
import { projectData } from "../data/data";
import filtering from "../utils/filtering";
import useSearchParamsToFilterArray from "../hooks/useSearchParamsToFilterArray";
import InputFilter from "../components/ui/input/inputFilter";

function Projects() {
    const { inputValue, searchArray, handleChange, handleClick } = useSearchParamsToFilterArray("stack");

    return (
        <>
            <div className="flex mt-4  justify-start items-baseline ">
                <InputFilter
                    label={"Filter stack"}
                    divClass={"justify-center "}
                    labelClass={"text-slate-400"}
                    inputClass={""}
                    handleChange={handleChange}
                    handleClick={handleClick}
                    inputValue={inputValue}
                />
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

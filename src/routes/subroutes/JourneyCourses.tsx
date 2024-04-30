import { TracingBeam } from "../../components/ui/effects/tracing-beam";
import { coursesList } from "../../data/data";
import useSearchParamsToFilterArray from "../../hooks/useSearchParamsToFilterArray";
import InputFilter from "../../components/ui/input/inputFilter";
import filtering from "../../utils/filtering";
import CourseComponent from "../../components/CourseComponent";
import { CourseType } from "../../components/CourseComponent";

export default function CoursesList() {
    const { inputValue, searchArray, handleChange, handleClick } = useSearchParamsToFilterArray("stack");
    return (
        <>
            <TracingBeam divKey="journey" className="ml-4 lg:mx-auto px-6 mt-2 mb-[10%]">
                <InputFilter
                    label={"Filter stack"}
                    divClass={"justify-center "}
                    labelClass={"text-slate-400"}
                    inputClass={""}
                    handleChange={handleChange}
                    handleClick={handleClick}
                    inputValue={inputValue}
                />
                <div className="bg-gradient-to-r from-transparent via-slate-700 to-transparent mt-4 h-[1px] w-full " />
                <div className="max-w-2xl mx-auto antialiased pt-4 relative last:mb-[100px]">
                    {searchArray.length !== 0 && searchArray[0] !== ""
                        ? filtering(coursesList, "learningStack", searchArray).map((course) => <CourseComponent key={course.id} course={course} />)
                        : coursesList.map((course) => <CourseComponent key={course.id} course={course as unknown as CourseType} />)}
                </div>
            </TracingBeam>
        </>
    );
}

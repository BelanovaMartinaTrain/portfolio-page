import React from "react";
import { TracingBeam } from "./ui/tracing-beam";
import { coursesList } from "../api/data/data";
import useSearchParamsToFilterArray from "../api/hooks/useSearchParamsToFilterArray";
import InputFilter from "./ui/inputFilter";
import filtering from "../api/utils/filtering";
import CourseComponent from "./CourseComponent";

export default function CoursesList() {
    const { searchArray, handleChange, handleClick } = useSearchParamsToFilterArray("stack");
    return (
        <>
            <TracingBeam className="ml-4 lg:mx-auto px-6 mt-2 mb-[10%]">
                <InputFilter
                    label={"Filter stack"}
                    divClass={"justify-center "}
                    labelClass={"text-slate-400"}
                    inputClass={""}
                    handleChange={handleChange}
                    handleClick={handleClick}
                    searchArray={searchArray}
                />
                <div className="bg-gradient-to-r from-transparent via-slate-700 to-transparent mt-4 h-[1px] w-full " />
                <div className="max-w-2xl mx-auto antialiased pt-4 relative last:mb-[100px]">
                    {searchArray.length !== 0 && searchArray[0] !== ""
                        ? filtering(coursesList, "learningStack", searchArray).map((course) => <CourseComponent course={course} />)
                        : coursesList.map((course) => <CourseComponent course={course} />)}
                </div>
            </TracingBeam>
        </>
    );
}

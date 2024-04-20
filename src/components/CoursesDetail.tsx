import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import { coursesList } from "../api/data/data";
import { Link } from "react-router-dom";

export default function CoursesList() {
    return (
        <TracingBeam className="px-6 mt-2 mb-[10%]">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative last:mb-[100px]">
                {coursesList.map((course) => (
                    <div key={course.id} className="mb-10 ">
                        <p
                            className="border-blue-700 rounded-xl px-2 py-0 whitespace-nowrap
                            my-1 r border w-fit text-blue-400 text-[0.8rem]"
                        >
                            {course.platform}
                        </p>
                        <Link to={course.link} target="_blank" tabIndex={-1}>
                            <h2 className=" text-xl text-slate-100 mb-4 font-dmsans mt-2 flex hover:drop-shadow-[0px_0px_3px_rgba(255,255,255,0.8)]">
                                {course.title}{" "}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="20"
                                    viewBox="0 -960 960 960"
                                    width="20"
                                    className=" left-0 ml-1 mt-1 text-slate-800 fill-slate-300"
                                >
                                    <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
                                </svg>
                            </h2>
                        </Link>
                        <div className="text-sm  prose prose-sm prose-invert">{course.description}</div>
                        <div className="mt-2 text-sm text-blue-400">{course.duration}</div>
                        <div className="grid col-span-2  md:col-span-4 md:col-start-1  order-2 mt-2 md:mt-0 md:order-none  ">
                            <h3 className="text-lg text-slate-400 mt-3">Learning Stack:</h3>
                            <div className="text-slate-300  flex gap-2 flex-wrap md:py-1">
                                {course.learningStack.map((stack) => (
                                    <div
                                        key={stack}
                                        className="border-slate-600 rounded-[0.7rem] px-2 py-1 whitespace-nowrap
                                         flex justify-center self-center align-middle text-center border w-fit "
                                    >
                                        {stack}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-transparent via-slate-700 to-transparent mt-7 h-[1px] w-full " />
                    </div>
                ))}
            </div>
        </TracingBeam>
    );
}

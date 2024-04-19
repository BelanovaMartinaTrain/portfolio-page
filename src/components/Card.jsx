/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { MovingBorderComponent } from "./ui/movingBorder";

// eslint-disable-next-line react/prop-types
export default function Card({ props }) {
    return (
        <MovingBorderComponent
            containerClassName=" md:h-full  p-[1px] mx-auto group/border hover:overflow-visible transition-all duration-500"
            duration={10000}
            className="bg-slate-950   rounded-md "
            borderClassName="w-[50vw] h-[50vh] group-hover/border:w-0 group-hover/border:h-0 opacity-[0.9] rounded-md group-hover/border:opacity-0"
            as="div"
        >
            <NavLink to={props.id}>
                <div className="relative group rounded-2xl  target:h-[85vh] hover:shadow-effect  hover:border border-blue-500  transition-shadow  duration-200">
                    <div className="grid  rounded-2xl md:grid-flow-row md:grid-col-2 gap-0 justify-around   ">
                        <img
                            src={props.image}
                            className={` w-full group-hover:blur-sm transition-all ease-in-out duration-300 rounded-t-[0.95rem] ${props.imageClass}`}
                        />

                        <h2 className="group/link rounded-2xl font-medium xs:text-lg text-center text-base sm:text-xl md:text-lg lg:text-xl flex justify-center font-dmsans  my-4  bg-gradient-to-r from-blue-500 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                            {props.title}{" "}
                        </h2>

                        <div className="font-light font-dmsans mt-1 px-6 py-2 absolute transition-opacity ease-in-out duration-300 opacity-0 group-hover:opacity-100">
                            <h3 className="mb-1 text-lg ">Tech Stack:</h3>
                            <ul className="list-disc list-outside text-base leading-5 ml-5 grid grid-flow-row grid-cols-1  ">
                                {props.stack.map((stack, index) => (
                                    <li key={`goal-${index}`}>{stack}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </NavLink>
        </MovingBorderComponent>
    );
}

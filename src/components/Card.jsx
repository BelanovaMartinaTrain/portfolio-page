/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { MovingBorderComponent } from "./ui/effects/movingBorder";
import SkeletonImage from "./ui/effects/skeletonImage";
import { useEffect, useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Card({ props }) {
    const imgRef = useRef(null);
    const [imgLoaded, setImgLoaded] = useState(false);

    useEffect(() => {
        if (!imgRef.current) return;

        imgRef.current.addEventListener("load", () => setImgLoaded(true));

        return imgRef.current.removeEventListener("load", () => setImgLoaded(true));
    }, []);

    return (
        <MovingBorderComponent
            containerClassName=" md:h-full  p-[1px] mx-auto group/border hover:overflow-visible transition-all duration-500 md:col-span-4 lg:col-span-3  w-full aspect-[1.4/1]"
            duration={10000}
            className="bg-slate-950 w-full rounded-md "
            borderClassName="w-[50vw] h-[50vh] group-hover/border:w-0 group-hover/border:h-0 opacity-[0.9] rounded-md xs:group-hover/border:opacity-0 "
            as="div"
        >
            <NavLink to={props.id}>
                <div className="relative group  h-full rounded-2xl   hover:shadow-effect  hover:border border-blue-500  transition-shadow  duration-200">
                    <div className="grid  rounded-2xl md:grid-flow-row md:grid-col-1 gap-0 justify-around  ">
                        <img
                            ref={imgRef}
                            src={props.image}
                            className={`${
                                !imgLoaded ? "opacity-0" : `${props.imageClass}`
                            } w-full xs:group-hover:blur-sm transition ease-in-out duration-500  rounded-t-[0.95rem] `}
                        />
                        {!imgLoaded && <SkeletonImage imgClass={`w-full block `} />}

                        <h2 className="group/link min-h-fit rounded-2xl font-medium xs:text-lg xxs:text-base text-center text-xs sm:text-xl md:text-lg lg:text-xl flex justify-center my-1  xs:my-3 md:my-1 lg:my-1 bg-gradient-to-r from-blue-500 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                            {props.title}{" "}
                        </h2>

                        <div className="font-light grid justify-center  w-full  mt-1 p-4 lg:p-3 absolute transition-opacity ease-in-out duration-300 opacity-0 xs:group-hover:opacity-100">
                            <h3 className="text-xs xs:text-base normal-case">{props.description}</h3>
                            <div className="mt-2 sm:mt-4  text-xs xs:text-sm  flex flex-wrap  ">
                                {props.stack.map((stack, index) => (
                                    <span
                                        key={`stack-${index}`}
                                        className="bg-slate-950 border m-[0.2rem] px-[0.3rem] xs:p-[0.1rem] xs:px-[0.4rem] rounded-xl flex "
                                    >
                                        {stack}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </NavLink>
        </MovingBorderComponent>
    );
}

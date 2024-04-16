import { MovingBorderComponent } from "./ui/movingBorder";

// eslint-disable-next-line react/prop-types
export default function Card({ children }) {
    return (
        <div>
            <MovingBorderComponent
                containerClassName=" md:h-[99%] p-[1px] mx-auto group/border "
                duration={10000}
                className="bg-slate-950  border border-blue-950 rounded-md "
                borderClassName="w-[50vw] h-[50vh] opacity-[0.9] rounded-md group-hover/border:opacity-0"
                as="div"
            >
                {children}
            </MovingBorderComponent>
        </div>
    );
}

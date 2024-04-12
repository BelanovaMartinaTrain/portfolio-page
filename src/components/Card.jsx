import { MovingBorderComponent } from "./ui/movingBorder";

// eslint-disable-next-line react/prop-types
export default function Card({ children }) {
    return (
        <div>
            <MovingBorderComponent
                containerClassName="w-[70%] h-[99%] p-[1px] mx-auto  "
                duration={10000}
                className="bg-gradient-to-t from-[rgb(1,3,7)] to-black  border border-blue-950 "
                borderClassName="w-[50vw] h-[50vh] opacity-[0.9]"
                as="div"
            >
                {children}
            </MovingBorderComponent>
        </div>
    );
}

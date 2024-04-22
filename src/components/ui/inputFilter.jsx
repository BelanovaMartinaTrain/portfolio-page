import { Label } from "./label";
import { Input } from "./input";
import { cn } from "../../utils/cn";
// eslint-disable-next-line react/prop-types
export default function InputFilter({ label = "Filter stack", divClass, labelClass, inputClass, handleClick, handleChange, searchArray = [] }) {
    return (
        <>
            <div className={cn("flex mt-4  justify-start items-baseline ", divClass)}>
                <Label htmlFor="filter" className={cn("text-lg text-slate-300 mr-2 whitespace-nowrap", labelClass)}>
                    {label}
                </Label>
                <Input
                    id="filter"
                    onChange={handleChange}
                    value={searchArray.join(" ")}
                    placeholder="typescript python"
                    className={cn("bg-slate-950 h-8 md:w-[17rem] text-base border-1 border-blue-900 placeholder:text-blue-900", inputClass)}
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
        </>
    );
}

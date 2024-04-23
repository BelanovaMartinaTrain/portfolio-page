import { Link } from "react-router-dom";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { BottomGradient } from "./ui/effects/bottomGradient";
import { cn } from "../utils/cn";
import { BsPersonVcard } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
export default function ButtonLink({ label, linkTo, linkClass, spanClass, iconType }) {
    return (
        <Link
            to={linkTo}
            target="_blank"
            className={cn(
                "w-1/4 relative group/btn flex space-x-2 items-center justify-start px-4   rounded-md h-10 font-medium shadow-input bg-blue-950 shadow-[0px_0px_1px_1px_var(--blue-800)]",
                linkClass
            )}
        >
            {iconType === "github" ? (
                <IconBrandGithub className="h-4 w-4 text-slate-300" />
            ) : iconType === "linkedin" ? (
                <IconBrandLinkedin className="h-4 w-4 text-slate-300" />
            ) : (
                <BsPersonVcard className="h-4 w-4 text-slate-300" />
            )}
            <span className={cn("text-slate-300 text-base", spanClass)}>{label}</span>
            <BottomGradient />
        </Link>
    );
}

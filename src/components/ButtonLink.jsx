import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { BottomGradient } from "./ui/effects/bottomGradient";
import { cn } from "../utils/cn";
import { BsPersonVcard } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";

// eslint-disable-next-line react/prop-types
export default function ButtonLink({ children, label, linkTo, linkClass, spanClass, iconType, ...props }) {
    return (
        <a
            href={linkTo}
            className={cn(
                " relative group/btn flex space-x-2 items-center justify-start px-4   rounded-md h-10 font-medium shadow-input bg-blue-950 shadow-[0px_0px_1px_1px_var(--blue-800)]",
                linkClass
            )}
            {...props}
        >
            {iconType === "github" ? (
                <IconBrandGithub className="h-4 w-4 text-slate-300" />
            ) : iconType === "linkedin" ? (
                <IconBrandLinkedin className="h-4 w-4 text-slate-300" />
            ) : iconType === "download" ? (
                <FiDownload className="h-4 w-4 text-slate-300" />
            ) : (
                <BsPersonVcard className="h-4 w-4 text-slate-300" />
            )}
            <span className={cn("text-slate-300 text-base", spanClass)}>
                {label}
                {children}
            </span>
            <BottomGradient />
        </a>
    );
}

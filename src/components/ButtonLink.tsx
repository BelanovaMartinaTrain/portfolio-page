import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { BottomGradient } from "./ui/effects/bottomGradient";
import { cn } from "../utils/cn";
import { BsPersonVcard } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { HTMLAttributes } from "react";

type PropsButtonLinkType = {
    children?: React.ReactNode;
    label?: string;
    linkTo: string;
    linkClass: string;
    spanClass: string;
    iconType: string;
    rel?: string;
    target?: string;
    download?: boolean;
    props?: HTMLAttributes<HTMLAnchorElement>;
};

export default function ButtonLink({
    children,
    label,
    linkTo,
    linkClass,
    spanClass,
    iconType,
    rel,
    target,
    download,
    ...props
}: PropsButtonLinkType) {
    return (
        <a
            href={linkTo}
            className={cn(
                " relative group/btn flex space-x-1 xxs:space-x-2 items-center justify-start px-4 rounded-md h-10 font-medium shadow-input bg-blue-950 shadow-[0px_0px_1px_1px_var(--blue-800)]",
                linkClass
            )}
            download={download}
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

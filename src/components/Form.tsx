"use client";
import React from "react";
import { Label } from "./ui/input/label";
import { Input } from "./ui/input/input";
import { TextArea } from "./ui/input/textarea";
import { cn } from "../utils/cn";
import { IconBrandGithub, IconBrandGoogle, IconBrandReact, IconBrandNodejs } from "@tabler/icons-react";

export function ContactFormDemo() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };
    return (
        <div className="max-w-5xl w-full font-dmsans mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black">
            <h2 className="font-medium text-2xl text-neutral-200">Let's connect!</h2>
            <p className=" text-base max-w-sm mt-2 text-neutral-300">Send me your message or check out my profiles:</p>

            <form className="my-8" onSubmit={handleSubmit}>
                <div className="flex flex-wrap md:flex-nowrap gap-x-4">
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Name" type="text" />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="email@email.com" type="email" />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Job Interview" type="text" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="message">Message</Label>

                    <TextArea id="message" placeholder="Write your message..." className="resize  h-20 w-full " />
                </LabelInputContainer>
                <div className="  w-full sm:flex sm:justify-end">
                    <button
                        className=" relative group/btn  w-full sm:w-1/4 bg-blue-950  text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--blue-800)_inset,0px_-1px_0px_0px_var(--blue-800)_inset]"
                        type="submit"
                    >
                        Send &#x2709;
                        <BottomGradient />
                    </button>
                </div>

                <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />

                <div className="flex flex-col space-y-4">
                    <button
                        className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-blue-950 shadow-[0px_0px_1px_1px_var(--blue-800)]"
                        type="submit"
                    >
                        <IconBrandGithub className="h-4 w-4 text-neutral-300" />
                        <span className="text-neutral-300 text-sm">GitHub</span>
                        <BottomGradient />
                    </button>
                    <button
                        className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-blue-950 shadow-[0px_0px_1px_1px_var(--blue-800)]"
                        type="submit"
                    >
                        <IconBrandGoogle className="h-4 w-4 text-neutral-300" />

                        <span className="text-neutral-300  text-sm">Google</span>
                        <BottomGradient />
                    </button>
                </div>
            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};

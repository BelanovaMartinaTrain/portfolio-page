"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import Button from "../Button";

export function Lamp() {
    return (
        <LampContainer>
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="mt-1 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center  font-medium tracking-tight text-transparent "
            >
                <div className="sm:grid sm:grid-cols-4 sm:grid-rows-2  grid-flow-row z-60">
                    {/* <section className=" sm:self-center flex justify-center mt-8 sm:mt-0 sm:row-span-2 sm:col-span-2 ">
                    <img src="./Foto-small.jpg" className="h-auto max-[376px]:w-60 w-80 xl:w-96 rounded-lg " alt="Closeup of Martina with a blurred background, she's smiling subtly"/>
                </section> */}
                    <section className="max-[376px]:text-sm text-center text-stone-200 font-dmsans  grid-flow-col sm:col-start-2 sm:col-span-2 sm:align-middle sm:row-span-2 sm:items-center sm:justify-between sm:self-center">
                        <h1 className="max-[376px]:text-lg text-2xl  mt-5 z-40 ">Ahoj!</h1>
                        {/* <h1 className="mt-4 text-xl">I&apos;m Martina</h1>
                    <h1 className="mt-2  sm:w-20% flex justify-evenly align-middle">
                    <span className="px-2 uppercase text-xl mr-2 font-bold">Frontend</span> and <span className="ml-2 px-2 uppercase text-xl mr-2 font-bold">Fullstack</span> 
                    </h1>
                <h1 className="mt-2 text-xl">developer</h1> */}
                        <h1 className=" sm:p-10 mt-4 mb-6">
                            My name is <span className="font-semibold ">Martina</span>. I&apos;m a{" "}
                            <span className="font-semibold capitalise">FULLSTACK </span>
                            Web Developer. I have a high enthusiasm for coding. This is a start of a new journey and I can&apos;t wait!
                        </h1>
                        <Button>CV</Button>
                    </section>
                </div>
            </motion.h1>
        </LampContainer>
    );
}

export const LampContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div
            className={cn(
                "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black w-full rounded-md z-0  ",
                className
            )}
        >
            <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
                <motion.div
                    initial={{ opacity: 0.5, width: "15rem" }}
                    whileInView={{ opacity: 1, width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-indigo-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
                >
                    <div className="absolute  w-[100%] left-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                    <div className="absolute  w-40 h-[100%] left-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0.5, width: "15rem" }}
                    whileInView={{ opacity: 1, width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-indigo-500 text-white [--conic-position:from_290deg_at_center_top]"
                >
                    <div className="absolute  w-40 h-[100%] right-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
                    <div className="absolute  w-[100%] right-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                </motion.div>
                <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl"></div>
                <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
                <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-indigo-500 opacity-50 blur-3xl"></div>
                <motion.div
                    initial={{ width: "8rem" }}
                    whileInView={{ width: "16rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-indigo-400 blur-2xl"
                ></motion.div>
                <motion.div
                    initial={{ width: "15rem" }}
                    whileInView={{ width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-indigo-400 "
                ></motion.div>

                <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black "></div>
            </div>
            <div className="relative z-50 flex -translate-y-96 flex-col items-center px-5">{children}</div>
        </div>
    );
};

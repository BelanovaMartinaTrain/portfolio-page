"use client";
import { useTime, useTransform } from "framer-motion";
import React from "react";
import { GeminiEffect } from "./ui/geminiLoading";

export function Loading() {
    const ref = React.useRef(null);
    const time = useTime();

    const pathLengthFirst = useTransform(time, [0, 5000], [0.2, 1.2]);
    const pathLengthSecond = useTransform(time, [0, 5000], [0.15, 1.2]);
    const pathLengthThird = useTransform(time, [0, 5000], [0.1, 1.2]);
    const pathLengthFourth = useTransform(time, [0, 5000], [0.05, 1.2]);
    const pathLengthFifth = useTransform(time, [0, 5000], [0, 1.2]);

    console.log(pathLengthFirst, pathLengthThird);

    return (
        <div className="h-[95dvh] bg-black w-full  rounded-md relative pt-40 overflow-clip" ref={ref}>
            <GeminiEffect pathLengths={[pathLengthFirst, pathLengthSecond, pathLengthThird, pathLengthFourth, pathLengthFifth]} />
        </div>
    );
}

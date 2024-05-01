"use client";
import * as React from "react";
import { cn } from "../../../utils/cn";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(({ className, ...props }, ref) => {
    const radius = 300; // change this to increase the radius of the hover effect
    const [visible, setVisible] = React.useState(false);

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
        let { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }
    return (
        <motion.div
            style={{
                background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          var(--blue-500),
          transparent 80%
        )
      `,
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            className="p-[2px] rounded-lg transition duration-300 group/input"
        >
            <textarea
                className={cn(
                    `flex h-10 w-full border-none bg-slate-950 text-white shadow-input rounded-md px-3 py-2 text-sm  placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]   focus-visible:ring-blue-600 
           disabled:cursor-not-allowed disabled:opacity-50
           shadow-[0px_0px_1px_1px_var(--blue-900)]
           group-hover/input:shadow-none transition duration-400 placeholder:text-blue-900
           `,
                    className
                )}
                ref={ref}
                {...props}
            />
        </motion.div>
    );
});
TextArea.displayName = "TextArea";

export { TextArea };

import { useState, useRef, useEffect } from "react";
import Navigation from "./Navigation";

// eslint-disable-next-line react/prop-types
export default function Hamburger({ hamburgerClass }) {
    const [isOpen, setIsOpen] = useState(false);
    const ulClassName = "  absolute   left-0 bg-black bg-opacity-75 w-screen   backdrop-blur-sm  transition-all duration-300  ease-in-out ";
    const liClassName = "  font-normal text-center transition-all duration-300  ease-in origin-top-right ";
    const refMenu = useRef(null);

    const handleClick = (event) => {
        setIsOpen((prev) => !prev);
        event.stopPropagation();
    };

    function handleDismiss(event) {
        if (refMenu.current && !event.composedPath().includes(refMenu.current)) {
            setIsOpen(false);
        }
    }

    function handleEscapeDismiss(event) {
        if (event.key === "Escape") {
            setIsOpen(false);
        }
    }

    useEffect(() => {
        document.body.addEventListener("click", handleDismiss);
        document.body.addEventListener("keydown", handleEscapeDismiss);
        return () => {
            document.body.removeEventListener("click", handleDismiss);
            document.body.addEventListener("keydown", handleEscapeDismiss);
        };
    }, []);

    return (
        <div className={`${hamburgerClass} md:hidden ${isOpen ? " rounded grid-flow-col" : ""} `} ref={refMenu}>
            <button
                onClick={handleClick}
                className="flex flex-col justify-center items-center  relative h-8 "
                aria-label="menu button"
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                <span
                    className={`bg-[gainsboro] transition-all duration-300 ease-out 
            h-0.5 w-7 rounded-sm ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-[0.3rem]"}`}
                ></span>
                <span
                    className={`bg-[gainsboro] block transition-all duration-300 ease-out 
            h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}
                ></span>
                <span
                    className={`bg-[gainsboro] block transition-all duration-300 ease-out 
            h-0.5 w-7 rounded-sm ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-[0.3rem]"}`}
                ></span>
            </button>
            <div onClick={() => setIsOpen(false)}>
                <Navigation
                    ulClassName={`${ulClassName} ${!isOpen ? " h-0  " : "h-[80%]  "}`}
                    liClassName={`${liClassName}  ${!isOpen ? "pointer-events-none opacity-0 text-xs p-0" : " opacity-100 text-xl p-2 "}`}
                    submenuClassName={`${liClassName}  ${!isOpen ? "pointer-events-none opacity-0 text-xs p-0" : " opacity-100 text-lg p-0 "}`}
                    submenu={true}
                />
            </div>
        </div>
    );
}

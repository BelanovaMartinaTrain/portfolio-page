import { NavLink, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Navigation({ ulClassName, liClassName }) {
    const location = useLocation();

    return (
        <>
            <menu className={`${ulClassName} `} role="menu">
                <NavLink to="/" className={liClassName} role="menuitem" aria-label="Navigate to home ">
                    <h2
                        className={`${liClassName} ${
                            location.pathname === "/"
                                ? "font-semibold  bg-gradient-to-r from-blue-500 via-sky-300 to-blue-500  bg-clip-text text-transparent"
                                : "font-light text-white hover:[letter-spacing:0.012rem]"
                        } hover:font-semibold `}
                    >
                        HOME
                    </h2>
                </NavLink>
                <NavLink to="/projects" className={liClassName} role="menuitem" aria-label="Navigate to home ">
                    <h2
                        className={`${liClassName} ${
                            location.pathname === "/projects"
                                ? "font-semibold bg-gradient-to-br from-blue-500 via-sky-300 to-blue-500  bg-clip-text text-transparent"
                                : "font-light text-white hover:[letter-spacing:0.012rem]"
                        } hover:font-semibold `}
                    >
                        PROJECTS
                    </h2>
                </NavLink>
                <NavLink to="/journey" className={liClassName} role="menuitem" aria-label="Navigate to home ">
                    <h2
                        className={`${liClassName} ${
                            location.pathname === "/journey"
                                ? "font-semibold bg-gradient-to-br from-blue-500 via-sky-300 to-blue-500  bg-clip-text text-transparent"
                                : "font-light text-white hover:[letter-spacing:0.012rem]"
                        } hover:font-semibold `}
                    >
                        JOURNEY
                    </h2>
                </NavLink>
                <NavLink to="/connect" className={liClassName} role="menuitem" aria-label="Navigate to home ">
                    <h2
                        className={`${liClassName} ${
                            location.pathname === "/connect"
                                ? "font-semibold bg-gradient-to-br from-blue-500 via-sky-300 to-blue-500  bg-clip-text text-transparent"
                                : "font-light text-white hover:[letter-spacing:0.012rem]"
                        } hover:font-semibold `}
                    >
                        CONNECT
                    </h2>
                </NavLink>
            </menu>
        </>
    );
}

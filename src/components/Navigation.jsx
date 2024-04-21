import { NavLink, useLocation } from "react-router-dom";
import { projectData } from "../api/data/data";

// eslint-disable-next-line react/prop-types
export default function Navigation({ ulClassName, liClassName, submenuClassName, submenu }) {
    const location = useLocation();

    return (
        <>
            <menu className={`${ulClassName} `} role="menu">
                <NavLink to="/" className={liClassName} role="menuitem" aria-label="Navigate to home ">
                    <h2
                        className={`${liClassName} ${
                            location.pathname === "/"
                                ? "font-semibold  bg-gradient-to-r from-blue-500 via-sky-300 to-blue-500  bg-clip-text text-transparent"
                                : "font-light text-white hover:drop-shadow-[0px_0px_3px_rgba(255,255,255,0.8)] "
                        }   `}
                    >
                        HOME
                    </h2>
                </NavLink>
                <NavLink to="/projects" className={liClassName} role="menuitem" aria-label="Navigate to home ">
                    <h2
                        className={`-mb-7 ${liClassName} ${
                            location.pathname.includes("/projects")
                                ? "font-semibold bg-gradient-to-br from-blue-500 via-sky-300 to-blue-500  bg-clip-text text-transparent"
                                : "font-light text-white hover:drop-shadow-[0px_0px_3px_rgba(255,255,255,0.8)]"
                        }   `}
                    >
                        PROJECTS
                    </h2>
                </NavLink>
                {submenu && (
                    <>
                        {projectData.map((project) => (
                            <NavLink
                                to={`/projects/${project.id}`}
                                key={`link-${project.id}`}
                                className={`grid justify-center ${submenuClassName}`}
                                role="menuitem"
                                aria-label="Navigate to home "
                            >
                                <h2
                                    className={` whitespace-nowrap ${submenuClassName} ${
                                        location.pathname === `/projects/${project.id}`
                                            ? "font-medium bg-gradient-to-br from-blue-500 via-sky-300 to-blue-500  bg-clip-text text-transparent"
                                            : "font-[200] text-white  "
                                    }   `}
                                >
                                    {project.title}
                                </h2>
                            </NavLink>
                        ))}
                    </>
                )}
                <NavLink to="/journey" className={liClassName} role="menuitem" aria-label="Navigate to home ">
                    <h2
                        className={`${liClassName} ${
                            location.pathname === "/journey"
                                ? "font-semibold bg-gradient-to-br from-blue-500 via-sky-300 to-blue-500  bg-clip-text text-transparent"
                                : "font-light text-white hover:drop-shadow-[0px_0px_3px_rgba(255,255,255,0.8)]"
                        }   `}
                    >
                        JOURNEY
                    </h2>
                </NavLink>
                <NavLink to="/connect" className={liClassName} role="menuitem" aria-label="Navigate to home ">
                    <h2
                        className={`${liClassName} ${
                            location.pathname === "/connect"
                                ? "font-semibold bg-gradient-to-br from-blue-500 via-sky-300 to-blue-500  bg-clip-text text-transparent"
                                : "font-light text-white hover:drop-shadow-[0px_0px_3px_rgba(255,255,255,0.8)] "
                        } `}
                    >
                        CONNECT
                    </h2>
                </NavLink>
            </menu>
        </>
    );
}

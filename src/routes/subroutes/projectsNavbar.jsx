import { useLocation, NavLink, Outlet } from "react-router-dom";
import { projectData } from "../../api/data/data";

export default function ProjectsNavBar() {
    const location = useLocation();

    return (
        <div className="">
            <div className="bg-gradient-to-r from-transparent via-slate-700 to-transparent my-2 h-[1px] w-full " />
            <div className="flex flex-col sm:flex-row ">
                <div className="hidden lg:block px-4 pt-4 mt-6 ">
                    <h2
                        className="font-medium xs:text-lg  text-base sm:text-xl md:text-lg lg:text-xl pb-2
                                    hover:drop-shadow-[0px_1px_1px_rgba(255,255,255,0.5)] bg-gradient-to-r
                                    from-blue-500 via-sky-300 to-blue-500 bg-clip-text text-transparent"
                    >
                        <NavLink to="/projects/">Projects </NavLink>
                    </h2>
                    <div className="-ml-14 bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-5 h-[1px] w-[150%] " />
                    {projectData.map((project) => (
                        <h1 key={project.id} className="  py-2">
                            {" "}
                            <NavLink
                                to={`/projects/${project.id}`}
                                className={`transition-colors duration-150   whitespace-nowrap ${
                                    location.pathname === `/projects/${project.id}`
                                        ? "  text-blue-300 "
                                        : " text-white hover:drop-shadow-[0px_1px_1px_rgba(255,255,255,0.5)]"
                                }`}
                            >
                                {project.title}{" "}
                            </NavLink>
                            <div
                                className={`${
                                    location.pathname === `/projects/${project.id}`
                                        ? " -ml-8 bg-gradient-to-r from-transparent via-blue-300 to-transparent  h-[1px] w-full"
                                        : ""
                                }`}
                            />
                        </h1>
                    ))}
                </div>
                <div className="  pl-4 lg:pl-16 ">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Navigation({ ulClassName, liClassName }) {
    return (
        <>
            <menu className={ulClassName} role="menu">
                <NavLink to="/" className={liClassName} role="menuitem" aria-label="Navigate to home ">
                    <h2 className={`${liClassName} ${({ isActive }) => (isActive ? "active font-normal " : "")} hover:font-medium`}>HOME</h2>
                </NavLink>
                <NavLink to="/projects" className={liClassName} role="menuitem" aria-label="Navigate to home ">
                    <h2 className={`${liClassName} ${({ isActive }) => (isActive ? "active font-normal " : "")} hover:font-medium`}>PROJECTS</h2>
                </NavLink>
                <NavLink to="/journey" className={liClassName} role="menuitem" aria-label="Navigate to home ">
                    <h2 className={`${liClassName} ${({ isActive }) => (isActive ? "active font-normal " : "")} hover:font-medium`}>JOURNEY</h2>
                </NavLink>
                <NavLink to="/connect" className={liClassName} role="menuitem" aria-label="Navigate to home ">
                    <h2 className={`${liClassName} ${({ isActive }) => (isActive ? "active font-normal " : "")} hover:font-medium`}>CONNECT</h2>
                </NavLink>
            </menu>
        </>
    );
}

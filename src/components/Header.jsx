import { Link } from "react-router-dom";

function Header() {
    return (
        <header className=" font-medium flex flex-col align-middle justify-center w=full z-50 tracking-wider">
            <nav id="menu" className=" flex flex-col sm:flex-row  sm:items-center sm:justify-around  m-2">
                <Link to="/">
                    <div className=" max-[376px]:text-3xl flex font-dmsans text-4xl text-stone-100  pl-4 justify-center sm:justify-start">
                        <span className="sr-only">Home</span>MB.
                    </div>
                </Link>
                <ul className="max-[376px]:text-base sm:w-1/2 font-dmsans  text-xl text-stone-100 flex sm:flex-row sm:justify-around mt-4 sm:mt-0   justify-center ">
                    <Link to="/" className="hover-underline-animation ">
                        HOME
                    </Link>
                    <Link to="/projects" className="hover-underline-animation ml-8 sm:ml-4 lg:ml-0">
                        PROJECTS
                    </Link>
                    <Link to="/journey" className="hover-underline-animation ml-8 sm:ml-4 lg:ml-0">
                        JOURNEY
                    </Link>
                    <Link to="/connect" className="hover-underline-animation ml-8 sm:ml-4 lg:ml-0">
                        CONNECT
                    </Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

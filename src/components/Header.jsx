import { Link } from "react-router-dom";

function Header() {
    return (
        <header className=" font-light flex flex-col align-middle justify-center w=full z-50 tracking-wider">
            <nav id="menu" className=" flex flex-col sm:flex-row  sm:items-center sm:justify-around  m-2">
                <Link to="/">
                    <div className="text-3xl md:text-4xl flex font-dmsans font-medium tracking-widest lg:text-[2.7rem] text-stone-100  pl-4 justify-center sm:justify-start bg-gradient-to-br from-white to-blue-500  bg-clip-text text-transparent">
                        <span className="sr-only">Home</span>MB.
                    </div>
                </Link>
                <ul className="text-sm [450px]:text-base sm:w-1/2 font-dmsans   md:text-[1.3rem] text-stone-100 flex sm:flex-row sm:justify-around mt-4 sm:mt-0   justify-center ">
                    <Link to="/" className="hover-underline-animation ">
                        HOME
                    </Link>
                    <Link to="/projects" className="hover-underline-animation ml-6 sm:ml-4 lg:ml-0">
                        PROJECTS
                    </Link>
                    <Link to="/journey" className="hover-underline-animation ml-6 sm:ml-4 lg:ml-0">
                        JOURNEY
                    </Link>
                    <Link to="/connect" className="hover-underline-animation ml-6 sm:ml-4 lg:ml-0">
                        CONNECT
                    </Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

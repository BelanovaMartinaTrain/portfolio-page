import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import Navigation from "./Navigation";

function Header() {
    return (
        <header className="print:hidden font-light flex flex-col align-middle justify-center w-full z-50 tracking-wider">
            <nav id="menu" className=" flex justify-between  md:flex-row  md:items-center md:justify-around place-items-center">
                <Link to="/">
                    <div className="text-3xl md:text-4xl flex  font-normal tracking-widest lg:text-[2.7rem] text-stone-100  pl-4 justify-center sm:justify-start bg-gradient-to-r from-blue-500 via-sky-300 to-blue-500  bg-clip-text text-transparent">
                        <span className="sr-only">Home</span>MB.
                    </div>
                </Link>

                <Navigation
                    ulClassName={
                        "hidden md:flex text-sm [450px]:text-base sm:w-1/2  md:text-[1.3rem] text-stone-100 flex md:flex-row md:justify-around mt-4 justify-center"
                    }
                    liClassName={"ml-6 sm:ml-4 lg:ml-8  "}
                    submenuClassName={""}
                    submenu={false}
                />

                <Hamburger />
            </nav>
        </header>
    );
}

export default Header;

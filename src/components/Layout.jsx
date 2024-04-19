import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
//import { StaticLamp } from "./ui/staticLamp";

function Layout() {
    return (
        <>
            <div className="flex justify-center  bg-black font-dmsans h-screen w-[99vw] ">
                <div className="p-4 xs:p-8 sm:p-10 grid-main-layout grid-cols-1  h-[98vh]    max-w-7xl w-full">
                    <Header />
                    <main className=" h-[120vh] lg:h-[105vh] sm:mt-4 ">
                        <Outlet />
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Layout;

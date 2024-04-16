import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
//import { StaticLamp } from "./ui/staticLamp";

function Layout() {
    return (
        <>
            <div className="flex justify-center  bg-black  h-screen w-screen ">
                <div className="p-4 xs:p-8 sm:p-10 flex flex-col h-full content-center  max-w-7xl w-full">
                    <Header />
                    <main className="  sm:mt-4 ">
                        <Outlet />
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Layout;

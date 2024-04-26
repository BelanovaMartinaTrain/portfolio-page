import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
//import { StaticLamp } from "./ui/staticLamp";

function Layout() {
    return (
        <>
            <div className="flex justify-center  bg-black font-dmsans w-full print:m-0 print:p-0">
                <div className="p-4 xs:p-8 sm:p-10 flex flex-col print:m-0 print:p-0 h-[98vh]    max-w-7xl w-full">
                    <Header />
                    <main className="  sm:mt-4 print:mt-0 print:m-0 print:p-0">
                        <Outlet />
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Layout;

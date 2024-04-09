import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
//import { StaticLamp } from "./ui/staticLamp";

function Layout() {
    return (
        <div className="flex justify-center  bg-black bg-cover bg-no-repeat h-screen w-screen">
            <div className="p-4 sm:p-10 flex flex-col min-h-[100vh] content-center  max-w-7xl w-full">
                <Header />
                <div className="fixed  mr-24 w-[88vw]  mt-[11rem] h-screen -rotate-10 z-0 ">{/*<StaticLamp />*/}</div>
                <main className="  sm:mt-8 ">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default Layout;

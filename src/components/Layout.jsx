import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

function Layout() {
  
    return (
        <div className="flex justify-center bg-papradMakka bg-cover bg-no-repeat h-screen">
            <div className="p-4 sm:p-10 flex flex-col min-h-[100vh] content-center  max-w-5xl w-full">
                <Header />
                <main className="  sm:mt-8 ">
                    <Outlet />
                </main>
                <Footer/>
            </div>
        </div>
    )
  }
  
  export default Layout
  
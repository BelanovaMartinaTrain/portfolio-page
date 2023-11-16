import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

function Layout() {
  
    return (
        <div className="p-12 flex flex-col min-h-[100vh]">
            <Header />
            <main className="mt-8">
                <Outlet />
            </main>
            <Footer/>
        </div>
    )
  }
  
  export default Layout
  
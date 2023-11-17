import { Link } from "react-router-dom"


function Header() {
  
    return (
      <header className="max-w-screen-md ">
        <nav id="menu  ">
          <Link to="/">
            <div className="flex font-cinzel text-4xl text-stone-100 justify-center pl-4"><span className="sr-only">Home</span>MB.</div>
          </Link>  
          <ul className="font-cinzel text-xl text-stone-100 flex justify-between mt-4 ">
              <Link to="/work" className="hover-underline-animation">WORK</Link>
              <Link to="/journey" className="hover-underline-animation ml-12">JOURNEY</Link>
              <Link to="/connect" className="hover-underline-animation ml-8 sm:ml-0">CONNECT</Link>
          </ul>
        </nav>

      </header>
    )
  }
  
  export default Header
  
import { Link } from "react-router-dom"


function Header() {
  
    return (
      <header className="max-w-screen-md ">
        <nav id="menu  ">
          <Link to="/">
            <div className="flex font-orpheus text-4xl text-stone-100 justify-center "><span className="sr-only">Home</span>MB.</div>
          </Link>  
          <ul className="font-orpheus text-lg text-stone-100 flex justify-between mt-4 ">
              <Link to="/work" className="hover-underline-animation">WORK</Link>
              <Link to="/journey" className="hover-underline-animation">JOURNEY</Link>
              <Link to="/connect" className="hover-underline-animation">CONNECT</Link>
          </ul>
        </nav>

      </header>
    )
  }
  
  export default Header
  
import { useState } from "react"
import "./NavBar.css"
function NavBar() {
    const[navBar,setnavBar]=useState(false)

    function navBarFunction() {
        setnavBar(!navBar)
    }
  return (
    <div className="container_navbar">
      <nav >    
        <div>LogoName</div>
        <button onClick={navBarFunction}>
        {navBar ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-xmark"></i>}
        </button>
      </nav>
      <ul className={`${navBar ? "show" : null}`}>
        <li>menu</li>
        <li>menu</li>
        <li>menu</li>
        <li>menu</li>
      </ul>
    </div>
  )
}

export default NavBar

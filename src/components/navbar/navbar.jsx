import { Link, NavLink } from "react-router-dom"

import "./navbar.css"


const NavBar=()=>{
  const linkStyle={textDecoration:"none",color:"blue"}

    return(
    
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item"  >
              <NavLink    to={"/"} >Main</NavLink>
            </li>
            <li className="nav-item"  >
            <NavLink   to={"about"} >About </NavLink>
            </li>
           
          </ul>
        </div>
      </nav>
    )

}
export default NavBar
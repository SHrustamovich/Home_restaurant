import { NavLink } from "react-router-dom";
import "../MenuBar/MenuBar.css"
const MenuBar = () => {
    return(
        <div className="menu">
            <NavLink to="/" className="cat">Categories</NavLink>
            <NavLink to="/about" className="about">About</NavLink>
            <NavLink to="/cantact" className="can">Cantact</NavLink>
        </div>
    )
}
export default MenuBar;
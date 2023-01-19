import "./Header.css";
import dolcevita from "../../assets/Header.img/dolcevita.webp";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="DolceVita">
      <NavLink to={'/'} ><img src={dolcevita} width="300" /></NavLink>
        <div className="h1">
          <NavLink to={'/'} ><h1>Videos & Fun </h1></NavLink>
        </div>
        <div>
       <h2 className="subtitle">Tienda de películas online</h2>
        </div>
      </div>
    </div>
  );
}

export default Header;

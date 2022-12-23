import "./Header.css";
import dolcevita from "../../assets/Header.img/dolcevita.webp";

function Header() {
  return (
    <div className="header">
      <div className="DolceVita">
        <img src={dolcevita} width="300" />
        <div className="h1">
          <h1>Videos & Fun </h1>
        </div>
        <div>
          <h2 className="subtitle">Tienda de películas online</h2>
        </div>
      </div>
    </div>
  );
}

export default Header;

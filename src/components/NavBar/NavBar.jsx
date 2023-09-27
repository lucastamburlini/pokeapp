import style from "./NavBar.module.css";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={style.navbarContainer}>
      <div>PokeApi</div>
      <div>
        <ul>
          <Link to="/home">Inicio</Link>
          <Link to="/form">Crear Pokemon</Link>
          <Link to="/about">Sobre mí</Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

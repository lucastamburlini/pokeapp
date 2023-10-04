import imgSource from "../../assets/pokeapi.png";

import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav>
      <div className={style.navbarContainer}>
        <div>
          <img src={imgSource} alt="PokeApi" />
        </div>
        <div>
          <ul>
            <Link to="/home">Home</Link>
            <Link to="/createpokemon">Create Pokemon</Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

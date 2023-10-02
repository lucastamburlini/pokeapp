import style from "./NavBar.module.css";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={style.navbarContainer}>
      <div>PokeApi</div>
      <div>
        <ul>
          <Link to="/home">Home</Link>
          <Link to="/createpokemon">Create Pokemon</Link>
          <Link to="/about">About</Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

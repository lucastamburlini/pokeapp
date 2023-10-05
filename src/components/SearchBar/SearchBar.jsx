import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { restorePokemon, searchPokemon } from "../../redux/actions/actions";

import style from "./SearchBar.module.css";

const SearchBar = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleData = (e) => {
    setName(e.target.value);
  };

  const handleSearch = () => {
    if (name.trim() !== "") {
      dispatch(searchPokemon(name));
    } else {
      alert("Ingrese un nombre");
    }
  };

  const handleRestore = () => {
    dispatch(restorePokemon(pokemons))
  };

  return (
    <div className={style.searchContainer}>
      <input
        placeholder="Add ID or Name"
        type="text"
        value={name}
        onChange={handleData}
        list="pokemonNames"
      />
      <datalist id="pokemonNames">
        {name.trim().length > 0 &&
          pokemons.map((pokemon) => (
            <option key={pokemon.id} value={pokemon.name} />
          ))}
      </datalist>
      <button className={style.searchButton} onClick={handleSearch}>
        Search
      </button>
      <button className={style.restoreButton} onClick={handleRestore}>
        Restore
      </button>
    </div>
  );
};

export default SearchBar;

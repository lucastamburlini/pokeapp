import { useState } from "react";
import style from "./SearchBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPokemons, searchPokemon } from "../../redux/actions/infoActions";

const SearchBar = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const navigate = useNavigate();

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

  const handleNavigate = () => {
    setName("");
    dispatch(getPokemons());
    navigate("/home");
  };

  return (
    <div className={style}>
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
      <button onClick={handleSearch}>Buscar</button>
      <button onClick={handleNavigate}>Restaurar</button>
    </div>
  );
};

export default SearchBar;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../redux/actions/actions";
import CardContainer from "../../components/CardContainer/CardContainer";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filters from "../../components/Filters/Filters";

import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);

  useEffect(() => {
    // Verificar si ya se han cargado los datos de los pokemones antes de hacer una nueva solicitud.
    if (pokemons.length === 0) {
      dispatch(getPokemons());
    }
  }, [dispatch, pokemons]);

  return (
    <div className={style.homeContainer}>
      <SearchBar />
      <Filters />
      <CardContainer />
    </div>
  );
};

export default Home;

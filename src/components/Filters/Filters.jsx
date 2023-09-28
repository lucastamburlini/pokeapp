import { useDispatch, useSelector } from "react-redux";
//import style from "./Filters.module.css";
import { useEffect } from "react";
import { getTypesPokemons } from "../../redux/actions/actions";

const Filters = () => {
  /* Botones/Opciones para filtrar por tipo, y por si su origen es de la API o de la base de datos (creados por nosotros desde el formulario).
Botones/Opciones para ordenar tanto ascendentemente como descendentemente los pokemones por orden alfabético y por ataque. */
  const dispatch = useDispatch();
  const typesPokemons = useSelector((state) => state.info.typesPokemons);
  useEffect(() => {
    dispatch(getTypesPokemons());
  }, []);

  const filterType = typesPokemons;
  /* const filterOrigin = [];
  const filterOrderAsDs = [];
  const filterOrderAA = []; */

  return (
    <div>
      <div>
        {filterType.map((filter) => {
          return (
            <button key={filter} value={filter}>
              {filter}
            </button>
          );
        })}
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Filters;

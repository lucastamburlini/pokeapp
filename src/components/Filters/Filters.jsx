import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getTypesPokemons, setFilters } from "../../redux/actions/infoActions";

const Filters = () => {
  const dispatch = useDispatch();
  const typesPokemons = useSelector((state) => state.typesPokemons);
  useEffect(() => {
    dispatch(getTypesPokemons());
  }, []);


  const typeFilters = typesPokemons;
  const originFilters = ["Todos", "Base de Datos", "API"];
  const sortingOrderFilters = [
    "Ascendente (Nombre)",
    "Descendente (Nombre)",
    "Por Ataque (Bajo a Alto)",
    "Por Ataque (Alto a Bajo)",
  ];


  const handleFilter = (e) => {
    const filterValue = e.target.value;

    dispatch(setFilters( filterValue))
  };

  return (
    <div>
      <div>
        {typeFilters.map((filter) => {
          const capitalizedFilter =
            filter.charAt(0).toUpperCase() + filter.slice(1);
          return (
            <button
              onClick={handleFilter}
              key={capitalizedFilter}
              name="typeFilter"
              value={capitalizedFilter}
            >
              {capitalizedFilter}
            </button>
          );
        })}
      </div>
      <div>
        {originFilters.map((filter) => {
          return (
            <button
              onClick={handleFilter}
              key={filter}
              name="originFilter"
              value={filter}
            >
              {filter}
            </button>
          );
        })}
      </div>
      <div>
        {sortingOrderFilters.map((filter) => {
          return (
            <button
              onClick={handleFilter}
              key={filter}
              name="sortingOrderFilter"
              value={filter}
            >
              {filter}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Filters;

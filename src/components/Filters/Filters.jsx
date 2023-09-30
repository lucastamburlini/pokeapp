import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getTypesPokemons,
  orderFilter,
  originFilter,
  typeFilter,
} from "../../redux/actions/infoActions";

const Filters = () => {
  const dispatch = useDispatch();
  const typesPokemons = useSelector((state) => state.typesPokemons);
  useEffect(() => {
    dispatch(getTypesPokemons());
  }, []);
  const [typesFilters, setTypeFilters] = useState([]);

  const typeFilters = typesPokemons;
  const originFilters = ["Todos", "Base de Datos", "API"];
  const sortingOrderFilters = [
    "Ascendente (Nombre)",
    "Descendente (Nombre)",
    "Por Ataque (Bajo a Alto)",
    "Por Ataque (Alto a Bajo)",
  ];

  const handleFilterOrigin = (e) => {
    let filterValue = e.target.value;
    dispatch(originFilter(filterValue));
  };

  const handleFilterOrder = (e) => {
    let filterValue = e.target.value;
    dispatch(orderFilter(filterValue));
  };

  const handleFilterTypes = (e) => {
    let filterValue = e.target.value;
    if (typesFilters.includes(filterValue)) {
      setTypeFilters(typesFilters.filter((filter) => filter !== filterValue));
    } else {
      setTypeFilters([...typesFilters, filterValue]);
    }
    dispatch(typeFilter(typesFilters));
  };

  return (
    <div>
      <div>
        <button onClick={handleFilterTypes} value={"Todos"}>
          Todos
        </button>
        {typeFilters.map((filter) => {
          const capitalizedFilter =
            filter.charAt(0).toUpperCase() + filter.slice(1);
          return (
            <button
              onClick={handleFilterTypes}
              key={capitalizedFilter}
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
            <button onClick={handleFilterOrigin} key={filter} value={filter}>
              {filter}
            </button>
          );
        })}
      </div>
      <div>
        {sortingOrderFilters.map((filter) => {
          return (
            <button onClick={handleFilterOrder} key={filter} value={filter}>
              {filter}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Filters;

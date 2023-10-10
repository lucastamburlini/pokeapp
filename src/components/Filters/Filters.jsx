import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  clearFilter,
  getTypesPokemons,
  orderFilter,
  originFilter,
  typeFilter,
} from "../../redux/actions/actions";

import style from "./Filters.module.css";

const Filters = () => {
  const dispatch = useDispatch();
  const typesPokemons = useSelector((state) => state.typesPokemons);
  const filters = useSelector((state) => state.filters);
  useEffect(() => {
    dispatch(getTypesPokemons());
  }, []);


  const handleFilterOrigin = (e) => {
    const filterValue = e.target.value;
    if (filterValue === filters.selectedOrigin) {
      return;
    }

    dispatch(originFilter(filterValue));
  };

  const handleFilterOrder = (e) => {
    const filterValue = e.target.value;
    if (filterValue === filters.selectedOrder) {
      return;
    }

    dispatch(orderFilter(filterValue));
  };

  const handleFilterTypes = (e) => {
    const filterValue = e.target.value;
    let type = [];

    if (filterValue === "all") {
      type.push("all");
    } else {
      if (filters.selectedTypes.includes("all")) {
        type.push(filterValue);
      } else {
        if (filters.selectedTypes.length === 2) {
          type.push(filterValue);
        } else {
          if (filters.selectedTypes.includes(filterValue)) {
            type = filters.selectedTypes.filter((type) => type !== filterValue);
          } else {
            type = [...filters.selectedTypes, filterValue];
          }
        }
      }
    }

    if (type.length === 0) {
      type = ["all"];
    }
    dispatch(typeFilter(type));
  };

  const handleClearFilter = () => {
    dispatch(clearFilter());
  };

  return (
    <div className={style.filterContainer}>
      <div>
        <h2>Filters</h2>
      </div>
      <div className={style.selectedContainer}>
        <div>
          {["All", "Database", "API"].map((filter) => {
            return (
              <button
                onClick={handleFilterOrigin}
                key={filter}
                value={filter}
                className={filters.selectedOrigin === filter ? style.selected : ""}
              >
                {filter}
              </button>
            );
          })}
        </div>
        <div>
          {["all", ...typesPokemons].map((filter) => {
            const capitalizedFilter =
              filter.charAt(0).toUpperCase() + filter.slice(1);
            return (
              <button
                onClick={handleFilterTypes}
                key={capitalizedFilter}
                value={filter}
                className={filters.selectedTypes.includes(filter) ? style.selected : ""}
              >
                {capitalizedFilter}
              </button>
            );
          })}
        </div>
        <div>
          {[
            "ID",
            "Ascending (Name)",
            "Descending (Name)",
            "By Attack (Low to High)",
            "By Attack (High to Low)",
          ].map((filter) => {
            return (
              <button
                onClick={handleFilterOrder}
                key={filter}
                value={filter}
                className={filters.selectedOrder === filter ? style.selected : ""}
              >
                {filter}
              </button>
            );
          })}
        </div>
        <div>
          <button onClick={handleClearFilter} value={"clear"}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;

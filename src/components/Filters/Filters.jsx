import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
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
  useEffect(() => {
    dispatch(getTypesPokemons());
  }, []);

  const [selectedOrigin, setSelectedOrigin] = useState("All");
  const [selectedTypes, setSelectedTypes] = useState(["all"]);
  const [selectedOrder, setSelectedOrder] = useState("ID");

  const handleFilterOrigin = (e) => {
    const filterValue = e.target.value;

    if (filterValue === selectedOrigin) {
      return;
    }

    dispatch(originFilter(filterValue));
    setSelectedOrigin(filterValue);
  };

  const handleFilterOrder = (e) => {
    const filterValue = e.target.value;
  
    if (filterValue === selectedOrder) {
      return;
    }
  
    dispatch(orderFilter(filterValue));
    setSelectedOrder(filterValue);
  };
  

  const handleFilterTypes = (e) => {
    const filterValue = e.target.value;
    let type = [];

    if (filterValue === "all") {
      type.push("all");
    } else {
      if (selectedTypes.includes("all")) {
        type.push(filterValue);
      } else {
        if (selectedTypes.length === 2) {
          type.push(filterValue);
        } else {
          if (selectedTypes.includes(filterValue)) {
            type = selectedTypes.filter((type) => type !== filterValue);
          } else {
            type = [...selectedTypes, filterValue];
          }
        }
      }
    }

    if (type.length === 0) {
      type = ["all"];
    }

    setSelectedTypes(type);
    dispatch(typeFilter(type));
  };

  const handleClearFilter = () => {
    dispatch(clearFilter());
    setSelectedTypes(["all"]);
    setSelectedOrigin("All");
    setSelectedOrder("ID");
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
                className={selectedOrigin === filter ? style.selected : ""}
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
                className={selectedTypes.includes(filter) ? style.selected : ""}
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
                className={selectedOrder === filter ? style.selected : ""}
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

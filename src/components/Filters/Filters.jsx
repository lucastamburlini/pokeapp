import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  clearFilter,
  getTypesPokemons,
  orderFilter,
  originFilter,
  typeFilter,
} from "../../redux/actions/infoActions";
import styles from "./Filters.module.css";

const Filters = () => {
  const dispatch = useDispatch();
  const typesPokemons = useSelector((state) => state.typesPokemons);
  useEffect(() => {
    dispatch(getTypesPokemons());
  }, []);

  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedOrigin, setSelectedOrigin] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleFilterOrigin = (e) => {
    const filterValue = e.target.value;
    setSelectedOrigin((prev) => (prev === filterValue ? null : filterValue));
    dispatch(originFilter(filterValue));
  };

  const handleFilterOrder = (e) => {
    const filterValue = e.target.value;
    setSelectedOrder((prev) => (prev === filterValue ? null : filterValue));
    dispatch(orderFilter(filterValue));
  };

  const handleFilterTypesWithLimit = (filterValue) => {
    const updatedSelectedTypes = [...selectedTypes];
    const index = updatedSelectedTypes.indexOf(filterValue);

    if (index !== -1) {
      updatedSelectedTypes.splice(index, 1);
    } else {
      if (updatedSelectedTypes.length < 2) {
        updatedSelectedTypes.push(filterValue);
      } else {
        updatedSelectedTypes.shift();
        updatedSelectedTypes.push(filterValue);
      }
    }

    setSelectedTypes(updatedSelectedTypes);
  };

  const handleFilterTypes = (e) => {
    const filterValue = e.target.value;
    handleFilterTypesWithLimit(filterValue);
    dispatch(typeFilter(filterValue));
  };

  const hanldeClearFilter = (e) => {
    dispatch(clearFilter(e.target.value));
    setSelectedTypes([]);
    setSelectedOrigin(null), setSelectedOrder(null);
  };

  return (
    <div>
      <div>
        {typesPokemons.map((filter) => {
          const capitalizedFilter =
            filter.charAt(0).toUpperCase() + filter.slice(1);
          return (
            <button
              onClick={handleFilterTypes}
              key={capitalizedFilter}
              value={filter}
              className={selectedTypes.includes(filter) ? styles.selected : ""}
            >
              {capitalizedFilter}
            </button>
          );
        })}
      </div>
      <div>
        {["All", "Database", "API"].map((filter) => {
          return (
            <button
              onClick={handleFilterOrigin}
              key={filter}
              value={filter}
              className={selectedOrigin === filter ? styles.selected : ""}
            >
              {filter}
            </button>
          );
        })}
      </div>
      <div>
        {[
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
              className={selectedOrder === filter ? styles.selected : ""}
            >
              {filter}
            </button>
          );
        })}
      </div>
      <div>
        <button onClick={hanldeClearFilter} value={"clear"}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Filters;
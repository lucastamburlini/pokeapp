import { useSelector } from "react-redux";
import Card from "../Card/Card";
import { useState } from "react";

import style from "./CardContainer.module.css";

const ITEMS_PER_PAGE = 12;

const CardContainer = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const filteredPokemons = useSelector((state) => state.filteredPokemons);

  const displayPokemons =
    filteredPokemons.length > 0 ? filteredPokemons : pokemons;

  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const totalPages = Math.ceil(displayPokemons.length / ITEMS_PER_PAGE);

  const currentItems = displayPokemons.slice(startIndex, endIndex);

  const handleNext = () => {
    const totalElements = displayPokemons.length;
    const nextPage = currentPage + 1;
    const totalPages = Math.ceil(totalElements / ITEMS_PER_PAGE);

    if (nextPage > totalPages) return;
    setCurrentPage(nextPage);
  };

  const handlePrev = () => {
    if (currentPage === 0) return;
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <div>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index + 1} onClick={() => setCurrentPage(index + 1)}>
            {index + 1}
          </button>
        ))}
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
      <div className={style.cardContainer}>
        {currentItems.map((pokemon) => (
          <Card
            key={pokemon.id}
            name={pokemon.name}
            id={pokemon.id}
            hp={pokemon.hp}
            image={pokemon.image}
            types={pokemon.types}
            attack={pokemon.attack}
            defense={pokemon.defense}
          />
        ))}
      </div>
      <div>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index + 1} onClick={() => setCurrentPage(index + 1)}>
            {index + 1}
          </button>
        ))}
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CardContainer;

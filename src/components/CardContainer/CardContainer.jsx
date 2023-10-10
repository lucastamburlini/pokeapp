import { useSelector } from "react-redux";
import Card from "../Card/Card";
import { useState } from "react";

import style from "./CardContainer.module.css";

const ITEMS_PER_PAGE = 12;
const MAX_PAGES_DISPLAYED = 5;

const CardContainer = () => {
  const pokemons = useSelector((state) => state.copiaPokemons);
  const filteredPokemons = useSelector((state) => state.filteredPokemons);
  const displayPokemons =
    filteredPokemons.length > 0 ? filteredPokemons : pokemons;

  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const totalPages = Math.ceil(displayPokemons.length / ITEMS_PER_PAGE);
  const currentItems = displayPokemons.slice(startIndex, endIndex);

  let startPage = currentPage - Math.floor(MAX_PAGES_DISPLAYED / 2);
  let endPage = currentPage + Math.floor(MAX_PAGES_DISPLAYED / 2);

  if (startPage < 1) {
    startPage = 1;
    endPage = Math.min(MAX_PAGES_DISPLAYED, totalPages);
  }

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, totalPages - MAX_PAGES_DISPLAYED + 1);
  }

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
            created={pokemon.created}
          />
        ))}
      </div>
      <div className={style.paginationContainer}>
        <button className={style.paginationBotton} onClick={handlePrev} disabled={currentPage === 1}>
          Prev
        </button>
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
          <button
            key={startPage + index}
            onClick={() => setCurrentPage(startPage + index)}
            className={
              currentPage === startPage + index ? style.currentPage : style.buttonPage
            }
          >
            {startPage + index}
          </button>
        ))}
        <button className={style.paginationBotton} onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CardContainer;

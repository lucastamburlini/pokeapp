import { useSelector } from "react-redux";
import Card from "../Card/Card";

const CardContainer = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const filteredPokemons = useSelector((state) => state.filteredPokemons);

  const displayPokemons = filteredPokemons.length > 0 ? filteredPokemons : pokemons;

  return (
    <div>
      {displayPokemons.map((pokemon) => {
        return (
          <Card
            key={pokemon.id}
            name={pokemon.name}
            id={pokemon.id}
            image={pokemon.image}
            types={pokemon.types}
            attack={pokemon.attack}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;

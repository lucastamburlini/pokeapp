import { useSelector } from "react-redux";
import Card from "../Card/Card";

const CardContainer = () => {
  const pokemons = useSelector((state) => state.info.pokemons);
  return (
    <div>
      {pokemons.map((pokemon) => {
        return (
          <Card
            key={pokemon.id}
            name={pokemon.name}
            id={pokemon.id}
            image={pokemon.image}
            types={pokemon.types}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;

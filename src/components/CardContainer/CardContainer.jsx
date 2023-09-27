import { useSelector } from "react-redux";
import Card from "../Card/Card";

const CardContainer = () => {
  const pokemons = useSelector((state) => state.pokemons);
  console.log(pokemons);
  return (
    <div>
      {pokemons.map((pokemon) => {
        return <Card key={pokemon.id} name={pokemon.name} />;
      })}
    </div>
  );
};

export default CardContainer;

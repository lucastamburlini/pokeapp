// import style from './Detail.module.css'

import { useSelector } from "react-redux";
const Detail = () => {
  const detailPokemon = useSelector((state) => state.info.detailPokemon);

  return (
    <div>
      {detailPokemon.map((pokemon) => (
        <div key={pokemon.id}>
          <div>{pokemon.id}</div>
          <div>{pokemon.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Detail;

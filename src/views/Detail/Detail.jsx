import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import style from "./Detail.module.css";

const Detail = () => {
  const [pokemon, setPokemon] = useState({});
  const { id } = useParams();
  console.log("Data:", pokemon);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/pokemons/${id}`)
      .then((response) => {
        const data = response.data;
        setPokemon(data);
      })
      .catch((error) => {
        console.error("Error al cargar la información del detalle", error);
      });
  }, [id]);

  return (
    <div className={style.detailContainer}>
      <div className={style.detailImg}>
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <div className={style.detailInfo}>
        <div>Name: {pokemon.name}</div>
        <div>HP: {pokemon.hp}</div>
        <div>Attack: {pokemon.attack}</div>
        <div>Defense: {pokemon.defense}</div>
        {pokemon.speed && <div>Speed: {pokemon.speed}</div>}
        {pokemon.height && <div>Height: {pokemon.height}</div>}
        {pokemon.weight && <div>Weight: {pokemon.weight}</div>}
        <div>
          {pokemon.types &&
            pokemon.types.map((type) => (
              <p className={style[type.name]} key={type.name}>
                {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;

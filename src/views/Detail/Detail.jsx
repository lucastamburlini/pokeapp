import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import style from "./Detail.module.css";

const Detail = () => {
  const [pokemon, setPokemon] = useState({});
  const { id } = useParams();

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
        <div className={style.title}>
          <div>
            {pokemon.name &&
              pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </div>
          <div className={style.infoId}>ID: {pokemon.id}</div>
        </div>

        <div className={style.stats}>
          <div className={style.stat}>
            <div>HP</div>
            <div className={style.progressBar}>
              <div className={style.progressContainer}>
                <div
                  className={style.progressPer}
                  style={{ width: `${(pokemon.hp / 255) * 100}%` }}
                ></div>
              </div>
              <div>{pokemon.hp}</div>
            </div>
          </div>
          <div className={style.stat}>
            <div>Attack</div>
            <div className={style.progressBar}>
              <div className={style.progressContainer}>
                <div
                  className={style.progressPer}
                  style={{ width: `${(pokemon.attack / 190) * 100}%` }}
                ></div>
              </div>
              <div>{pokemon.attack}</div>
            </div>
          </div>
          <div className={style.stat}>
            <div>Defense</div>
            <div className={style.progressBar}>
              <div className={style.progressContainer}>
                <div
                  className={style.progressPer}
                  style={{ width: `${(pokemon.defense / 230) * 100}%` }}
                ></div>
              </div>
              <div>{pokemon.defense}</div>
            </div>
          </div>
          <div className={style.stat}>
            <div>Speed</div>
            <div className={style.progressBar}>
              <div className={style.progressContainer}>
                <div
                  className={style.progressPer}
                  style={{ width: `${(pokemon.speed / 180) * 100}%` }}
                ></div>
              </div>
              <div>{pokemon.speed}</div>
            </div>
          </div>
        </div>

        <div className={style.detailMeasures}>
          <div>
            {pokemon.height && (
              <div>
                <p>Height</p>{" "}
                <p className={style.number}>
                  {(pokemon.height / 10).toFixed(1)} m
                </p>
              </div>
            )}
          </div>
          <div>
            {" "}
            {pokemon.weight && (
              <div>
                <p>Weight</p>{" "}
                <p className={style.number}>
                  {(pokemon.weight / 10).toFixed(1)} kg
                </p>
              </div>
            )}
          </div>
        </div>

        <div className={style.detailFooter}>
          <div className={style.type}>
            <div>
              {pokemon.types &&
                pokemon.types.map((type) => (
                  <p className={style[type.name]} key={type.name}>
                    {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
                  </p>
                ))}
            </div>
          </div>
          <div className={style.buttons}>
            {pokemon.created === true ? (
              <>
                <button disabled={false} className={style.buttonUpdate}>
                  Update
                </button>
                <button disabled={false} className={style.buttonDelete}>Delete</button>
              </>
            ) : (
              <>
                <button disabled={true} className={style.buttonUpdate}>
                  Update
                </button>
                <button disabled={true} className={style.buttonDelete}>Delete</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

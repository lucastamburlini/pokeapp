import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { detailPokemon } from "../../redux/actions/infoActions";

import style from "./Card.module.css";

const Card = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const hanldeNavigate = () => {
    navigate(`/detail/${props.id}`);
    dispatch(detailPokemon(`${props.id}`));
  };

  return (
    <div onClick={hanldeNavigate} className={style.cardContainer}>
      <div className={style.imgContainer}>
        <img src={props.image} alt={props.name} />
      </div>

      <div>
        <p>N. {String(props.id).padStart(4, "0")}</p>
        <p>{props.name}</p>
      </div>

      <div>
        <p>Types:</p>
        <div>
          {props.types.map((type) => {
            return (
              <p className={style[type.name]} key={type.name}>
                {type.name}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;

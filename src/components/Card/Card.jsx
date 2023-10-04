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

      <div className={style.infoContainer}>
        <p className={style.infoId}>
          N.º&nbsp;{String(props.id).padStart(4, "0")}
        </p>
        <p className={style.infoName}>
          {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
        </p>
      </div>

      <div className={style.typesContainer}>
        {props.types.map((type) => {
          return (
            <p className={style[type.name]} key={type.name}>
             {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Card;

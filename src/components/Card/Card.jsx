import { useNavigate } from "react-router-dom";

import style from "./Card.module.css";

const Card = (props) => {
  const navigate = useNavigate();

  const hanldeNavigate = () => {
    navigate(`/detail/${props.id}`);
  };

  return (
    <div  className={style.cardContainer}>
      <div className={style.imgContainer} onClick={hanldeNavigate}>
        <img src={props.image} alt={props.name} />
        {props.created === true && (
          <div className={style.newIndicator}>New</div>
        )}
      </div>

      <div className={style.infoContainer}>
        <p className={style.infoId}>
          N.º&nbsp;
          {props.id.length > 4
            ? `${props.id.slice(0, 4)}...`
            : String(props.id).padStart(4, "0")}
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

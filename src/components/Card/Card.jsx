import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { detailPokemon } from "../../redux/actions/actions";

const Card = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const hanldeNavigate = () => {
    navigate(`/detail/${props.id}`);
    dispatch(detailPokemon(`${props.id}`));
  };

  return (
    <div onClick={hanldeNavigate}>
      <p>{props.id}</p>
      <p>{props.name}</p>
      <img src={props.image} alt={props.name} />
      <div>
        {props.types.map((type) => {
          return <p key={type.name}>{type.name}</p>;
        })}
      </div>
    </div>
  );
};

export default Card;

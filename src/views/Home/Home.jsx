// import style from './Home.module.css'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/actions/actions";
import CardContainer from "../../components/CardContainer/CardContainer";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <div>
        <CardContainer />
      </div>
    </div>
  );
};

export default Home;

// import style from './Home.module.css'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/actions/actions";
import CardContainer from "../../components/CardContainer/CardContainer";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <div>
      <SearchBar />
      <CardContainer />
    </div>
  );
};

export default Home;

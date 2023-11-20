import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/actions/actions";
import CardContainer from "../../components/CardContainer/CardContainer";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filters from "../../components/Filters/Filters";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";

import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);

    dispatch(getPokemons())
      .then(() => {
        setLoader(false);
      })
      .catch((error) => {
        console.error("Error fetching pokemons:", error);
        setLoader(false);
      });
  }, [dispatch]);

  return (
    <>
      <div className={style.homeContainer}>
        <SearchBar />
        <Filters />
        {loader ? (
          <div className={style.loaderContainer}>
            <p>Loading pokemons...</p>
            <Loader />
          </div>
        ) : (
          <CardContainer />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;

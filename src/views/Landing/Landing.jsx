import { useNavigate } from "react-router-dom";
import style from "./Landing.module.css";
import videoSource from "../../assets/pokemon4.mp4";
import imgSource from "../../assets/pokemon.png";

const Landing = () => {
  const navigate = useNavigate();
  const handleNavigator = () => {
    navigate("/home");
  };

  return (
    <div className={style.landingContainer}>
      <video autoPlay loop muted playsInline className={style.backgroundVideo}>
        <source src={videoSource} type="video/mp4" />
      </video>
      <div className={style.imgContainer}>
        <img src={imgSource} alt={imgSource} />
      </div>
      <div className={style.buttonContainer}>
        <button onClick={handleNavigator}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Landing;

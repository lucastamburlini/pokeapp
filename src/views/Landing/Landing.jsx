import { useNavigate } from "react-router-dom";

import style from "./Landing.module.css";

const Landing = () => {
  const navigate = useNavigate();
  const handleNavigator = () => {
    navigate("/home");
  };
  return (
    <div className={style.landingContainer}>
      <h1>Landing</h1>
      <button onClick={handleNavigator}>Comenzar</button>
    </div>
  );
};

export default Landing;

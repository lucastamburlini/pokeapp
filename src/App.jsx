import { About, Detail, Form, Home, Landing } from "./views";
import NavBar from "./components/NavBar/NavBar";

import { Routes, Route, useLocation } from "react-router-dom";

import style from "./App.module.css";

function App() {
  const location = useLocation();

  return (
    <div className={style.App}>
      {location.pathname !== "/" && <NavBar />}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;

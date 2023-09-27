import Detail from "./views/Detail/Detail";
import Form from "./views/Form/Form";
import Home from "./views/Home/Home";
import Landing from "./views/Landing/Landing";
import NavBar from "./components/NavBar/NavBar";

import { Routes, Route, useLocation } from "react-router-dom";

import "./App.module.css";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && (<NavBar />)}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;

import { About, Detail, Form, Home, Landing } from "./views";
import NavBar from "./components/NavBar/NavBar";

import { Routes, Route, useLocation } from "react-router-dom";

import "./App.module.css";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;

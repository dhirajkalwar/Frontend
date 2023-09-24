import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Teams from "./components/Teams";
import Ctf2023 from "./components/Ctf2023";
import Flag from "./components/Flag";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Teams" element={<Teams />} />
        <Route path="/ctf2023" element={<Ctf2023 />} />
        <Route path="/ctf2023/verify" element={<Flag />} />
      </Routes>
    </div>
  );
}

export default App;

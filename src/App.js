import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Gym from "./components/Gym";
import FeInterview from "./components/FeInterview/FeInterview";
import Home from "./components/Home";
import CssCheatSheet from "./components/CssCheatSheet";
import BeInterview from "./components/BeInterview/BeInterview";
import MySql from "./components/MySql/MySql";
import TypeScript from "./components/TypeScript";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gym" element={<Gym />} />
        <Route path="/fe-interview" element={<FeInterview />} />
        <Route path="/be-interview" element={<BeInterview />} />
        <Route path="/cheatsheet/css" element={<CssCheatSheet />} />
        <Route path="/mysql" element={<MySql />} />
        <Route path="/typescript" element={<TypeScript />} />
      </Routes>
    </Router>
  );
}

export default App;

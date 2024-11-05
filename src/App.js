import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Gym from "./components/Gym";
import FeInterview from "./components/FeInterview";
import Home from "./components/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gym" element={<Gym />} />
        <Route path="/fe-interview" element={<FeInterview />} />
      </Routes>
    </Router>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Gym from "./components/Gym";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Gym />} />
      </Routes>
    </Router>
  );
}

export default App;

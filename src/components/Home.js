import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <br />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/gym">Gym</Link>
        </li>
        <li>
          <Link to="/fe-interview">Front-end Interview</Link>
        </li>
        <li>
          <Link to="/be-interview">Back-end Interview</Link>
        </li>
        <li>
          <Link to="/cheatsheet/css">CSS Cheat Sheet</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;

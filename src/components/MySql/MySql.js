import AdvancedSql from "./AdvancedSql";
import Join from "./Join";
import "./MySql.css";
import MySqlBasics from "./MySqlBasics";
import Operators from "./Operators";
import References from "./References";
const MySql = () => {
  return (
    <div className="mysql">
      <h1 style={{ textAlign: "center" }}>My SQL Basics</h1>

      <h1>My SQL Basics</h1>
      <MySqlBasics />
      <h1>Operators in MySQL</h1>
      <Operators />
      <h1>Joins in MySQL</h1>
      <Join />
      <h1>Advanced SQL</h1>
      <AdvancedSql />
      <h1>References</h1>
      <References />
    </div>
  );
};

export default MySql;

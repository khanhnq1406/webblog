const Join = () => {
  return (
    <>
      <h2>Introduction</h2>
      <h3>What is join in SQL?</h3>
      <p>
        A JOIN concept which is basically a clause used to combine rows from
        different tables based on a condition
      </p>

      <h2>Types of JOIN in SQL</h2>
      <ul>
        <li>INNER JOIN</li>
        <li>LEFT JOIN</li>
        <li>RIGHT JOIN</li>
        <li>Full OUTER JOIN</li>
        <li>SELF JOIN</li>
      </ul>
      <img
        alt=""
        src="https://ugoproto.github.io/ugodoc/img/introduction_to_sql_joins/Visual_SQL_JOINS_V2.png"
      />

      <h2>INNER JOIN</h2>
      <p>
        The INNER JOIN helps to select the matching records from the both tables
      </p>
      <img
        alt=""
        src="https://www.sqlitetutorial.net/wp-content/uploads/2015/12/SQLite-Inner-Join-Example.png"
      />

      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=text%2Fx-mysql&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=SELECT%2520fname%252C%2520acnumber%2520FROM%2520customer%250AINNER%2520JOIN%2520account%250AON%2520customer.custid%2520%253D%2520account.custid%253B%250A%250ASELECT%2520count%28fname%29%2520FROM%2520customer%250AINNER%2520JOIN%2520account%250AON%2520customer.custid%2520%253D%2520account.custid%253B"
        style={{
          width: "100%",
          height: "200px",
          border: 0,
          transform: "scale(1)",
          overflow: "hidden",
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>

      <h2>LEFT JOIN</h2>
      <p>
        The LEFT JOIN helps to fetch all records from the left table and the
        matching records from the right table
      </p>
      <img
        alt=""
        src="https://www.sqlitetutorial.net/wp-content/uploads/2015/12/SQLite-left-join-example.png"
      />
    </>
  );
};

export default Join;

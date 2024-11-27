const AdvancedSql = () => {
  return (
    <>
      <h2>What is a Subquery?</h2>
      <p>
        A subquery is a query nested inside another query. It is used to perform
        a query within a query.
      </p>
      <h2>Types of Subquery</h2>
      <ul>
        <li>
          <b>Nested subquery:</b> Nested subquery first executes the inner
          SELECT query and then with the returning values executes the outer
          query
        </li>
        <li>
          <b>Correlated subquery:</b> A correlated subquery reads every row in a
          table and comparing values in each row against related data
        </li>
      </ul>
      <h2>How Subquery Executes?</h2>
      <p>There are two parts in a subquery: Inner Query and Outer query</p>
      <img
        alt=""
        src="https://cdn.prod.website-files.com/65f854814fd223fc3678ea53/65f854814fd223fc3678f159_Inner-query.png"
      />

      <h2>SQL CASE statement</h2>
      <h3>CASE Statement</h3>
      <ul>
        <li>
          First the CASE statement reads through all the conditions and returns
          a value when the first condition is met like an IF-THEN-ELSE statement
        </li>
        <li>
          When a condition is true, automatically it will stop reading and
          return the result
        </li>
        <li>
          If no condition is true, it will return the value in the ELSE clause
        </li>
        <li>
          If there is no ELSE part and no condition is true, it returns NULL
        </li>
      </ul>

      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=text%2Fx-mysql&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=SELECT%2520custid%252C%2520fname%252C%2520age%252C%250ACASE%250A%2509WHEN%2520age%2520%253E%252030%2520THEN%2520%27The%2520age%2520is%2520greater%2520than%252030%27%250A%2520%2520%2520%2520WHEN%2520age%2520%253D%252030%2520THEN%2520%27The%2520age%2520is%252030%27%250A%2520%2520%2520%2520ELSE%2520%27The%2520age%2520is%2520not%2520group%2520of%252030%27%250AEND%2520AS%2520AgeInformation%250AFROM%2520DataOfCustomer%253B"
        style={{
          width: "100%",
          height: "186px",
          border: 0,
          transform: "scale(1)",
          overflow: "hidden",
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>

      <h2>VIEW in MySQL</h2>
      <ul>
        <li>
          View stands for virtual table which is based on the result-set of an
          SQL statement
        </li>
        <li>
          Normally in view, it contains rows and columns which is like a real
          table
        </li>
        <li>
          The fields in a view are fields from one or more real tables in the
          database
        </li>
      </ul>
      <img
        alt=""
        src="https://www.mysqltutorial.org/wp-content/uploads/2019/08/MySQL-View.png"
      />
    </>
  );
};

export default AdvancedSql;

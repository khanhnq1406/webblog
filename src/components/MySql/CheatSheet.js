import { useEffect } from "react";

const CheatSheet = () => {
  useEffect(() => {
    window.Prism.highlightAll();
  }, []);
  return (
    <>
      <h2>SHOW</h2>
      <code className="language-sql">SHOW databases;</code>
      <code className="language-sql">SHOW tables;</code>
      <h2>USE</h2>
      <code className="language-sql">USE database_name;</code>
      <h2>DESCRIBE</h2>
      <code className="language-sql">DESCRIBE table_name;</code>
      <h2>SELECT</h2>
      <h3>Basic</h3>
      <pre>
        <code className="language-sql">
          SELECT {"<columns>"} FROM table_name{"\n"}WHERE {"<condition>"};
        </code>
      </pre>
      <h3>Calculate in Query</h3>
      <pre>
        <code className="language-sql">
          SELECT {"<columns>"} FROM table_name{"\n"}
          WHERE (column.a+column.b) = c;
        </code>
      </pre>
      <h3>SELECT DISTINCT</h3>
      <p>
        Inside a table, a column often contains many duplicate values; and
        sometimes you only want to list the different (distinct) values.
      </p>
      <p>
        The SELECT DISTINCT statement is used to return only distinct
        (different) values.
      </p>
      <pre>
        <code className="language-sql">
          SELECT DISTINCT {"<columns>"} FROM table_name{"\n"}
          WHERE (column.a+column.b) = c;
        </code>
      </pre>
      <pre>
        <code className="language-sql">
          SELECT COUNT(CITY) - COUNT(DISTINCT CITY) AS difference FROM STATION;
        </code>
      </pre>
      <h2>ORDER BY Keyword</h2>
      <p>
        The ORDER BY keyword is used to sort the result-set in ascending or
        descending order.
      </p>
      <p>
        When you use ORDER BY with <b>several columns</b> in SQL, the rows are
        sorted first by the first column, and then by subsequent columns in the
        specified order if there are ties in the previous column(s).
        <ul>
          <li>
            Primary Sorting (First Column): The rows are sorted based on the
            first column in the ORDER BY clause.
          </li>
          <li>
            Secondary Sorting (Second Column): If two or more rows have the same
            value in the first column, they are sorted based on the second
            column.
          </li>
          <li>
            Tertiary Sorting (Third Column): If rows are still tied after the
            second column, they are sorted based on the third column, and so on.
          </li>
        </ul>
      </p>
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=text%2Fx-mysql&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=--%2520Get%2520shortest%2520%250ASELECT%2520%250A%2520%2520%2520%2520CITY%252C%2520LENGTH%28CITY%29%2520AS%2520name_length%250AFROM%2520%250A%2520%2520%2520%2520STATION%250AORDER%2520BY%2520%250A%2520%2520%2520%2520LENGTH%28CITY%29%2520ASC%252C%2520CITY%2520ASC%250ALIMIT%25201%253B%250A%2520%2520%2520%2520%250A--%2520Get%2520longest%250ASELECT%2520%250A%2520%2520%2520%2520CITY%252C%2520LENGTH%28CITY%29%2520AS%2520name_length%250AFROM%2520%250A%2520%2520%2520%2520STATION%250AORDER%2520BY%2520%250A%2520%2520%2520%2520LENGTH%28CITY%29%2520DESC%252C%2520CITY%2520ASC%250ALIMIT%25201%253B%250A%2520%2520%2520%2520"
        style={{
          width: "100%",
          height: "410px",
          border: 0,
          transform: "scale(1)",
          overflow: "hidden",
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
      <h2>LIKE</h2>
      <p>
        The LIKE operator is used to search for a specified pattern in a column.
      </p>
      <pre>
        <code className="language-sql">
          SELECT DISTINCT CITY FROM STATION WHERE CITY LIKE 'A%'
        </code>
      </pre>
      <h2>SUBSTRING</h2>
      <p>
        Extract a substring from a string (start at position 1, extract 3
        characters):
      </p>
      <code className="language-sql">SUBSTRING(string, start, length)</code>
      <br /> <br />
      <code className="language-sql">
        SELECT SUBSTRING("SQL Tutorial", 1, 3) AS ExtractString;
      </code>
      <h2>RIGHT</h2>
      <p>
        The RIGHT() function extracts a number of characters from a string
        (starting from right).
      </p>
      <code className="language-sql">RIGHT(string, length)</code>
      <br />
      <br />
      <code className="language-sql">
        SELECT RIGHT("SQL Tutorial is cool", 4) AS ExtractString;
      </code>
      <h2>LIMIT OFFSET</h2>
      <p>Retrieves a specific row based on its position in the sorted list.</p>
      <code className="language-sql">
        LIMIT 1 OFFSET FLOOR(COUNT(LAT_N) / 2))
      </code>
      <h2>WITH clause</h2>
      <p>
        The SQL WITH clause is used to define temporary tables or result sets
        within a query. These temporary relations (also called Common Table
        Expressions (CTEs)) can then be referenced in the main query multiple
        times, allowing for more readable and maintainable SQL code.{" "}
      </p>
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=text%2Fx-mysql&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=WITH%2520temporaryTable%2520AS%2520%28%250A%2520%2520%2520%2520SELECT%2520AVG%2520%28Attr1%29%2520AS%2520averageValue%250A%2520%2520%2520%2520FROM%2520Table%250A%29%250ASELECT%2520Attr1%250AFROM%2520Table%252C%2520temporaryTable%250AWHERE%2520Table.Attr1%2520%253E%2520temporaryTable.averageValue%253B"
        style={{
          width: "100%",
          height: "200px",
          border: 0,
          transform: "scale(1)",
          overflow: "hidden",
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
      <h2>HAVING clause</h2>
      <p>
        The HAVING clause was added to SQL because the WHERE keyword cannot be
        used with aggregate functions.
      </p>
      <pre>
        <code className="language-sql">
          SELECT column_name(s){"\n"}
          FROM table_name{"\n"}
          WHERE condition{"\n"}
          GROUP BY column_name(s){"\n"}
          HAVING condition{"\n"}
          ORDER BY column_name(s);
        </code>
      </pre>
    </>
  );
};

export default CheatSheet;

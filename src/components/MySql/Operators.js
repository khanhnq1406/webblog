import { useEffect } from "react";

const Operators = () => {
  useEffect(() => {
    window.Prism.highlightAll();
  }, []);
  return (
    <>
      <h2>What is SQL and Getting Started with MySQL</h2>
      <h3>What is SQL?</h3>
      <ul>
        <li>SQL stands for Structured Query Language</li>
        <li>SQL helps to access and manipulate your databases</li>
      </ul>
      <h3>Getting Started with MySQL</h3>
      <h4>Data tpyes in MySQL</h4>
      <p>
        A data types is an attribute that specifies the type of data that the
        object can hold: integer data, character data, monetary data, date and
        time data, binary strings, and so on
      </p>
      <img
        src="https://www.mysqltutorial.org/wp-content/uploads/2024/01/mysqldatatypes.jpg"
        alt=""
      />
      <img
        src="https://www.csestack.org/wp-content/uploads/2018/01/Difference-Between-CHAR-and-VARCHAR.png"
        alt=""
      />

      <h2>Types of Commands in MYSQL</h2>
      <h3>DDL (Data definition language)</h3>
      <ul>
        <li>Helps to define the database schema</li>
        <li>Deals with description of the database</li>
        <li>
          Also have power to deal with creating and modifying the structure of
          database object
        </li>
      </ul>
      <p>
        Commands:
        <ul>
          <li>
            CREATE - This command is used to create the database. It also have
            some objects like table, index, function, views, store procedure and
            triggers
          </li>
          <li>ALTER - This command is used to modify the existing database</li>
          <li>DROP - This command is used to delete the database</li>
          <li>
            TRUNCATE - This command is used to delete all the records from the
            table
          </li>
          <li>
            COMMENT - This command is used to add comments to the database
          </li>
          <li>
            RENAME - This is used to rename an object existing in the database
          </li>
        </ul>
      </p>

      <h4>Example</h4>
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=SHOW%2520databases%253B%250A%250ACREATE%2520DATABASE%2520demodatabase%253B%250A%250AUSE%2520demodatabase%253B%250A%250ADROP%2520DATABASE%2520demodatabase%253B%250A%250ACREATE%2520TABLE%2520student_table%28%250A%2520%2520%2520%2520student_id%2520INT%252C%250A%2520%2520%2520%2520student_name%2520VARCHAR%28100%29%252C%250A%2520%2520%2520%2520course_name%2520VARCHAR%2840%29%250A%29%253B%250A%250ADESCRIBE%2520student_table%253B%250A%250AALTER%2520TABLE%2520student_table%2520ADD%2520email%2520VARCHAR%28100%29%253B%250A%250ATRUNCATE%2520TABLE%2520student_table%253B"
        style={{
          width: "100%",
          height: "430px",
          border: 0,
          transform: "scale(1)",
          overflow: "hidden",
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>

      <h3>DML (Data Manipulation Language)</h3>
      <ul>
        <li>This DML command handles all the data manipulation part</li>
        <li>It includes most important parts of the SQL</li>
      </ul>
      <p>
        Command:
        <ul>
          <li>
            INSERT - This command is used to insert the data into the table
          </li>
          <li>UPDATE - This command is used to update the data in the table</li>
          <li>
            DELETE - This command is used to delete the data from the table
          </li>
        </ul>
      </p>
      <h4>Example</h4>

      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=sql&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=INSERT%2520INTO%2520student_table%2520%28student_id%252C%2520student_name%252C%2520course_name%252C%2520email%29%250AVALUES%2520%281%252C%2520%2522Khanh%2520Nguyen%2522%252C%2520%2522c1002%2522%252C%2520%2522khanh%2540gmail.com%2522%29%253B%250A%250AUPDATE%2520student_table%250ASET%2520student_name%2520%253D%2520%2522Khanh%2522%252C%2520course_name%2520%253D%2520%2522c1001%2522%250AWHERE%2520student_id%2520%253D%25201%253B%250A%250ADELETE%2520FROM%2520student_table%250AWHERE%2520student_id%2520%253D%25201%253B"
        style={{
          width: "100%",
          height: "250px",
          border: 0,
          transform: "scale(1)",
          overflow: "hidden",
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>

      <h3>DQL (Data Query Language)</h3>
      <ul>
        <li>DQL used to make queries on the data within schema objects</li>
        <li>
          The main focus of DQL Command is to get some schema relation based on
          the query passed into it
        </li>
        <li>
          SELECT: This command is use to retrieve all the data from the table
        </li>
      </ul>
      <h4>Example</h4>
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=sql&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=SELECT%2520student_id%2520FROM%2520student_table%253B%250A%250ASELECT%2520student_id%252C%2520email%2520FROM%2520student_table%253B%250A%250ASELECT%2520*%2520FROM%2520student_table%253B"
        style={{
          width: "100%",
          height: "180px",
          border: 0,
          transform: "scale(1)",
          overflow: "hidden",
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>

      <h3>DCL (Data Control Language)</h3>
      <ul>
        <li>Deals with the rights and permission of the database</li>
        <li>Works for the controlling part of the data</li>
        <li>GRANT: provide user's access privileges to database</li>
        <li>
          REVOKE: Helps to withdraw user's access privileges given by using the
          GRANT command
        </li>
      </ul>

      <h3>TCL (Transaction Control Language)</h3>
      <ul>
        <li>Deals with the transaction of the database</li>
        <li>COMMIT: commits a transaction</li>
        <li>ROLLBACK: rollbacks a transaction for any error occurs</li>
        <li>SAVEPOINT: use a save point within a transaction</li>
        <li>
          SET TRANSACTION: specify the characteristics for the transaction
        </li>
      </ul>

      <h2>Operators in My SQL</h2>
      <p>Operators are also combined with WHERE clause to filter data</p>
      <h3>AND operators</h3>
      <p>
        AND operator returns a records if all the condition are TRUE which are
        seperated by AND
      </p>
      <h3>OR operators</h3>
      <p>
        OR operator returns a records if any conditions are TRUE which are
        seperated by OR
      </p>

      <h3>NOT operators</h3>
      <p>NOT operator returns a records if conditions are not TRUE</p>

      <h3>IN operators</h3>
      <p>
        IN operator can contain multiple values in a WHERE clause. It is also
        used as short cart for multiple OR conditions
      </p>

      <h3>BETWEEN operators</h3>
      <p>
        BETWEEN operator helps to select values within a given range and those
        values can be numbers, text, or dates
      </p>

      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=sql&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=SELECT%2520*%2520FROM%2520student_table%253B%250A%250ASELECT%2520*%2520FROM%2520student_table%250AWHERE%2520course_name%2520%253D%2520%2522c1001%2522%253B%250A%250ASELECT%2520*%2520FROM%2520student_table%250AWHERE%2520student_id%2520%253D%25201%2520AND%2520course_name%2520%253D%2520%2522c1005%2522%253B%250A%250ASELECT%2520*%2520FROM%2520student_table%250AWHERE%2520student_id%2520%253D%25201%2520OR%2520course_name%2520%253D%2520%2522c1005%2522%253B%250A%250ASELECT%2520*%2520FROM%2520student_table%250AWHERE%2520NOT%2520student_name%2520%253D%2520%2522Khanh%2520Nguyen%2522%253B%250A%250ASELECT%2520*%2520FROM%2520student_table%250AWHERE%2520course_name%2520IN%2520%28%2522c1002%2522%252C%2520%2522c1005%2522%29%253B%250A%250ASELECT%2520*%2520FROM%2520student_table%250AWHERE%2520student_id%2520BETWEEN%25201%2520AND%25202%253B"
        style={{
          width: "100%",
          height: "430px",
          border: 0,
          transform: "scale(1)",
          overflow: "hidden",
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>

      <h2>Filter records in MySQL</h2>
      <p>WHERE clause is used to filter the record from the data</p>

      <h2>Pattern matching in MySQL</h2>
      <h3>LIKE</h3>
      <p>
        LIKE Operators are used with WHERE clause to find the pattern from the
        database
      </p>
      <p>Example</p>
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=SELECT%2520*%2520FROM%2520student_table%250AWHERE%2520email%2520LIKE%2520%27%2525k%2525%27%253B%250A%250ASELECT%2520*%2520FROM%2520student_table%250AWHERE%2520student_name%2520LIKE%2520%27%2525nguyen%2525%27%253B"
        style={{
          width: "100%",
          height: "167px",
          border: 0,
          transform: "scale(1)",
          overflow: "hidden",
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>

      <h2>Null values in MySQL</h2>
      <p>
        When you have a filed with null value then they will be a option for you
        to insert new record or update record without adding a value
      </p>
      <p>Example</p>
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=text%2Fx-mysql&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=SELECT%2520*%2520FROM%2520student_table%250AWHERE%2520email%2520is%2520null%253B"
        style={{
          width: "100%",
          height: "110px",
          border: 0,
          transform: "scale(1)",
          overflow: "hidden",
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </>
  );
};

export default Operators;

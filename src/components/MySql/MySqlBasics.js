const MySqlBasics = () => {
  return (
    <>
      <h2>Key concepts in relational database management system</h2>
      <img
        src="https://powerbidocs.com/wp-content/uploads/2019/12/SQL-Keys.png"
        alt=""
      />
      <h3>Types of Key in RDBMS</h3>
      <ul>
        <li>Primary Key</li>
        <li>Super Key</li>
        <li>Candidate Key</li>
        <li>Alternate Key</li>
        <li>Composite Key</li>
        <li>Foreign Key</li>
      </ul>
      <h3>Primary key</h3>
      <p>
        A primary key concept is basically a technique to classify unique tuples
        (rows) in a table
        <ul>
          <li>Primary key does not contain null value</li>
          <li>Value should be unique</li>
          <li>
            Primary keys are not always to be a single attribute/column and it
            can also be a set of more than one attributes/columns
          </li>
        </ul>
      </p>
      <h3>Super key</h3>
      <p>
        A super key is a set of one of more columns or attributes to uniquely
        classify rows in a table. For Example, STUD_NO, (STUD_NO, STUD_NAME),
        etc.
        <ul>
          <li>Super key is a superset of a candidate key</li>
        </ul>
      </p>
      <h3>Candidate key</h3>
      <p>
        The minimal set of attributes that can uniquely identify a tuple is
        known as a candidate key. For Example, STUD_NO in STUDENT relation.
      </p>
      <h3>Alternate key</h3>
      <p>
        The candidate key other than the primary key is called an alternate key
        .
        <ul>
          <li>Alternate key is also known as secondary key</li>
          <li>
            All the keys which are not primary keys are called alternate keys.
          </li>
        </ul>
      </p>
      <h3>Composite key</h3>
      <p>
        Sometimes, a table might not have a single column/attribute that
        uniquely identifies all the records of a table. To uniquely identify
        rows of a table, a combination of two or more columns/attributes can be
        used. It still can give duplicate values in rare cases. So, we need to
        find the optimal set of attributes that can uniquely identify rows in a
        table.
      </p>
      <p>
        For example: FULLNAME + DOB can be combined together to access the
        details of a student.
      </p>
      <h3>Foreign Key</h3>
      <p>
        If an attribute can only take the values which are present as values of
        some other attribute, it will be a foreign key to the attribute to which
        it refers. The relation which is being referenced is called referenced
        relation and the corresponding attribute is called referenced attribute.
        The referenced attribute of the referenced relation should be the
        primary key to it.
      </p>

      <h2>Normalization technique</h2>
      <h3>What is Normalization?</h3>
      <p>
        Normalization is the process of organzing data to avoid duplication and
        redundancy
        <ul>
          <li>Helps to minimize duplicate</li>
          <li>To minimize or avoid data modification issues</li>
          <li>To simplify queries</li>
        </ul>
      </p>
      <h3>Types of Normalization</h3>
      <ul>
        <li>1NF (First Normal Form)</li>
        <li>2NF (Second Normal Form)</li>
        <li>3NF (Third Normal Form)</li>
        <li>Boyce and Codd Normal Form (BCNF)</li>
      </ul>
      <h4>First Normal Form (1NF)</h4>
      <ul>
        <li>
          A relaion in which the intersection of each row and column contains
          <b>one and only one value.</b>
        </li>
        <li>
          This is the requirement of a relation: each cell of relation contains
          exactly one value.
        </li>
      </ul>
      <img
        alt=""
        src="https://cstaleem.com/wp-content/uploads/2021/03/First-Normal-Form-1NF.png"
      />
      <h4>Second Normal Form (2NF)</h4>
      <ul>
        <li>In the 2NF, relational must be in 1NF</li>
        <li>
          Every non-primary-key attribute is{" "}
          <b> fully functionally dependent</b> on the primary key.
        </li>
        <li>
          In other words, if there is any non-primary-key attribute is partially
          functionally dependent on the primary key, a relation not in 2NF.
        </li>
      </ul>
      <img
        alt=""
        src="https://lh4.googleusercontent.com/proxy/onZ61hN1PAoS4yTOFKWND5BaS8U3cB2wh4qiffwAVPooTmcYKnE2NeoOkP_y4C_5Fwsurl46jcqkRQ7bDkQbP618elHqOw"
      />
      <h4>Third Normal Form (3NF)</h4>
      <ul>
        <li>In the 3NF, relational must be in 2NF</li>
        <li>
          It does not contain any <b>transitive partial dependency</b>
        </li>
        <li>3NF helps to reduce the data duplication</li>
      </ul>
      <img
        src="https://ars.els-cdn.com/content/image/3-s2.0-B9780124114616000083-f08-17-9780124114616.jpg"
        alt=""
      ></img>
      <h4>Boyce and Codd Normal Form (BCNF)</h4>
      <ul>
        <li>BCNF is basically the advanced version of 3NF</li>
        <li>It is more strict than 3NF</li>
        <li>
          To use the law of BCNF we need to make sure that our data is already
          in 3NF
        </li>
      </ul>
    </>
  );
};

export default MySqlBasics;

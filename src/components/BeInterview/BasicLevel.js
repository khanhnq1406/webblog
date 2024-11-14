import { useEffect } from "react";

const BasicLevel = () => {
  useEffect(() => {
    window.Prism.highlightAll();
  }, []);

  return (
    <>
      <h2 id="1">1. Explain what an API endpoint is?</h2>
      <p>
        An API endpoint is a specific URL that acts as an entry point into a
        specific service or a functionality within a service.
      </p>
      <p>
        Through an API endpoint, client applications can interact with the
        server sending requests (sometimes even with data in the form of
        payload) and receive a response from it.
      </p>
      <p>
        Usually, each endpoint can be mapped to a single feature inside the
        server.
      </p>
      <p>
        For example, when an application calls the API at the URL
        "https://abc.com/foo/bar", /foo/bar is the endpoint.
      </p>

      {/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}

      <h2 id="2">
        2. Can you explain the difference between SQL and NoSQL databases?
      </h2>
      <p style={{ marginLeft: "1vw" }}>
        Source:{" "}
        <a href="https://www.geeksforgeeks.org/difference-between-sql-and-nosql/">
          Difference between SQL and NoSQL
        </a>
      </p>
      <h3>Main differences between NoSQL and SQL</h3>
      <h4>Type</h4>
      <p>
        SQL databases are primarily called Relational Databases (RDBMS); whereas
        NoSQL databases are primarily called non-relational or distributed
        databases.{" "}
      </p>

      <h4>Language</h4>
      <p>
        <mark>
          SQL databases define and manipulate data-based structured query
          language (SQL).
        </mark>
        Seeing from a side this language is extremely powerful. SQL is one of
        the most versatile and widely-used options available which makes it a
        safe choice, especially for great complex queries. But from another
        side, it can be restrictive. SQL requires you to use predefined schemas
        to determine the structure of your data before you work with it. Also,
        all of your data must follow the same structure. This can require
        significant up-front preparation which means that a change in the
        structure would be both difficult and disruptive to your whole system.
      </p>
      <p>
        <mark>
          A NoSQL database has a dynamic schema for unstructured data.
        </mark>{" "}
        Data is stored in many ways which means it can be{" "}
        <b>
          document-oriented, column-oriented, graph-based, or organized as a
          key-value store.
        </b>{" "}
        This flexibility means that documents can be created without having a
        defined structure first. Also, each document can have its own unique
        structure. The syntax varies from database to database, and you can add
        fields as you go.{" "}
      </p>

      <h4>Scalability</h4>
      <p>
        In almost all situations{" "}
        <mark>
          SQL databases are vertically scalable. This means that you can
          increase the load on a single server by increasing things like RAM,
          CPU, or SSD.
        </mark>{" "}
        But on the other hand,{" "}
        <mark>
          NoSQL databases are horizontally scalable. This means that you handle
          more traffic by sharing, or adding more servers in your NoSQL
          database.
        </mark>{" "}
        It is similar to adding more floors to the same building versus adding
        more buildings to the neighborhood. Thus NoSQL can ultimately become
        larger and more powerful, making these databases the preferred choice
        for large or ever-changing data sets.
      </p>

      <h4>Structure</h4>
      <p>
        <mark>SQL databases are table-based</mark> on the other hand{" "}
        <mark>
          NoSQL databases are either key-value pairs, document-based, graph
          databases, or wide-column stores.
        </mark>{" "}
        This makes relational SQL databases a better option for applications
        that require multi-row transactions such as an accounting system or for
        legacy systems that were built for a relational structure.{" "}
      </p>

      <h4>Property followed</h4>
      <p>
        SQL databases follow ACID properties (Atomicity, Consistency, Isolation,
        and Durability) whereas the NoSQL database follows the Brewers CAP
        theorem (Consistency, Availability, and Partition tolerance).{" "}
      </p>

      <h3>When To Use: SQL vs NoSQL</h3>
      <p>
        While NoSQL is good when the availability of big data is more crucial,
        SQL is valued for ensuring data validity.{" "}
      </p>

      <h3>Key Highlights on SQL vs NoSQL</h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table className="inline-block">
          <tr>
            <th>SQL</th>
            <th>NoSQL</th>
          </tr>
          <tr>
            <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
            <td>Non-relational or distributed database system.</td>
          </tr>
          <tr>
            <td>These databases have fixed or static or predefined schema</td>
            <td>They have a dynamic schema</td>
          </tr>
          <tr>
            <td>
              These databases are{" "}
              <mark style={{ backgroundColor: "var(--pastel-red)" }}>
                not suited for hierarchical data storage.
              </mark>{" "}
            </td>
            <td>
              These databases are{" "}
              <mark style={{ backgroundColor: "var(--pastel-green)" }}>
                best suited for hierarchical data storage.
              </mark>
            </td>
          </tr>
          <tr>
            <td>
              These databases are{" "}
              <mark style={{ backgroundColor: "var(--pastel-green)" }}>
                best suited for complex queries
              </mark>
            </td>
            <td>
              These databases are
              <mark style={{ backgroundColor: "var(--pastel-red)" }}>
                not so good for complex queries
              </mark>
            </td>
          </tr>
          <tr>
            <td>Vertically Scalable</td>
            <td>Horizontally scalable</td>
          </tr>
          <tr>
            <td>Follows ACID property</td>
            <td>Follows CAP(consistency, availability, partition tolerance)</td>
          </tr>
          <tr>
            <td>Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server, etc</td>
            <td>Examples: MongoDB, HBase, Neo4j, Cassandra, etc</td>
          </tr>
        </table>
      </div>

      {/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}

      <h2 id="3">
        3. What is a RESTful API, and what are its core principles?
      </h2>
      <p>
        Reference:{" "}
        <a href="https://www.redhat.com/en/topics/api/what-is-a-rest-api">
          What is a REST API?
        </a>
      </p>
      <p>
        A REST API is an application programming interface (API) that follows
        the design principles of the REST architectural style. REST is short for
        representational state transfer, and is a set of rules and guidelines
        about how you should build a web API.
      </p>
      <p>
        When a client request is made via a RESTful API, it transfers a
        representation of the state of the resource to the requester or
        endpoint. This information, or representation, is delivered in one of
        several formats via HTTP: JSON (Javascript Object Notation), HTML, XLT,
        Python, PHP, or plain text. JSON is the most generally popular file
        format to use because, despite its name, it’s language-agnostic, as well
        as readable by both humans and machines.{" "}
      </p>
      <p>
        Something else to keep in mind: Headers and parameters are also
        important in the HTTP methods of a RESTful API HTTP request, as they
        contain important identifier information as to the request's metadata,
        authorization, uniform resource identifier (URI), caching, cookies, and
        more. There are request headers and response headers, each with their
        own HTTP connection information and status codes.
      </p>
      <p>
        For an API to be RESTful (which means it complies with the REST
        guidelines), it needs to:
        <ul>
          <li>
            It needs to follow a client-server architecture (which all
            HTTP-based services do).
          </li>
          <li>
            It has to provide a uniform interface which means:
            <ul>
              <li>
                There should be a way to identify resources from each other
                through URIs (Unique Resource Identification).
              </li>
              <li>
                There should be a way to modify resources through their
                representation.
              </li>
              <li>
                Messages should be self descriptive, meaning that each message
                should provide enough information to understand how to process
                it.
              </li>
            </ul>
          </li>
          <li>
            It needs to be stateless, which means each request to the server
            must contain all information to process the request.
          </li>
          <li>
            It should be a layered system, meaning that client and server don't
            have to be connected directly to each other, there might be
            intermediaries, but that should not affect the communication between
            client and server.
          </li>
          <li>Resources should be cacheable either by client or by server.</li>
          <li>
            Optionally, the server could send code to the client for it to
            execute (known as "Code on Demand").
          </li>
        </ul>
      </p>
      <img
        src="https://cdn.prod.website-files.com/6407b983039e75f8fc39d439/6482a89d6590cb2cc5b84546_rest_api.png"
        alt=""
      />
      <img
        src="https://librarycarpentry.org/lc-fair-research/fig/rest-api.png"
        alt=""
      />

      {/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}

      <h2 id="4">4. Can you describe a typical HTTP request/response cycle?</h2>
      <p>
        The HTTP protocol is very structured and consists of a very well-defined
        set of steps:
        <ul>
          <li>
            <b>Open the connection.</b> The client opens a TCP connection to the
            server. The port will be port 80 for HTTP connections and 443 for
            HTTPS (secured) connections.
          </li>
          <li>
            <b>Send the request.</b> The client will now send the HTTP request
            to the server. The request contains the following information:
            <ul>
              <li>
                <li>
                  An{" "}
                  <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods">
                    HTTP method
                  </a>
                  . It can be any of them (i.e. GET, POST, PUT, DELETE, etc).
                </li>
                <li>
                  A URI (or Uniform Resource Identifier). This specifies the
                  location of the resources on the server.
                </li>
                <li>The HTTP version (usually HTTP/1.1 or HTTP/2).</li>
                <li>
                  A set of headers. They include extra data related to the
                  request; there is a{" "}
                  <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers">
                    full list of HTTP headers
                  </a>{" "}
                  that can be used here.
                </li>
                <li>
                  The optional body. Depending on the type of request, you'll
                  want to also send data, and the data is encoded inside the
                  body of the request.
                </li>
              </li>
            </ul>
          </li>
          <li>
            <b>Request processed by the server.</b> At this stage, the server
            will process the request and prepare a response.
          </li>
          <li>
            <b>Send the HTTP response back to the client.</b> Through the open
            channel, the server sends back an HTTP response. The response will
            contain the following elements:
            <ul>
              <li>The HTTP Version.</li>
              <li>
                The status code. There is a list of{" "}
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status">
                  potential status codes
                </a>{" "}
                that describe the result of the request.
              </li>
              <li>A set of headers with extra data.</li>
              <li>
                The optional body, just like with the request, the body of the
                response is optional.
              </li>
            </ul>
          </li>
          <li>
            <b>The connection is closed.</b> This is usually the last step,
            although with newer versions of the protocol, there are options to
            leave the channel open and continue sending requests and responses
            back and forth.
          </li>
        </ul>
      </p>
      <img
        alt=""
        src="https://cdn.hashnode.com/res/hashnode/image/upload/v1712395675541/bab13ff8-4f20-4def-9bc2-6aa4aad02b2f.png?auto=compress,format&format=webp"
      />

      {/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}

      <h2 id="5">How would you handle file uploads in a web application?</h2>
      <p>
        From a backend developer perspective, the following considerations
        should be taken into account when handling file uploads regardless of
        the programming language you're using:
        <ul>
          <li>
            <b>Perform server-side validations.</b> Validate that the size of
            your file is within range, and that the file is of the required
            type. You can check{" "}
            <a href="https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html">
              this OWASP guide
            </a>{" "}
            for more details.
          </li>
          <li>
            <b>Use secure channels.</b> Make sure the file upload is done
            through an HTTPS connection.
          </li>
          <li>
            <b>Avoid name collision.</b> Rename the file ensuring the new
            filename is unique within your system. Otherwise this can lead to
            application errors by not being able to save the uploaded files.
          </li>
          <li>
            <b>Keep metadata about your files.</b> Store it in your database or
            somewhere else, but make sure to keep track of it, so you can
            provide extra information to your users. Also, if you're renaming
            the files for security and to avoid name collisions, keep track of
            the original filename in case the file needs to be downloaded back
            by the user.
          </li>
        </ul>
      </p>
    </>
  );
};

export default BasicLevel;

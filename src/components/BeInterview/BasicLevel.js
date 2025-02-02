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

      {/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}

      <h2 id="6">
        6. What kind of tests would you write for a new API endpoint?
      </h2>
      <p>
        As backend developers, we have to think about the types of tests that
        there are out there.
        <ul>
          <li>
            <b>Unit tests:</b> Always remember to only test the relevant logic
            through the public interface of your code (avoid testing private
            methods or inaccessible functions inside your modules). Focus on the
            business logic and don't try to test the code that uses external
            services (like a database, the disk or anything outside of the piece
            of code you're testing).
          </li>
          <li>
            <b>Integration tests:</b> Test the full endpoint through its public
            interface (the actual HTTP endpoint) and see how it integrates with
            the external services it's using (i.e the database, another API,
            etc).
          </li>
          <li>
            <b>Load testing / performance testing:</b> You might want to also
            check how the new endpoint behaves under heavy stress. This might
            not be required depending on the API you're using, but as a rule of
            thumb, it's a good one to perform at the end of the development
            phase before releasing the new endpoint into prod.
          </li>
        </ul>
      </p>

      {/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}

      <h2 id="7">
        7. Describe how session management works in web applications
      </h2>
      <p>
        The following is a high-level overview of how session management works
        for web applications:
        <ul>
          <li>
            <b>The session is created.</b> This happens with the first
            interaction with the system by the user (during log-in). The backend
            of your app will create a unique session ID that will be stored and
            returned to the user to use in future requests.
          </li>
          <li>
            <b>Session information storage.</b> The session data needs to be
            stored somewhere. Whether it's in-memory, or inside a database, it
            needs to be indexed by the session ID from the previous point. Here
            the best option is to use a database (ideally something like Redis
            with high I/O performance) so that the services can be scaled
            independently from the session data.
          </li>
          <li>
            <b>The session ID is sent to the client.</b> The most common way of
            doing this is through cookies. The backend can set up a cookie with
            the session ID and the frontend can read it securely and use that ID
            however it needs to.
          </li>
          <li>
            <b>Client sends the session ID.</b> After the ID is created, the
            client application will identify itself with the backend using this
            ID on every request.
          </li>
          <li>
            <b>Accessing the session data in the backend.</b> The backend will
            access the stored session data using the session ID received from
            the client.
          </li>
          <li>
            <b>Session is closed.</b> After a while, or perhaps through a user
            action, the session ID will be deleted, which will cause the session
            data to be lost (or removed from the DB). This effectively ends the
            interactions between the client and the server as part of the
            existing session.
          </li>
        </ul>
      </p>
      <img
        alt=""
        src="https://hazelcast.com/wp-content/uploads/2021/12/diagram-Web-Sessions.png"
      />

      {/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}

      <h2 id="8">8. How do you approach API versioning in your projects?</h2>
      <h3>Definition</h3>
      <p>
        API versioning is the process of managing and tracking changes to an
        API. It also involves communicating those changes to the API's
        consumers.
      </p>
      <p>
        Change is a natural part of API development. Sometimes, developers have
        to update their API's code to fix security vulnerabilities, while other
        changes introduce new features or functionality. Some changes do not
        affect consumers at all, while others, which are known as “breaking
        changes,” lead to backward-compatibility issues, such as unexpected
        errors and data corruption. API versioning ensures that these changes
        are rolled out successfully in order to preserve consumer trust while
        keeping the API secure, bug-free, and highly performant.
      </p>
      <h3>Some types of API versioning</h3>
      <p>
        There are several ways in which you can handle API versioning, but the
        most common ones are:
        <ul>
          <li>
            <b>Keeping the version in the URL:</b> Either as a URL attribute
            (i.e /your-api/users?v=1) or as part of the URL (i.e
            /v1/your-api/users). In both situations the version is clearly
            visible to the developer using the API.
          </li>
          <li>
            <b>Using a custom header:</b> Another option is to have a custom
            header (such as api-version) where the developer must specify the
            version of your API they intend to use.
          </li>
        </ul>
      </p>
      <blockquote>
        For more details, visit{" "}
        <a href="https://www.postman.com/api-platform/api-versioning/">
          API versioning
        </a>
      </blockquote>

      {/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}

      <h2 id="9">9. How do you protect a server from SQL injection attacks?</h2>
      <p>
        There are many ways to protect your relational database from SQL
        injection attacks, but here are three very common ones.
        <ul>
          <li>
            <p style={{ marginLeft: 0 }}>
              <b>Prepared statements with parameterized queries.</b> This is
              probably the most effective way since it's done by a library or
              framework, and all you have to do is write your queries leaving
              placeholders for where the data is meant to go, and then, in a
              separate place, provide the actual data.
            </p>
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%252F%252F%2520NOT%253A%2520Vulnerable%2520query%2520to%2520insert%2520a%2520user%250Aconst%2520sql%2520%253D%2520%2560INSERT%2520INTO%2520users%2520%28name%252C%2520age%29%2520VALUES%2520%28%27%2524%257Bname%257D%27%252C%2520%2524%257Bage%257D%29%2560%253B%250A%250A%252F%252F%2520SHOULD%253A%2520Insert%2520a%2520user%2520with%2520parameterized%2520query%250Aconst%2520sql%2520%253D%2520%27INSERT%2520INTO%2520users%2520%28name%252C%2520age%29%2520VALUES%2520%28%253F%252C%2520%253F%29%27%253B%2520%252F%252F%2520Use%2520placeholders%250Aconst%2520params%2520%253D%2520%255Bname%252C%2520age%255D%253B%2520%252F%252F%2520Parameter%2520values%250A%250Aconnection.execute%28sql%252C%2520params%252C%2520%28err%252C%2520results%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%252F%252F%2520Code...%250A%257D%29%253B%250A"
              style={{
                width: "100%",
                height: "374px",
                border: 0,
                transform: "scale(1)",
                overflow: "hidden",
              }}
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </li>
          <li>
            <b>Use an ORM (Object-Relational Mapping).</b> These frameworks
            allow you to abstract the interaction with your database and create
            the SQL queries for you, taking into account all matters of security
            around that interaction.
            <img
              src="https://images.viblo.asia/bb7407cb-2161-42be-a5cc-6df6c69dab3f.png"
              alt=""
            />
          </li>
          <li>
            <b>Escaping data.</b> If you want to do this manually, you can take
            care of escaping special characters that might break how you
            construct your SQL queries. Keeping a list of blacklisted characters
            to escape in this situation is a good idea, so you can
            programmatically go through them.
          </li>
        </ul>
      </p>

      {/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}

      <h2 id="10">
        10. Explain the concept of statelessness in HTTP and how it impacts
        backend services
      </h2>
      <p>
        HTTP is, by design, a stateless protocol, which means that every request
        is unique and unrelated to any previous request, even from the same
        client.
      </p>
      <p>
        This affects backend web services by forcing them to implement their own
        state management solutions if such a feature is required.
      </p>
      <blockquote>
        For more details, visit{" "}
        <a href="https://dev.to/codexam/why-is-http-stateless-2m3p">
          Why is HTTP stateless?
        </a>
      </blockquote>

      {/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}

      <h2 id="11">
        11. What is containerization, and how does it benefit backend
        development?
      </h2>
      <p>
        It's a lightweight virtualization method to package applications and
        their dependencies, ensuring consistent environments across different
        systems.
      </p>
      <p>
        It's actually a benefit for backend development because it provides
        isolation and portability by simplifying deployment processes and
        reducing conflicts between software versions and configurations.
      </p>

      {/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}

      <h2 id="12">
        12. What measures would you take to secure a newly developed API?
      </h2>
      <p>
        There are many ways to secure an API, here are some of the most common
        ones:
        <ul>
          <li>
            Add an authentication method, such as OAuth, JWT, Bearer tokens,
            Session-based auth, and others.
          </li>
          <li>Use HTTPS to encrypt data transfer between client and server.</li>
          <li>Configure strong CORS policies to avoid unwanted requests.</li>
          <li>
            Setup a strong authorization logic, to ensure clients only access
            resources they have access to.
          </li>
        </ul>
      </p>

      {/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}

      <h2 id="13">
        13. How would you scale a backend application during a traffic surge?
      </h2>
      <p>
        The most common way to scale up a backend application during traffic
        surges is to have multiple instances of the application behind a load
        balancer, and when the traffic surge happens,{" "}
        <mark>simply add more instances of the application.</mark>
      </p>
      <p>
        This is known as horizontal scaling and works best when the backend
        application is stateless.
      </p>
      <img
        src="https://assets.roadmap.sh/guest/scale-backend-amf0h.png"
        alt=""
      />

      {/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}

      <h2 id="14">14. What is Load Balancing?</h2>
      <p style={{ marginLeft: "1vw" }}>
        Reference:{" "}
        <a href="https://aws.amazon.com/what-is/load-balancing/">
          What is Load Balancing?
        </a>
      </p>
      <h3>Definition</h3>
      <p>
        Load balancing is the method of distributing network traffic equally
        across a pool of resources that support an application.
      </p>
      <p>
        A load balancer is a device that sits between the user and the server
        group and acts as an invisible facilitator, ensuring that all resource
        servers are used equally.
      </p>
      <h3>What are load balancing algorithms?</h3>
      <p style={{ marginLeft: "2vw" }}>
        Reference:{" "}
        <a href="https://www.geeksforgeeks.org/load-balancing-algorithms/#1-static-load-balancing-algorithms">
          Load Balancing Algorithms
        </a>
      </p>
      <p>
        A load balancing algorithm is the set of rules that a load balancer
        follows to determine the best server for each of the different client
        requests. Load balancing algorithms fall into two main categories.
        <ul>
          <li>
            <b>Static load balancing algorithms</b> follow fixed rules and are
            independent of the current server state. The following are examples
            of static load balancing.
            <ul>
              <li>
                <b>Round Robin. </b> The Round Robin algorithm is a simple
                static load balancing approach in which requests are distributed
                across the servers in a sequential or rotational manner. It is
                easy to implement but it doesn't consider the load already on a
                server so there is a risk that one of the servers receives a lot
                of requests and becomes overloaded.
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20240130183312/Round-Robin-(1).webp"
                  alt=""
                ></img>
              </li>
              <li>
                <b>Weighted Round Robin.</b> The Weighted Round Robin algorithm
                is also a static load balancing approach which is much similar
                to the round-robin technique. The only difference is, that each
                of the resources in a list is provided a weighted score.
                Depending on the weighted score the request is distributed to
                these servers.{" "}
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20240130183429/Weighted-Round-Robin-(1).webp"
                  alt=""
                ></img>
              </li>
              <li>
                <b>Source IP Hash. </b>The Source IP Hash Load Balancing
                Algorithm is a method used in network load balancing to
                distribute incoming requests among a set of servers based on the
                hash value of the source IP address. This algorithm aims to
                ensure that requests originating from the same source IP address
                are consistently directed to the same server.
              </li>
            </ul>
          </li>

          <li>
            <b>Dynamic Load Balancing Algorithms. </b>Dynamic load balancing
            involves making real-time decisions about how to distribute incoming
            network traffic or computational workload across multiple servers or
            resources. This approach adapts to the changing conditions of the
            system, such as variations in server load, network traffic, or
            resource availability.
            <ul>
              <li>
                <b>Least Connection Method. </b>The Least Connections algorithm
                is a dynamic load balancing approach that assigns new requests
                to the server with the fewest active connections. The idea is to
                distribute incoming workloads in a way that minimizes the
                current load on each server, aiming for a balanced distribution
                of connections across all available resources.
                <img
                  alt=""
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20240130183529/Least-Connection-(1).webp"
                />
              </li>
              <li>
                <b>Weighted response time.</b> Averages the response time of
                each server, and combines that with the number of connections
                each server has open to determine where to send traffic. By
                sending traffic to the servers with the quickest response time,
                the algorithm ensures faster service for users.
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20240130183553/Least-Response-(2).webp"
                  alt=""
                />
              </li>
              <li>
                <b>Resource-based. </b>Distributes load based on what resources
                each server has available at the time. Specialized software
                (called an "agent") running on each server measures that
                server's available CPU and memory, and the load balancer queries
                the agent before distributing traffic to that server.
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20241111132131504562/resource-based-load-balancing-algorithm.webp"
                  alt=""
                ></img>
              </li>
            </ul>
          </li>
        </ul>
      </p>

      <h3>What are the types of load balancing?</h3>
      <p>
        We can classify load balancing into three main categories depending on
        what the load balancer checks in the client request to redirect the
        traffic.
        <ul>
          <li>Application load balancing</li>
          <li>Network load balancing</li>
          <li>Global server load balancing</li>
          <li>DNS load balancing</li>
        </ul>
      </p>

      <h3>What are the types of load balancing technology?</h3>
      <p>
        Load balancers are one of two types: hardware load balancer and software
        load balancer.
      </p>

      {/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}

      <h2 id="15">
        15. What tools and techniques do you use for debugging a backend
        application?
      </h2>

      <p>
        If the backend application being debugged is in the local dev machine, a
        simple solution would be to use the IDE itself. Most modern IDEs, such
        as IntelliJ, Eclipse and others have integrated debugging capabilities.
      </p>
      <p>
        If the backend application is on the server though, you’ll have to use
        other techniques, such as logging, which you can do with logging
        libraries. Or, you can use more complex tools such as JProfiler or
        NewRelic.
      </p>

      {/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}

      <h2 id="16">
        16. How do you ensure your backend code is maintainable and easy to
        understand?
      </h2>
      <p>
        The trick here is to follow best practices and coding standards such as:
        <ul>
          <li>Modularity.</li>
          <li>Following naming conventions.</li>
          <li>Adding code comments.</li>
          <li>Doing regular refactors to keep technical debt under check.</li>
          <li>
            Keeping error handling messages consistent throughout the platform.
          </li>
          <li>Performing unit tests on all written code.</li>
        </ul>
      </p>
    </>
  );
};

export default BasicLevel;

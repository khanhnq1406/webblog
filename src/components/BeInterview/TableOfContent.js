const TableOfContent = () => {
  return (
    <>
      <h1>Table of contents</h1>
      <ul className="toc">
        <li>
          <a href="#basic-level">Basic Level</a>
          <ul className="toc">
            <li>
              <a href="#1">1. Explain what an API endpoint is?</a>
            </li>
            <li>
              <a href="#2">
                2. Can you explain the difference between SQL and NoSQL
                databases?
              </a>
            </li>
            <li>
              <a href="#3">
                3. What is a RESTful API, and what are its core principles?
              </a>
            </li>
            <li>
              <a href="#4">
                4. Can you describe a typical HTTP request/response cycle?
              </a>
            </li>
            <li>
              <a href="#5">
                5. How would you handle file uploads in a web application?
              </a>
            </li>
            <li>
              <a href="#6">
                6. What kind of tests would you write for a new API endpoint?
              </a>
            </li>
            <li>
              <a href="#7">
                7. Describe how session management works in web applications
              </a>
            </li>
            <li>
              <a href="#8">
                8. How do you approach API versioning in your projects?
              </a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#intermediate-level">Intermediate Level</a>
          <ul className="toc"></ul>
        </li>

        <li>
          <a href="#intermediate-level">Advanced Level</a>
          <ul className="toc"></ul>
        </li>

        <li>
          <a href="#references">References</a>
        </li>
      </ul>
    </>
  );
};
export default TableOfContent;

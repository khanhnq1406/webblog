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
            <li>
              <a href="#9">
                9. How do you protect a server from SQL injection attacks?
              </a>
            </li>
            <li>
              <a href="#10">
                10. Explain the concept of statelessness in HTTP and how it
                impacts backend services
              </a>
            </li>
            <li>
              <a href="#11">
                11. What is containerization, and how does it benefit backend
                development?
              </a>
            </li>
            <li>
              <a href="#12">
                12. What measures would you take to secure a newly developed
                API?
              </a>
            </li>
            <li>
              <a href="#13">
                13. How would you scale a backend application during a traffic
                surge?
              </a>
            </li>
            <li>
              <a href="#14">14. What is Load Balancing?</a>
            </li>
            <li>
              <a href="#15">
                15. What tools and techniques do you use for debugging a backend
                application?
              </a>
            </li>
            <li>
              <a href="#16">
                16. How do you ensure your backend code is maintainable and easy
                to understand?
              </a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#intermediate-level">Intermediate Level</a>
          <ul className="toc">
            <li>
              <a href="#17">
                17. Describe how you would implement a full-text search in a
                database
              </a>
            </li>
            <li>
              <a href="#18">
                18. How would you approach batch processing in a data-heavy
                backend application?
              </a>
            </li>
            <li>
              <a href="#19">
                19. Can you explain the use and benefits of a message queue in a
                distributed system?
              </a>
            </li>
            <li>
              <a href="#20">
                20. What strategies would you use to manage database connections
                in a high-load scenario?
              </a>
            </li>
            <li>
              <a href="#21">
                21. How would you set up a continuous integration/continuous
                deployment (CI/CD) pipeline for backend services?
              </a>
            </li>
            <li>
              <a href="#22">
                22. Can you describe a distributed caching strategy for a
                high-availability application?
              </a>
            </li>
            <li>
              <a href="#23">
                23. What methods can you use for managing background tasks in
                your applications?
              </a>
            </li>
          </ul>
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

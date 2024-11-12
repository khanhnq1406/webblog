const TableOfContent = () => {
  return (
    <>
      <h1>Table of contents</h1>
      <ul className="toc">
        <li>
          <a href="#basic-level">Basic Level</a>
          <ul className="toc">
            <li>
              <a href="#1">1. Difference between id and class in HTML/CSS</a>
            </li>
            <li>
              <a href="#2">2. Box model in CSS</a>
            </li>
            <li>
              <a href="#3">3. inline vs inline-block vs block element</a>
            </li>
            <li>
              <a href="#4">4. SEO (Search Engine Optimization)</a>
            </li>
            <li>
              <a href="#5">5. DOM (Document Object Model)</a>
            </li>
            <li>
              <a href="#6">6. How to add an event listener to an element</a>
            </li>
            <li>
              <a href="#7">
                7. What is the difference between null and undefined?
              </a>
            </li>
            <li>
              <a href="#8">
                8. What is the difference between cookies, sessionStorage, and
                localStorage?
              </a>
            </li>
            <li>
              <a href="#9">9. How does the browser render a website?</a>
            </li>
            <li>
              <a href="#10">10. What are media queries?</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#intermediate-level">Intermediate Level</a>
          <ul className="toc">
            <li>
              <a href="#11">
                11. What is the difference between the em and rem units?
              </a>
            </li>
            <li>
              <a href="#12">12. How do you create a flexbox layout?</a>
            </li>
            <li>
              <a href="#13">
                13. Can you explain CSS specificity and how it works?
              </a>
            </li>
            <li>
              <a href="#14">14. How can you create a CSS grid layout?</a>
            </li>
            <li>
              <a href="#15">
                15. What are closures, and how/why would you use them?
              </a>
            </li>
            <li>
              <a href="#16">
                16. Can you explain what event delegation is in JavaScript?
              </a>
            </li>
            <li>
              <a href="#17">17. What are promises, and how do they work?</a>
            </li>
            <li>
              <a href="#18">
                18. How do you optimize website assets for better loading times?
              </a>
            </li>
            <li>
              <a href="#19">
                19. What are service workers, and what are they used for?
              </a>
            </li>
            <li href="#20">
              20. What is the Same-Origin Policy in web development?
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};
export default TableOfContent;

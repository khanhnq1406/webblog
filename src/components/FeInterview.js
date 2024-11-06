import "../css/FeInterview.css";
const FeInterview = () => {
  return (
    <div className="fe-interview">
      <h1 style={{ marginTop: 0 }}>Frontend Interview</h1>

      <h1>Table of contents</h1>
      <ul class="toc" role="list">
        <li>
          <a href="#basic-level">List of questions at Basic Level</a>
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
          </ul>
        </li>

        <li>
          <a href="#chapter2">
            <span class="title">Another sub-heading</span>
          </a>
        </li>
      </ul>

      <h1 id="basic-level">List of questions at Basic Level</h1>

      <h2 id="1">1. Difference between id and class in HTML/CSS</h2>
      <h3>Definition</h3>
      <p>
        The <b>id</b> attribute is a <b> unique identifier </b>that is used to
        specify the document. In CSS, the id attribute is written using the #
        symbol followed by id.
      </p>
      <p>
        The <b>class</b> attribute is used to specify
        <b> one or more class names </b>for an HTML element. The class attribute
        can be used on any HTML element. The class name in CSS stylesheet using
        “.” symbol.
      </p>
      <h3>In JavaScript</h3>
      <p>To uses document.getElementById() to access an element by id.</p>
      <p>
        To uses document.getElementsByClassName() to access elements by class.
      </p>
      <h3>In CSS</h3>
      <p>#id selects a specific element with that id.</p>
      <p>.class selects all elements with that class.</p>

      {/* ------------------------------------------------------ */}
      <h2 id="2">2. Box model in CSS</h2>
      <p>Content: The content of the box, where text and images appear</p>
      <p>
        Padding: Clears an area around the content. The padding is transparent
      </p>
      <p>Border: A border that goes around the padding and content</p>
      <p>
        Margin: Clears an area outside the border. The margin is transparent
      </p>
      <img
        alt=""
        src="https://miro.medium.com/v2/resize:fit:2560/1*nmdxvJbL2GI5NQSXCLOskA.png"
        style={{ maxWidth: "700px" }}
      />

      {/* ------------------------------------------------------ */}
      <h2 id="3">3. inline vs inline-block vs block element</h2>
      <table className="inline-block">
        <tr>
          <th></th>
          <th>Inline</th>
          <th>Inline-block</th>
          <th>Block</th>
        </tr>
        <tr>
          <th>Settable width and height</th>
          <td>
            <img alt="" src="/resources/no.png" />
          </td>
          <td>
            <img alt="" src="/resources/yes.png" />
          </td>
          <td>
            <img alt="" src="/resources/yes.png" />
          </td>
        </tr>
        <tr>
          <th>Start elements on a new line</th>
          <td>
            <img alt="" src="/resources/no.png" />
          </td>
          <td>
            <img alt="" src="/resources/no.png" />
          </td>
          <td>
            <img alt="" src="/resources/yes.png" />
          </td>
        </tr>
        <tr>
          <th>Occupy width</th>
          <td>Just the width it requiress</td>
          <td>Just the width it requiress</td>
          <td>The full width available</td>
        </tr>
      </table>
      <img
        alt=""
        src="https://cohesiondocs.acquia.com/sites/default/files/images/apply-styles/display-diagram-type-as-shape.svg"
        style={{ maxWidth: "700px", marginTop: "10px" }}
      />

      {/* ------------------------------------------------------ */}
      <h2 id="4">4. SEO (Search Engine Optimization)</h2>
    </div>
  );
};

export default FeInterview;

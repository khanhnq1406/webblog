import "../css/FeInterview.css";
const FeInterview = () => {
  return (
    <div className="fe-interview">
      <h1 style={{ marginTop: 0 }}>Frontend Interview</h1>
      <h1>List of questions at Basic Level</h1>
      <h2>Difference between id and class in HTML/CSS</h2>
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
    </div>
  );
};

export default FeInterview;

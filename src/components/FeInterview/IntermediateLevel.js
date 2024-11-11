import { useEffect } from "react";
import "./FeInterview.css";

const IntermediateLevel = () => {
  useEffect(() => {
    window.Prism.highlightAll();
  }, []);

  return (
    <>
      <h2 id="11">11. What is the difference between the em and rem units?</h2>
      <ol>
        <li>
          <b>"em"</b> units are relative to the font size of their parent
          element. So if the parent element has a font size of 20px, then
          setting a "2em" font size, would equal to 40px.
        </li>
        <li>
          <b>"rem"</b> units are "root em", which means they're relative to the
          web page's root element (the "{"<html>"}" element).
        </li>
      </ol>
      <img
        src="https://www.pc-koubou.jp/magazine/wp-content/uploads/2019/10/css_rem_image04.png"
        alt=""
      />

      {/* ------------------------------------------------------ */}

      <h2 id="12">12. How do you create a flexbox layout?</h2>
      <h3>Definition</h3>
      <p>
        The flexible box layout module (usually referred to as flexbox) is a
        one-dimensional layout model for distributing space between items and
        includes numerous alignment capabilities.
      </p>
      <h3>2 step to create a flexbox layout: </h3>
      <ol>
        <li>
          Set up the container element by applying the "display:flexbox" CSS
          property to it.
        </li>
        <li>
          Set up the flexbox properties for each element inside the container
          (something like "flex:1" would suffice).
        </li>
      </ol>
      <blockquote>
        For more information, visit{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox#the_two_axes_of_flexbox">
          Basic concepts of flexbox
        </a>
      </blockquote>

      {/* ------------------------------------------------------ */}

      <h2 id="13">13. Can you explain CSS specificity and how it works?</h2>
      <p>
        CSS specificity is used to determine which set of styles to apply on any
        given element when there are overlapping styles (like several rules
        setting the font-size of the same element).
      </p>
      <p>The way it works is by applying the following order of precedence:</p>
      <ol>
        <li>
          First, any <b>inline style</b> will override any other style.
          <br />
          <i style={{ fontSize: "14px" }}>
            *Inline styles are styles that are applied to a specific element
            within the body section of the webpage:
          </i>
          <code className="language-js">
            {"<p"} style="color: blue; font-size: 46px;"{">"}
          </code>
        </li>
        <li>
          Second, any <b>ID-based style</b> will override anything but inline
          styles.
        </li>
        <li>
          Third, <b>class-based</b> selectors will override anything but inline
          and ID-based styles.
        </li>
        <li>
          Finally, <b>type</b> selectors can be overridden by any other type of
          selectors. For example:
          <code className="language-js">
            a {"{"}
            color: red;
            {"}"}
          </code>
        </li>
      </ol>

      {/* ------------------------------------------------------ */}

      <h2 id="14">14. How can you create a CSS grid layout?</h2>

      <p>
        To create a grid layout, you have to first specify the{" "}
        <b>"display:grid" </b>
        property on the containing element, and then define the structure of the
        grid, by using the <b>"grid-template-rows"</b> and{" "}
        <b>"grid-template-columns"</b>
        properties.
        <br />
        <br />
        Now simply place the elements inside the grid container and specify the
        <b>"grid-column"</b> or <b>"grid-row"</b> properties.
      </p>

      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%252F*%2520Grid%2520container%2520*%252F%250A.grid-container%2520%257B%250A%2520%2520display%253A%2520grid%253B%250A%2520%2520grid-template-rows%253A%2520100px%2520100px%253B%250A%2520%2520grid-template-columns%253A%25201fr%25201fr%25201fr%253B%250A%2520%2520gap%253A%252010px%253B%2520%252F*%2520Adds%2520spacing%2520between%2520grid%2520items%2520*%252F%250A%2520%2520padding%253A%252020px%253B%250A%2520%2520background-color%253A%2520%2523f0f0f0%253B%250A%257D%250A%250A%252F*%2520Individual%2520grid%2520items%2520*%252F%250A.grid-item%2520%257B%250A%2520%2520background-color%253A%2520%25234CAF50%253B%250A%2520%2520color%253A%2520white%253B%250A%2520%2520display%253A%2520flex%253B%250A%2520%2520align-items%253A%2520center%253B%250A%2520%2520justify-content%253A%2520center%253B%250A%2520%2520font-size%253A%25201.2em%253B%250A%2520%2520padding%253A%252010px%253B%250A%257D%250A%250A%252F*%2520Place%2520items%2520in%2520specific%2520grid%2520cells%2520*%252F%250A.item1%2520%257B%250A%2520%2520grid-column%253A%25201%2520%252F%25203%253B%2520%252F*%2520Spans%2520from%2520column%25201%2520to%25202%2520*%252F%250A%2520%2520grid-row%253A%25201%253B%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F*%2520First%2520row%2520*%252F%250A%257D%250A%250A.item2%2520%257B%250A%2520%2520grid-column%253A%25203%253B%2520%2520%2520%2520%2520%2520%252F*%2520Third%2520column%2520*%252F%250A%2520%2520grid-row%253A%25201%253B%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F*%2520First%2520row%2520*%252F%250A%257D%250A%250A.item3%2520%257B%250A%2520%2520grid-column%253A%25201%253B%2520%2520%2520%2520%2520%2520%252F*%2520First%2520column%2520*%252F%250A%2520%2520grid-row%253A%25202%253B%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F*%2520Second%2520row%2520*%252F%250A%257D%250A%250A.item4%2520%257B%250A%2520%2520grid-column%253A%25202%253B%2520%2520%2520%2520%2520%2520%252F*%2520Second%2520column%2520*%252F%250A%2520%2520grid-row%253A%25202%253B%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F*%2520Second%2520row%2520*%252F%250A%257D%250A%250A.item5%2520%257B%250A%2520%2520grid-column%253A%25203%253B%2520%2520%2520%2520%2520%2520%252F*%2520Third%2520column%2520*%252F%250A%2520%2520grid-row%253A%25202%253B%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F*%2520Second%2520row%2520*%252F%250A%257D%250A%250A.item6%2520%257B%250A%2520%2520grid-column%253A%25201%2520%252F%25204%253B%2520%2520%252F*%2520Spans%2520across%2520all%2520columns%2520in%2520the%2520third%2520row%2520*%252F%250A%2520%2520grid-row%253A%25203%253B%250A%257D"
        style={{
          width: "100%",
          height: "1155px",
          border: 0,
          transform: "scale(1)",
          overflow: "hidden",
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>

      <div class="grid-container-example">
        <div class="grid-item item1">Item 1</div>
        <div class="grid-item item2">Item 2</div>
        <div class="grid-item item3">Item 3</div>
        <div class="grid-item item4">Item 4</div>
        <div class="grid-item item5">Item 5</div>
        <div class="grid-item item6">Item 6</div>
      </div>

      {/* ------------------------------------------------------ */}

      <h2 id="15">15. What are closures, and how/why would you use them?</h2>
      <p>
        When a function is defined within another function, it retains access to
        the variables and parameters of the outer function, even after the outer
        function has finished executing. That link, between the inner function
        and its scope inside the outer function is known as “closure”
      </p>
      <p>
        You can use them to create private variables that can only be accessed
        by the inner function, you can even use them to create complex objects
        with access to a rich context that is only available globally to them.
      </p>
    </>
  );
};

export default IntermediateLevel;

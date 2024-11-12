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
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6Ixyltr8_R0?si=rnVxJokwvfN1d25z"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      {/* ------------------------------------------------------ */}

      <h2 id="16">
        16. Can you explain what event delegation is in JavaScript?
      </h2>
      <p style={{ marginLeft: "2vw" }}>
        Source:{" "}
        <a href="https://www.greatfrontend.com/questions/quiz/explain-event-delegation">
          Explain event delegation in JavaScript
        </a>
      </p>
      <h3>Definition</h3>
      <p>
        Event delegation is a technique in JavaScript where a single event
        listener is attached to a parent element instead of attaching event
        listeners to multiple child elements. When an event occurs on a child
        element, the event bubbles up the DOM tree, and the parent element's
        event listener handles the event based on the target element.
      </p>
      <h3>Benefits</h3>
      <ul>
        <li>
          <b>Improved performance:</b> Attaching a single event listener is more
          efficient than attaching multiple event listeners to individual
          elements, especially for large or dynamic lists. This reduces memory
          usage and improves overall performance.
        </li>
        <li>
          <b>Simplified event handling:</b> With event delegation, you only need
          to write the event handling logic once in the parent element's event
          listener. This makes the code more maintainable and easier to update.
        </li>
        <li>
          <b>Dynamic element support:</b> Event delegation automatically handles
          events for dynamically added or removed elements within the parent
          element. There's no need to manually attach or remove event listeners
          when the DOM structure changes
        </li>
      </ul>
      <h3>However, do note that:</h3>
      <ul>
        <li>
          It is important to identify the target element that triggered the
          event.
        </li>
        <li>
          Not all events can be delegated because they are not bubbled.
          Non-bubbling events include: focus, blur, scroll, mouseenter,
          mouseleave, resize, etc.
        </li>
      </ul>
      <img
        alt=""
        src="https://assets.roadmap.sh/guest/event-delegation-explained-5e2vt.png"
      />

      {/* ------------------------------------------------------ */}

      <h2 id="17">17. What are promises, and how do they work?</h2>
      <p style={{ marginLeft: "2vw" }}>
        Source:{" "}
        <a href="https://www.freecodecamp.org/news/guide-to-javascript-promises/">
          How Promises Work in JavaScript - A Comprehensive Beginner's Guide
        </a>
      </p>
      <h3>Definition</h3>
      <p>
        A promise is an assurance or guarantee that something will happen in the
        future. A person can promise another person a specific outcome or
        result. Promises are not limited to individuals, governments and
        organizations can also make promises. You have probably made a promise
        before.
      </p>
      <p>
        With this assurance (promise) comes two possible outcomes-either
        fulfillment or failure. A promise is tied to an outcome that will show
        it is fulfilled. If that outcome does not happen, then the promise
        failed. A promise at the end must have one of these results.
      </p>
      <p>
        In JavaScript, a Promise is an <mark>object</mark> that will produce a
        single value some time in the future. If the{" "}
        <mark style={{ backgroundColor: "var(--pastel-green)" }}>
          promise is successful
        </mark>
        , it will{" "}
        <mark style={{ backgroundColor: "var(--pastel-green)" }}>
          produce a resolved value
        </mark>
        , but if something{" "}
        <mark style={{ backgroundColor: "var(--pastel-red)" }}>goes wrong</mark>{" "}
        then it will{" "}
        <mark style={{ backgroundColor: "var(--pastel-red)" }}>
          produce a reason
        </mark>{" "}
        why the promise failed. The possible outcomes here are similar to that
        of promises in real life.
      </p>
      <p>
        JavaScript promises can be in one of three possible states. These states
        indicate the progress of the promise. They are:
        <ul>
          <li>
            <b>pending:</b> This is the default state of a defined promise
          </li>
          <li>
            <b>fulfilled:</b> This is the state of a successful promise
          </li>
          <li>
            <b>rejected:</b> This is the state of a failed promise
          </li>
        </ul>
      </p>
      <img
        alt=""
        src="https://miro.medium.com/v2/resize:fit:1400/1*3S0Y1DQJe-NsUXHdNl8gHg.png"
      />
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520promise%2520%253D%2520new%2520Promise%28%28resolve%252C%2520reject%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520num%2520%253D%2520Math.random%28%29%253B%250A%2520%2520if%2520%28num%2520%253E%253D%25200.5%29%2520%257B%250A%2520%2520%2520%2520resolve%28%2522Promise%2520is%2520fulfilled%21%2522%29%253B%250A%2520%2520%257D%2520else%2520%257B%250A%2520%2520%2520%2520reject%28%2522Promise%2520failed%21%2522%29%253B%250A%2520%2520%257D%250A%257D%29%253B%250A%250Afunction%2520handleResolve%28value%29%2520%257B%250A%2520%2520console.log%28value%29%253B%250A%257D%250A%250Afunction%2520handleReject%28reason%29%2520%257B%250A%2520%2520console.error%28reason%29%253B%250A%257D%250A%250Apromise.then%28handleResolve%252C%2520handleReject%29%253B%250A%252F%252F%2520Promise%2520is%2520fulfilled%21%250A%252F%252F%2520or%250A%252F%252F%2520Promise%2520failed%21"
        style={{
          width: "100%",
          height: "560px",
          border: 0,
          transform: "scale(1)",
          overflow: "hidden",
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Xs1EMmBLpn4?si=g-_DfOrWQZe6LqFC"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      {/* ------------------------------------------------------ */}

      <h2 id="18">
        18. How do you optimize website assets for better loading times?
      </h2>
      <p>
        There are different techniques to improve loading times, depending on
        the asset type, for example:
        <ul>
          <li>CSS & JavaScript files should be minimized and compressed.</li>
          <li>
            Images can be compressed when you're saving them or through the use
            of specialized software, like JPEGOptim or ImageOptim. Just make
            sure you don't lose any quality during the process.
          </li>
        </ul>
      </p>

      {/* ------------------------------------------------------ */}

      <h2 id="19">19. What are service workers, and what are they used for?</h2>
      <p style={{ marginLeft: "2vw" }}>
        Source:{" "}
        <a href="https://medium.com/paypal-tech/intro-to-javascript-service-workers-43298c365549">
          Intro To JavaScript Service Workers
        </a>
      </p>
      <p>
        A Service Worker is a type of web worker that{" "}
        <mark>runs in the background</mark> of a web application,{" "}
        <mark>independent of the web page's main thread.</mark> They allow
        developers to build offline web applications, load faster, and provide a
        more reliable user experience. Service Workers are compatible with plain
        vanilla JavaScript applications, React, Angular, Svelte, Vue, etc.
      </p>
      <p>
        One of the key advantages of Service Workers is their ability to cache
        assets like HTML, CSS, JavaScript, images, and other files, which can
        improve the performance of a web application. By caching these assets,
        Service Workers can reduce the number of requests made to the server and
        enable faster page loads, especially when the user is on a slow or
        unreliable network.
      </p>
      <p>
        In addition to caching, Service Workers can also handle push
        notifications, synchronize data in the background, and provide an
        offline fallback experience. They can also intercept and modify network
        requests, making it possible to implement advanced caching strategies
        and optimize content delivery.
      </p>
      <p>
        Web applications can become more responsive and reliable by using
        Service Workers, even in challenging network conditions. They can also
        provide a seamless experience to users, regardless of whether they are
        online or offline, which can lead to higher user engagement and
        satisfaction.
      </p>

      {/* ------------------------------------------------------ */}

      <h2 id="20">20. What is the Same-Origin Policy in web development?</h2>
      <h3>Definition</h3>
      <p>
        The same-origin policy is a security feature in browsers designed to
        prevent a web site from accessing data (like importing a script, or
        sending a request to an API) from another site.
      </p>
      <p>
        This policy helps protect users from malicious scripts that try to steal
        sensitive data from other websites, such as cookies, local storage, or
        content
      </p>

      <h4>Definition of an origin</h4>
      <p>
        Two URLs have the same origin if the protocol, port (if specified), and
        host are the same for both.{" "}
      </p>
      <h3>Cross-Origin Resource Sharing</h3>
      <p>
        A way to overcome this limitation is through CORS (Cross-Origin Resource
        Sharing). As long as the server specifies which domain it can receive
        requests from, and the client app sends the right headers, they will be
        able to interact with each other, even if they're not in the same
        domain.
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/4KHiSt0oLJ0?si=nnHblT6dadkqHbn5"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};

export default IntermediateLevel;

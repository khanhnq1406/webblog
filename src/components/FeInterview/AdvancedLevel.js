const AdvancedLevel = () => {
  return (
    <>
      <h2 id="21">21. What are CSS variables, and when would you use them?</h2>
      <p>
        Just like variables in programming languages, CSS variables can be set
        by developers and reused across the entire CSS stylesheets. They're
        great for centralizing global values that are used throughout the web
        site's code.
      </p>
      <p>
        To create a variable with global scope, declare it inside the :root
        selector. The :root selector matches the document's root element.
      </p>
      <p>
        To create a variable with local scope, declare it inside the selector
        that is going to use it.
      </p>
      <p>For example:</p>
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=css&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Aroot%2520%257B%250A%2520%2520--blue%253A%2520%25231e90ff%253B%250A%2520%2520--white%253A%2520%2523ffffff%253B%250A%257D%250A%250Abody%2520%257B%2520background-color%253A%2520var%28--blue%29%253B%2520%257D"
        style={{
          width: "100%",
          height: "281px",
          border: 0,
          transform: "scale(1)",
          overflow: "hidden",
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>

      {/* ------------------------------------------------------ */}

      <h2 id="22">
        22. How would you implement critical CSS to improve the perceived load
        time of your web pages?
      </h2>
      <p>
        Remove the CSS rules from the CSS files and inline them into the main "
        {"<"}head{">"}" element of your website.
      </p>
      <p>
        By doing it like this, you remove the loading time of that code, as it
        loads immediately once the main file loads. The rest, the non-critical
        rules, can be loaded once the main resource loads (the main CSS file).
      </p>

      {/* ------------------------------------------------------ */}

      <h2 id="23">23. How does the event loop work in JavaScript?</h2>
      <p>
        The event loop is a core concept in JavaScript, and it allows for the
        execution of asynchronous code.
      </p>
      <p>
        The way it works, is as follows:
        <ol>
          <li>
            <b>Call Stack:</b> JavaScript executes your code on a single thread
            using a call stack, where function calls are added and executed one
            by one. When a function ends, it's removed from the stack.
          </li>
          <li>
            <b>Async calls:</b> For asynchronous operations, JavaScript uses Web
            APIs provided by the browser. These operations are offloaded from
            the call stack and handled separately.
          </li>
          <li>
            <b>Tasks Queue:</b> Once an asynchronous call is done, its callback
            is placed in the task queue.
          </li>
          <li>
            <b>Event Loop:</b> The event loop constantly checks the call stack
            and the task queue. If the call stack is empty, it takes the first
            task from the queue and pushes it onto the call stack for execution.
            This cycle repeats indefinitely.
          </li>
        </ol>
      </p>

      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520foo%2520%253D%2520%28%29%2520%253D%253E%2520console.log%28%2522First%2522%29%253B%250Aconst%2520bar%2520%253D%2520%28%29%2520%253D%253E%2520setTimeout%28%28%29%2520%253D%253E%2520console.log%28%2522Second%2522%29%252C%2520500%29%253B%250Aconst%2520baz%2520%253D%2520%28%29%2520%253D%253E%2520console.log%28%2522Third%2522%29%253B%250A%250Abar%28%29%253B%250Afoo%28%29%253B%250Abaz%28%29%253B"
        style={{
          width: "100%",
          height: "299px",
          border: 0,
          transform: "scale(1)",
          overflow: "hidden",
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
      <img
        alt=""
        src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*7coLKNPemPd9o40PmUvuvQ.gif"
      />
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/eiC58R16hb8?si=RVd4mRlfILy2nRZX"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      {/* ------------------------------------------------------ */}

      <h2 id="24">
        24. What are the different ways to handle asynchronous operations in
        JavaScript?
      </h2>
      <p>
        There are 4 main ways in which JavaScript allows developers to handle
        asynchronous calls. In the end, the result is always the same, but the
        final structure of the code and the way to reason about it is
        considerably different.
        <ul>
          <li>
            <b>Callbacks. </b>They allow you to set up a function to be called
            directly once the asynchronous operation is done.
          </li>
          <li>
            <b>Promises. </b>Promises represent the eventual completion of an
            asynchronous operation, and they provide a simpler and more
            intuitive syntax to specify callbacks to be called on success and
            failure of the operation.
          </li>
          <li>
            <b>Async/Await.</b> The final evolution of the promises syntax. It's
            mainly syntactic sugar, but it makes asynchronous code look
            synchronous, which in turn makes it a lot easier to read and reason
            about.
          </li>
          <li>
            <b>Event listeners.</b> Event listeners are callbacks that get
            triggered when specific events are fired (usually due to user
            interactions).
          </li>
        </ul>
      </p>

      {/* ------------------------------------------------------ */}

      <h2 id="25">
        25. How do you handle state management in single-page applications?
      </h2>
      <p>
        Without a full framework or library like React or Vue.js, properly
        handling state management is not a trivial task.
      </p>
      <p>
        Some options available through the language itself are:
        <ul>
          <li>
            <b>Global Variables: </b>You can use global variables, or perhaps a
            global object to centralize state. The problem with this approach is
            that it can become quite unmanageable for large applications. It's
            also a lot harder to maintain local state inside single components.
          </li>
          <li>
            <b>Module Pattern: </b>You can use this pattern to encapsulate state
            and provide a clear API to manage it. You would have to instantiate
            local instances of these modules for individual components.
          </li>
          <li>
            <b>Pub/Sub Pattern:</b> This option is more sophisticated, and it
            decouples state changes using event-driven architecture. It's a more
            complex solution, but it provides a bigger flexibility.
          </li>
          <li>
            <b>State Management Libraries:</b> You can always use something like
            Redux or similar libraries without frameworks.
          </li>
        </ul>
      </p>

      {/* ------------------------------------------------------ */}

      <h2 id="26">
        26. How does virtual DOM work, and what are its advantages?
      </h2>
      <img
        src="https://assets.roadmap.sh/guest/virtual-dom-example-7ynkg.png"
        alt=""
      />
      <p>
        The way the virtual DOM works is the following:
        <ol>
          <li>
            The entire user interface is copied into an in-memory structure
            called “virtual DOM”, which is a lightweight version of the actual
            DOM.
          </li>
          <li>
            When state changes and the UI needs to be updated, a new virtual DOM
            is created with the updated state.
          </li>
          <li>
            Then a diff is made between the new virtual DOM and the previous
            version.
          </li>
          <li>
            The system will then calculate the least amount of changes required
            to achieve the new state, and it'll apply those changes. Only the
            nodes that need to be updated are touched, which minimizes direct
            manipulation of the real DOM.
          </li>
        </ol>
      </p>
      <p>
        As for advantages:
        <ul>
          <li>
            <b>Performance optimization:</b> By only updating specific nodes
            within the real DOM, this technique reduces the number of updates,
            reflows and repaints on the UI. Directly affecting the performance
            of the app.
          </li>
          <li>
            <b>Cross-platform:</b> The virtual DOM provides a layer of
            abstraction between the application and the actual API that renders
            the UI. This means the app can be ported into other platforms as
            long as there is a virtual DOM implementation for that platform.
          </li>
          <li>
            <b>Consistency:</b> This technique keeps the UI in sync with the
            internal state, reducing bugs and inconsistencies.
          </li>
        </ul>
      </p>

      {/* ------------------------------------------------------ */}

      <h2 id="27">
        27. What is server-side rendering, and when might you use it?
      </h2>
      <p>
        Server-side rendering (SSR) is a technique in which a web server
        generates the HTML content of a web page and sends it to the client
        (usually a web browser) as a fully rendered document. This is the
        opposite of what naturally happens with client-side rendering (CSR),
        where the browser downloads a minimal HTML page and then uses JavaScript
        to render the content dynamically.
      </p>
      <p>
        There are several ideal use cases for SSR:
        <ul>
          <li>
            <b>Content-rich websites.</b> For example, news sites, blogs, etc.
          </li>
          <li>
            <b>SEO-heavy applications.</b> When the success of the web app
            relies on SEO, this approach can greatly improve the performance of
            the site (and because of that, the SEO performance).
          </li>
          <li>
            <b>Progressive web applications.</b> When the application needs to
            render fast to provide a fast and performance user experience, the
            application can initially be rendered on the server, and then
            hydrated on the client for subsequent integrations.
          </li>
        </ul>
      </p>

      {/* ------------------------------------------------------ */}

      <h2 id="28">
        28. How do you analyze and improve the performance of a web application?
      </h2>
      <p>
        The main set of metrics to monitor for web apps are:
        <ol>
          <li>
            <b>First Contentful Paint (FCP):</b> Time until the first piece of
            content is rendered.
          </li>
          <li>
            <b>Largest Contentful Paint (LCP):</b> Time until the largest
            content element is rendered.
          </li>
          <li>
            <b>Time to Interactive (TTI):</b> Time until the page is fully
            interactive.
          </li>
          <li>
            <b>Total Blocking Time (TBT):</b> Total time during which the main
            thread is blocked.
          </li>
          <li>
            <b>Cumulative Layout Shift (CLS):</b> Measures visual stability.
          </li>
        </ol>
      </p>

      {/* ------------------------------------------------------ */}

      <h2 id="29">
        What is Content Security Policy (CSP), and how does it improve the
        security of web applications?
      </h2>
      <p>
        Content Security Policy (CSP) is a security standard that helps to avoid
        cross-site scripting (XSS) attacks and other code injection attacks by
        defining and enforcing a whitelist of approved sources, such as scripts,
        stylesheets, images, and other resources.
      </p>
      <p>
        The main benefits are:
        <ul>
          <li>
            <b>Better Security:</b> CSP helps protect websites and web apps
            against various types of attacks, including XSS and data injection.
          </li>
          <li>
            <b>More Control:</b> Developers can define fine-grained policies to
            control the sources from which content can be loaded.
          </li>
          <li>
            <b>Improved Compliance:</b> Helps meet security compliance
            requirements, such as those outlined in OWASP Top 10.
          </li>
        </ul>
      </p>

      {/* ------------------------------------------------------ */}

      <h2 id="30">
        30. What is tree shaking, and how does it help with the performance of a
        web application?
      </h2>
      <p>
        Tree shaking is a technique used in JavaScript module bundlers, like
        Webpack or Vite, to remove unused code from the final bundled output.
      </p>
      <p>
        Main benefits include:
        <ol>
          <li>
            <b>Reduced Bundle Size:</b> Removing unused code reduces the size of
            the JavaScript bundle sent to the client, improving load times and
            reducing bandwidth usage.
          </li>
          <li>
            <b>Improved Performance:</b> Smaller bundle sizes can lead to faster
            parsing and execution times, resulting in improved performance and
            responsiveness of the web application.
          </li>
          <li>
            <b>Better Resource Utilization:</b> Developers can write modular
            code without worrying about unused dependencies bloating the final
            bundle size.
          </li>
        </ol>
      </p>
    </>
  );
};

export default AdvancedLevel;

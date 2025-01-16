import "./ReactRoadMap.css";
export const Components = () => {
  return (
    <div>
      <h1 id="functional-components">Functional Components</h1>
      <h2 id="jsx">JSX</h2>
      <p>
        JSX stands for JavaScript XML. <br />
        JSX allows us to write HTML in React. <br />
        JSX makes it easier to write and add HTML in React.
      </p>
      <p>
        The Web has been built on HTML, CSS, and JavaScript. For many years, web
        developers kept content in HTML, design in CSS, and logic in
        JavaScript—often in separate files! Content was marked up inside HTML
        while the page’s logic lived separately in JavaScript:
      </p>
      <p>
        But as the Web became more interactive, logic increasingly determined
        content. JavaScript was in charge of the HTML! This is why in React,
        rendering logic and markup live together in the same place—components.
      </p>
      <h2 id="state">State</h2>
      <p>
        Components often need to change what’s on the screen as a result of an
        interaction. Typing into the form should update the input field,
        clicking “next” on an image carousel should change which image is
        displayed, clicking “buy” should put a product in the shopping cart.
        Components need to “remember” things: the current input value, the
        current image, the shopping cart. In React, this kind of
        component-specific memory is called state.
      </p>
      <h3>When a regular variable isn’t enough</h3>
      <div>
        <ul className="list-disc">
          <li>
            <b>Local variables don’t persist between renders.</b> When React
            renders this component a second time, it renders it from scratch—it
            doesn’t consider any changes to the local variables.
          </li>
          <li>
            <b>Changes to local variables won’t trigger renders.</b> React
            doesn’t realize it needs to render the component again with the new
            data.
          </li>
        </ul>
      </div>
      <h4>State is isolated and private</h4>
      <h2 id="props">Props</h2>
      <div className="grid grid-cols-2 items-center">
        <div>
          <div>
            React props - where you can pass data from one component to another
            in React - by defining custom HTML attributes to which you assign
            your data with JSX's syntax
          </div>
          <div>
            It's also important to note that React's props are{" "}
            <b>read only (immutable)</b>. As a developer, you should never
            mutate props but only read them in your components. You can derive
            new values from them though (see computed properties later). After
            all, props are only used to pass data from a parent to a child
            component React. Essentially props are just the vehicle to transport
            data down the component tree.
          </div>
        </div>
        <img src="https://dmitripavlutin.com/react-props/cover.png" alt="" />
      </div>
      <div className="m-5">
        <img
          src="https://bosctechlabs.com/wp-content/uploads/2022/06/React-Data-Flow.png"
          alt="React Data Flow"
        />
      </div>
      <h3>Lift state in React</h3>
      <p>There is no way to pass props from a child to a parent component.</p>
      <p>
        The important ingredient: the App component passes down a function in
        the props to the Button component.{" "}
        <b>
          The function, named callback handler in React (because it is passed
          from component to component via props and calls back to the origin
          component)
        </b>
        , is used for the click handler in the Button component.
      </p>
      <p>
        Above in the App component, the state is changed when the passed
        function is called, and therefore the parent component and all its child
        components re-render.
      </p>
      <h3>React's children prop</h3>
      <p>
        The children prop in React can be used for composing React components
        into each other.
      </p>
      <img
        src="https://miro.medium.com/v2/resize:fit:1400/1*IxsmOhlqRgxrxEeDP6yU9w.png"
        alt=""
      />
      <h2 id="conditional-rendering">Conditional Rendering</h2>
      <p>
        Your component will often need to display different things depending on
        different conditions. In React, you can conditionally render JSX using
        JavaScript syntax like if statements, &&, and ?: operators.
      </p>
      <p>You can return a JSX expression conditionally with an if statement.</p>
      <p>
        In JSX, {"{cond ? <A /> : <B />}"} means “if cond, render {"<A />"},
        otherwise {"<B />"}
        ”.
      </p>
      <p>
        In JSX,{" {cond && <A />}"} means “if cond, render {"<A />"}, otherwise
        nothing”.
      </p>
      <h2 id="composition">Composition vs Inheritance</h2>
      <h3>Definition</h3>
      <p>
        Component composition in React involves combining smaller, independent
        components to create complex UIs. Each sub-component can contain further
        components, enhancing code readability. This process breaks down the UI
        into manageable pieces, aiding traceability, scalability, and
        maintenance. Component composition facilitates easier debugging and
        isolated changes, making web development more efficient and
        maintainable.
      </p>
      <p>
        You have seen how component composition is mainly used for reusable
        React components that require a well-designed API. Often you will find
        this kind of component composition just to layout your application as
        well.
      </p>
      <h3>How can composition help performance?</h3>
      <ul className="list-disc">
        <li>
          <b>Code Reusability:</b> Composition allows you to create small,
          focused, and reusable components or modules. By reusing existing code
          in various parts of your application, you reduce redundancy and
          maintain a more efficient codebase.
        </li>
        <li>
          <b>Modularity:</b> Composing applications from smaller, independent
          modules makes it easier to understand, test, and maintain code. This
          modularity can result in faster development cycles and quicker
          debugging processes.
        </li>
        <li>
          <b>Optimized Code Loading:</b> In scenarios like lazy loading{" "}
          <i>
            (Instead of loading an entire webpage all at once, lazy loading
            loads only the parts that are immediately necessary.)
          </i>{" "}
          or dynamic imports, composition allows loading only the components
          needed for a particular feature. This can significantly reduce initial
          page load times, improving the overall performance of your
          application.
        </li>
        <li>
          <b>Parallel Development:</b> When different teams or developers work
          on independent components, they can progress simultaneously without
          interfering with each other's work. This parallel development approach
          speeds up the overall development lifecycle.
        </li>
      </ul>
    </div>
  );
};

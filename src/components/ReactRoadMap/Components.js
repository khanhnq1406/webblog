import "./ReactRoadMap.css";
export const Components = () => {
  return (
    <div>
      <h1 id="functional-components">Functional Components</h1>
      <h2 id="components">Components</h2>
      <h3>Creating and nesting components</h3>
      <p>
        React apps are made out of components. A component is a piece of the UI
        (user interface) that has its own logic and appearance. A component can
        be as small as a button, or as large as an entire page.
      </p>
      <h3>React Component Types</h3>
      <h4>React createClass</h4>
      <p>
        React initially relied on createClass (deprecated) for defining
        components as a factory function to create React Class Components
        without needing a JavaScript class. This approach was the standard for
        building React components before the introduction of JavaScript ES6 in
        2015, because JavaScript ES5 lacked the native class syntax
      </p>
      <h4>React Mixins (Pattern)</h4>
      <p>
        React Mixins (deprecated) got introduced as React's first pattern for
        reusable component logic. With a Mixin in React, it was possible to
        extract logic from a React component as a standalone object. When using
        a Mixin in a component, all features from the Mixin are introduced to
        the component
      </p>
      <h4>React Class Components</h4>
      <p>
        React Class Components (not recommended) were introduced in version
        0.13, which was released in March 2015. Prior to this, developers used
        the createClass function to define components, but eventually React
        deprecated createClass in version 15.5 (April 2017) and recommended
        using Class Components instead. Class Components were introduced as a
        way to utilize native JavaScript classes (due to the ES6 release in
        2015), because JS classes were made available to the language
      </p>
      <h4>React Higher-Order Components (Pattern)</h4>
      <p>
        React Higher-Order Components (HOCs) (not recommended anymore) have been
        a popular advanced React pattern for reusable logic across React
        components.
      </p>
      <h4>React Function Components</h4>
      <p>
        React Function Components (FC) (sometimes called Functional Components)
        are used as replacement for React Class Components. They are expressed
        as functions instead of classes. In the past, it wasn't possible to use
        state or side-effects in FCs, that's why they were also called
        Functional Stateless Components, but that's not the case anymore with
        React Hooks which re-branded them to Function Components.
      </p>
      <h4>React Server Components</h4>
      <p>
        React's most recent addition (2023) are React Server Components (RSC)
        which allow developers to execute components on the server. Main
        benefits: only HTML is sent to the client and the component is allowed
        to access server-side resources. Because Server Components execute on
        the server, it's not possible to show a one to one comparison with the
        previous examples, because they serve a different use case.
      </p>
      <h4>Async Components</h4>
      <p>
        Currently, Async Components are only supported for Server Components,
        but they are expected to be supported for Client Components in the
        future. If a component is marked as async, it can perform asynchronous
        operations (e.g. fetching data).
      </p>
      <h3>React Elements vs Components</h3>
      <p>
        While a React Component is the one time declaration of a component, it
        can be used once or multiple times as React Element in JSX. In JSX it
        can be used with angle brackets, however, under the hood React's
        createElement method kicks in to create React elements as JavaScript
        object for each HTML element.
      </p>
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

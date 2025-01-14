import "./ReactRoadMap.css";
export const Components = () => {
  return (
    <div>
      <h1>Functional Components</h1>
      <h2>JSX</h2>
      <div>
        JSX stands for JavaScript XML. <br />
        JSX allows us to write HTML in React. <br />
        JSX makes it easier to write and add HTML in React.
      </div>
      <div>
        The Web has been built on HTML, CSS, and JavaScript. For many years, web
        developers kept content in HTML, design in CSS, and logic in
        JavaScript—often in separate files! Content was marked up inside HTML
        while the page’s logic lived separately in JavaScript:
      </div>
      <div>
        But as the Web became more interactive, logic increasingly determined
        content. JavaScript was in charge of the HTML! This is why in React,
        rendering logic and markup live together in the same place—components.
      </div>
      <h2>State</h2>
      <div>
        Components often need to change what’s on the screen as a result of an
        interaction. Typing into the form should update the input field,
        clicking “next” on an image carousel should change which image is
        displayed, clicking “buy” should put a product in the shopping cart.
        Components need to “remember” things: the current input value, the
        current image, the shopping cart. In React, this kind of
        component-specific memory is called state.
      </div>
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
      <h2>Props</h2>
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
      <div>
        There is no way to pass props from a child to a parent component.
      </div>
      <div>
        The important ingredient: the App component passes down a function in
        the props to the Button component.{" "}
        <b>
          The function, named callback handler in React (because it is passed
          from component to component via props and calls back to the origin
          component)
        </b>
        , is used for the click handler in the Button component.
      </div>
      <div>
        Above in the App component, the state is changed when the passed
        function is called, and therefore the parent component and all its child
        components re-render.
      </div>
      <h3>React's children prop</h3>
      <div>
        The children prop in React can be used for composing React components
        into each other.
      </div>
      <img
        src="https://miro.medium.com/v2/resize:fit:1400/1*IxsmOhlqRgxrxEeDP6yU9w.png"
        alt=""
      />
    </div>
  );
};

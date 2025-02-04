export const Rendering = () => {
  return (
    <div>
      <h1 id="rendering">Rendering</h1>
      <h2 id="render-and-commit">Render and Commit</h2>
      <p>
        Imagine that your components are cooks in the kitchen, assembling tasty
        dishes from ingredients. In this scenario, React is the waiter who puts
        in requests from customers and brings them their orders. This process of
        requesting and serving UI has three steps:
        <ul className="list-disc">
          <li>
            <b>Triggering:</b> The waiter (React) asks the kitchen (components)
            for the dishes (UI).
          </li>
          <li>
            <b>Rendering:</b> The kitchen (the component tree) starts preparing
            the dish (the UI).
          </li>
          <li>
            <b>Committing:</b> The waiter (React) takes the prepared dish (the
            UI) and serves it to the customer (the DOM).
          </li>
        </ul>
      </p>
      <img
        alt=""
        src="https://react.dev/images/docs/illustrations/i_render-and-commit2.png"
      />
      <h3>Step 1: Trigger a render</h3>
      <p>
        There are two reasons for a component to render:
        <ul className="list-disc">
          <li>
            <b>Initial render:</b> When a component is first created, React will
            render it.
          </li>
          <li>
            <b>Update:</b> When the state or props of a component change, React
            will re-render it.
          </li>
        </ul>
      </p>
      <h3>Step 2: React renders your components</h3>
      <p>
        After you trigger a render, React calls your components to figure out
        what to display on screen.{" "}
        <b>“Rendering” is React calling your components.</b>
        <ul className="list-disc">
          <li>
            <b>On initial render,</b> React will call the root component.
          </li>
          <li>
            <b>For subsequent renders,</b> React will call the function
            component whose state update triggered the render.
          </li>
        </ul>
      </p>
      <p>
        This process is recursive: if the updated component returns some other
        component, React will render that component next, and if that component
        also returns something, it will render that component next, and so on.
        The process will continue until there are no more nested components and
        React knows exactly what should be displayed on screen.
      </p>
      <h3>Step 3: React commits changes to the DOM</h3>
      <p>
        After rendering (calling) your components, React will modify the DOM.
        <ul className="list-disc">
          <li>
            <b>For the initial render,</b> React will use the appendChild() DOM
            API to put all the DOM nodes it has created on screen.
          </li>
          <li>
            <b>For re-renders,</b> React will apply the minimal necessary
            operations (calculated while rendering!) to make the DOM match the
            latest rendering output.
          </li>
        </ul>
      </p>
      <h3>Epilogue: Browser paint</h3>
      <p>
        After rendering is done and React updated the DOM, the browser will
        repaint the screen. Although this process is known as “browser
        rendering”, we’ll refer to it as “painting” to avoid confusion
        throughout the docs.
      </p>
      <h2 id="component-life-cycle">Component Life Cycle</h2>
      <h3>The lifecycle of an Effect</h3>
      <p>Every React component goes through the same lifecycle:</p>
      <ul className="list-disc">
        <li>
          A component <b>mounts</b> when it’s <b>added</b> to the screen.
        </li>
        <li>
          A component <b>updates</b> when it <b>receives new props or state</b>,
          usually in response to an interaction.
        </li>
        <li>
          A component <b>unmounts</b> when it’s <b>removed</b>
          from the screen.
        </li>
      </ul>
      <p>
        By using this useEffect Hook, you tell React that your component needs
        to do something after render. React will remember the function you
        passed (we’ll refer to it as our “effect”), and call it later after
        performing the DOM updates.{" "}
      </p>
      <div className="flex m-8 flex-wrap">
        <img
          src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*Mc3MMv04fUplw92BaJ82aQ.png"
          alt=""
        />
        <img
          src="https://bairesdev.mo.cloudinary.net/blog/2023/03/react-lifecycle-1024x417.png"
          alt=""
        />
      </div>
      <p>
        <b>componentDidMount()</b> – a lifecycle method that runs after the
        component is mounted and rendered to the DOM.
      </p>
      <p>
        <b>componentDidUpdate()</b> render method is called right after the
        updating happens.
      </p>
      <p>
        <b>componentWillUnmount()</b> is invoked just before the component is
        removed from the DOM.
      </p>

      <p>
        You can take advantage of the useEffect hook to achieve the same results
        as with the componentDidMount, componentDidUpdate and
        componentWillUnmount methods. <b>useEffect accepts two parameters.</b>{" "}
        The first one is a callback which runs <b>after render</b>, much like in
        componentDidMount. The second parameter is the{" "}
        <b>effect dependency array</b> (componentDidUpdate). If you want to run
        it on mount and unmount only, pass an empty array []. To{" "}
        <b>clean up, return the callback</b> in useEffect.
        (componentWillUnmount)
      </p>

      <h2 id="lists-and-key">Lists and Keys</h2>
      <p>
        You will often want to display multiple similar components from a
        collection of data. You can use the JavaScript array methods to
        manipulate an array of data. On this page, you’ll use filter() and map()
        with React to filter and transform your array of data into an array of
        components.
      </p>
      <h3>Keeping list items in order with `key`</h3>
      <p>
        When you render a list of items, React uses the key to keep track of the
        items. If the key is the same, React will update the existing item. If
        the key is different, React will create a new item. This is useful when
        you are sorting or filtering your list.
      </p>
      <p>
        Keys tell React which array item each component corresponds to, so that
        it can match them up later. This becomes important if your array items
        can move (e.g. due to sorting), get inserted, or get deleted. A
        well-chosen key helps React infer what exactly has happened, and make
        the correct updates to the DOM tree.
      </p>
      <h3>Why does React need keys?</h3>
      <p>
        Imagine that files on your desktop didn’t have names. Instead, you’d
        refer to them by their order — the first file, the second file, and so
        on. You could get used to it, but once you delete a file, it would get
        confusing. The second file would become the first file, the third file
        would be the second file, and so on.
      </p>
      <p>
        File names in a folder and JSX keys in an array serve a similar purpose.
        They let us uniquely identify an item between its siblings. A
        well-chosen key provides more information than the position within the
        array. Even if the position changes due to reordering, the key lets
        React identify the item throughout its lifetime.
      </p>

      <h2 id="react-render-props">React Render Props</h2>
      <p>
        React components use props to communicate with each other. Every parent
        component can pass some information to its child components by giving
        them props. Props might remind you of HTML attributes, but you can pass
        any JavaScript value through them, including objects, arrays, and
        functions.
      </p>
      <ul className="list-disc">
        <li>
          To pass props, add them to the JSX, just like you would with HTML
          attributes.
        </li>
        <li>
          To read props, use the function {"Avatar({ person, size })"}{" "}
          destructuring syntax.
        </li>
        <li>
          You can specify a default value like size = 100, which is used for
          missing and undefined props.
        </li>
        <li>
          You can forward all props with {"<Avatar {...props} />"} JSX spread
          syntax, but don’t overuse it!
        </li>
        <li>
          Nested JSX like {"<Card><Avatar /></Card>"} will appear as Card
          component’s children prop.
        </li>
        <li>
          Props are read-only snapshots in time: every render receives a new
          version of props.
        </li>
        <li>
          You can’t change props. When you need interactivity, you’ll need to
          set state.
        </li>
      </ul>

      <h2 id="refs">Refs</h2>
      <p>
        When you want a component to “remember” some information, but you don’t
        want that information to trigger new renders, you can use a ref.
      </p>
      <p>
        The ref points to a number, but, like state, you could point to
        anything: a string, an object, or even a function. Unlike state, ref is
        a plain JavaScript object with the current property that you can read
        and modify.
      </p>
      <p>
        Note that the component doesn’t re-render with every increment. Like
        state, refs are retained by React between re-renders. However,{" "}
        <b>setting state re-renders a component. Changing a ref does not!</b>
      </p>
      <h3>When to use refs </h3>
      <p>
        Typically, you will use a ref when your component needs to “step
        outside” React and communicate with external APIs—often a browser API
        that won’t impact the appearance of the component. Here are a few of
        these rare situations:
      </p>
      <ul className="list-disc">
        <li>Storing timeout IDs</li>
        <li>
          Storing and manipulating DOM elements, which we cover on the next page
        </li>
        <li>
          Storing other objects that aren’t necessary to calculate the JSX.
        </li>
      </ul>
      <h3>Refs and the DOM</h3>
      <p>
        You can point a ref to any value. However,{" "}
        <b>the most common use case for a ref is to access a DOM element. </b>
        For example, this is handy if you want to focus an input
        programmatically. When you pass a ref to a ref attribute in JSX, like{" "}
        {"<div ref={myRef}>"}, React will put the corresponding DOM element into
        myRef.current. Once the element is removed from the DOM, React will
        update myRef.current to be null
      </p>
      <h3>Manipulating the DOM with Refs</h3>
      <p>
        React automatically updates the DOM to match your render output, so your
        components won’t often need to manipulate it. However, sometimes you
        might need access to the DOM elements managed by React—for example, to
        focus a node, scroll to it, or measure its size and position. There is
        no built-in way to do those things in React, so you will need a ref to
        the DOM node.
      </p>

      <h2 id="events">Events</h2>
      <h3>React `event` object</h3>
      <h4>Properties</h4>
      <ul className="list-disc">
        <li>
          <b>bubbles:</b> A boolean. Returns whether the event bubbles through
          the DOM.
        </li>
        <li>
          <b>cancelable:</b> A boolean. Returns whether the event can be
          canceled.
        </li>
        <li>
          <b>currentTarget:</b> A DOM node. Returns the node to which the
          current handler is attached in the React tree.
        </li>
        <li>
          <b>defaultPrevented:</b> A boolean. Returns whether preventDefault was
          called.
        </li>
        <li>
          <b>eventPhase:</b> A number. Returns which phase the event is
          currently in.
        </li>
        <li>
          <b>isTrusted:</b> A boolean. Returns whether the event was initiated
          by user.
        </li>
        <li>
          <b>target:</b> A DOM node. Returns the node on which the event has
          occurred (which could be a distant child).
        </li>
        <li>
          <b>timeStamp:</b> A number. Returns the time when the event occurred.
        </li>
      </ul>
      <h4>Methods</h4>
      <ul className="list-disc">
        <li>
          <b>preventDefault():</b> Prevents the default browser action for the
          event.
        </li>
        <li>
          <b>stopPropagation():</b> Stops the event propagation through the
          React tree.
        </li>
      </ul>

      <h2 id="high-order-components">High Order Components</h2>
      <p>
        A higher-order component (HOC) is an advanced technique in React for
        reusing component logic. HOCs are not part of the React API, per se.
        They are a pattern that emerges from React’s compositional nature.
      </p>
      <p>
        Concretely, a higher-order component is a function that takes a
        component and returns a new component with enhanced functionality or
        behavior.
      </p>
      <p>
        Higher-order components are not commonly used in modern React code. In
        order to reuse logic, React hooks are mainly used now.
      </p>
      <pre>
        {`
          const HOC = (WrappedComponent) => {
            return (props) => {
              // Add additional logic or functionality here
              return <WrappedComponent {...props} />;
            };
          };
        `}
      </pre>
    </div>
  );
};

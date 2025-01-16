export const Rendering = () => {
  return (
    <div>
      <h1 id="rendering">Rendering</h1>
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
      <div className="flex m-8">
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

      <h2>React Render Props</h2>
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

      <h2>Refs</h2>
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
    </div>
  );
};

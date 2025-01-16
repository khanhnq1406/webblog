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
    </div>
  );
};

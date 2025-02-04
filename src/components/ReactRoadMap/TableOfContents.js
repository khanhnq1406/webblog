export const TableOfContent = () => {
  return (
    <div>
      <h1>Table of content</h1>
      <ul className="list-disc">
        <li>
          <a href="#functional-components">Functional Components</a>
          <ul className="list-disc">
            <li>
              <a href="#jsx">Components</a>
            </li>
            <li>
              <a href="#jsx">JSX</a>
            </li>
            <li>
              <a href="#state">State</a>
            </li>
            <li>
              <a href="#props">Props</a>
            </li>
            <li>
              <a href="#conditional-rendering">Conditional Rendering</a>
            </li>
            <li>
              <a href="#composition">Composition</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#rendering">Rendering</a>
          <ul className="list-disc">
            <li>
              <a href="#render-and-commit">Render and Commit</a>
            </li>
            <li>
              <a href="#component-life-cycle">Component Life Cycle</a>
            </li>
            <li>
              <a href="#lists-and-key">Lists and Keys</a>
            </li>
            <li>
              <a href="#react-render-props">React Render Props</a>
            </li>
            <li>
              <a href="#refs">Refs</a>
            </li>
            <li>
              <a href="#events">Events</a>
            </li>
            <li>
              <a href="#high-order-components">High Order Components</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#hooks">Hooks</a>
          <ul className="list-disc">
            <li>
              <a href="#built-in-react-hooks">Built-in React Hooks</a>
            </li>
            <li>
              <a href="#useState">useState</a>
            </li>
            <li>
              <a href="#useEffect">useEffect</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

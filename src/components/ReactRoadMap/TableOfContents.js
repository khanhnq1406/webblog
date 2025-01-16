export const TableOfContent = () => {
  return (
    <div>
      <h1>Table of content</h1>
      <ul className="list-disc">
        <li>
          <a href="#functional-components">Functional Components</a>
          <ul className="list-disc">
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
        </li>
      </ul>
    </div>
  );
};

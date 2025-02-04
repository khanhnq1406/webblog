export const Hooks = () => {
  return (
    <div>
      <h1 id="hooks">Hooks</h1>
      <p>
        Hooks were introduced in React 16.8 and they let us use React’s
        features-like{" "}
        <b>
          managing your component’s state and or performing an after effect when
          certain changes occur in state(s) without writing a class.
        </b>
      </p>
      <h2 id="built-in-react-hooks">Built-in React Hooks</h2>
      <p>
        Reference:{" "}
        <a href="https://react.dev/reference/react/hooks">
          Built-in React Hooks
        </a>
      </p>
      <h3>State Hooks</h3>
      <p>State lets a component “remember” information like user input.</p>
      <p>
        To add state to a component, use one of these Hooks:
        <ul className="list-disc">
          <li>
            <a href="#useState" className="text-blue-600 font-semibold">
              useState
            </a>{" "}
            declares a state variable that you can update directly.
          </li>
          <li>
            <a href="#useReducer" className="text-blue-600 font-semibold">
              useReducer
            </a>{" "}
            declares a state variable with the update logic inside a reducer
            function.
          </li>
        </ul>
      </p>
      <h3>Context Hooks</h3>
      <p>
        Context lets a component receive information from distant parents
        without passing it as props.
        <ul className="list-disc">
          <li>
            <a href="#useContext" className="text-blue-600 font-semibold">
              useContext
            </a>{" "}
            reads and subscribes to a context.
          </li>
        </ul>
      </p>
      <h3>Ref Hooks</h3>
      <p>
        Refs let a component hold some information that isn’t used for
        rendering, like a DOM node or a timeout ID. Unlike with state, updating
        a ref does not re-render your component.
        <ul className="list-disc">
          <li>
            <a href="useRef" className="text-blue-600 font-semibold">
              useRef
            </a>{" "}
            declares a ref. You can hold any value in it, but most often it’s
            used to hold a DOM node.
          </li>
          <li>
            <a
              href="useImperativeHandle"
              className="text-blue-600 font-semibold"
            >
              useImperativeHandle
            </a>{" "}
            lets you customize the ref exposed by your component. This is rarely
            used.
          </li>
        </ul>
      </p>
      <h3>Effect Hooks</h3>
      <p>
        Effects let a component connect to and synchronize with external
        systems. This includes dealing with network, browser DOM, animations,
        widgets written using a different UI library, and other non-React code.
        <ul className="list-disc">
          <li>
            <a href="#useEffect" className="text-blue-600 font-semibold">
              useEffect
            </a>{" "}
            runs a function after every render. Clean up after effects with the
            return value.
          </li>
        </ul>
      </p>
      <h3>Performance Hooks</h3>
      <p>
        A common way to optimize re-rendering performance is to skip unnecessary
        work.
        <ul className="list-disc">
          <li>
            <a href="#useMemo" className="text-blue-600 font-semibold">
              useMemo
            </a>{" "}
            lets you cache the result of an expensive calculation.
          </li>
          <li>
            <a href="#useCallback" className="text-blue-600 font-semibold">
              useCallback
            </a>{" "}
            lets you cache a function definition before passing it down to an
            optimized component.
          </li>
        </ul>
      </p>

      <h2 id="useState">useState</h2>
      <p>
        useState is a React Hook that lets you add a state variable to your
        component.
      </p>
      <pre>
        {`
        const [state, setState] = useState(initialState);
        `}
      </pre>
      <p>
        The convention is to name state variables like [something, setSomething]
        using <b>array destructuring.</b>
      </p>
      <h3>useState(initialState)</h3>
      <p>
        Call useState at the top level of your component to declare a state
        variable.
      </p>
      <h4>Parameters</h4>
      <p>
        <b>
          <code>initialState</code>
        </b>
        : The value you want the state to be initially. This argument is ignored
        after the initial render.
      </p>
      <p>
        If you pass a <b>function</b> as initialState, it will be treated as an
        initializer function. It should be pure, should take no arguments, and
        should return a value of any type. React will call your initializer
        function when initializing the component, and store its return value as
        the initial state.{" "}
        <a href="#" className="text-blue-600">
          See an example below.
        </a>
      </p>
      <h4>Returns</h4>
      <p>
        useState returns an array with exactly two values:
        <ul className="list-decimal">
          <li>
            The current state. During the first render, it will match the
            initialState you have passed.
          </li>
          <li>
            The set function that lets you update the state to a different value
            and trigger a re-render.
          </li>
        </ul>
      </p>
      <h4>Caveats</h4>
      <p>
        <ul className="list-disc">
          <li>
            useState is a Hook, so you can only call it{" "}
            <b>at the top level of your component</b> or your own Hooks. You
            can’t call it inside loops or conditions. If you need that, extract
            a new component and move the state into it.
          </li>
          <li>
            In Strict Mode, React will{" "}
            <b>call your initializer function twice</b> in order to help you
            find accidental impurities. This is development-only behavior and
            does not affect production. If your initializer function is pure (as
            it should be), this should not affect the behavior. The result from
            one of the calls will be ignored.
          </li>
        </ul>
      </p>
      <h3>
        <code>set</code> functions
      </h3>
      <p>
        The set function returned by useState lets you update the state to a
        different value and trigger a re-render. You can pass the next state
        directly, or a function that calculates it from the previous state:
      </p>
      <pre>
        {`
        const [name, setName] = useState('Edward');
        const [name, setAge] = useState(18);
        function handleClick() {
            setName('Taylor');
            setAge(a => a + 1);
        }
        `}
      </pre>
      <h4>Caveats</h4>
      <p>
        <ul className="list-disc">
          <li>
            The set function only updates the state variable for the next
            render. If you read the state variable after calling the set
            function, you will still get the old value that was on the screen
            before your call.
          </li>
          <li>
            React batches state updates. It updates the screen after all the
            event handlers have run and have called their set functions. This
            prevents multiple re-renders during a single event. In the rare case
            that you need to force React to update the screen earlier, for
            example to access the DOM, you can use flushSync.
          </li>
        </ul>
      </p>
      <h3>Updating objects and arrays in state</h3>
      <p>
        You can put objects and arrays into state. In React, state is considered
        read-only, so you should replace it rather than mutate your existing
        objects
        <pre>
          {`
            setForm({
                ...form,
                firstName: 'Taylor'
            });
            `}
        </pre>
      </p>

      <h2 id="useEffect">useEffect</h2>
      <p>
        useEffect is a React Hook that lets you synchronize a component with an
        external system.
      </p>
      <h3>Parameters</h3>
      <p>
        <ul className="list-disc">
          <li>
            <b>
              <code>setup</code>:
            </b>{" "}
            The function with your Effect’s logic. Your setup function may also
            optionally return a cleanup function. When your{" "}
            <b className="bg-blue-200">component is added</b> to the DOM, React
            will <b className="bg-blue-200">run your setup function</b>.{" "}
            <b className="bg-green-200">After every re-render</b> with changed
            dependencies, React will{" "}
            <b className="bg-green-200">first run the cleanup function</b> (if
            you provided it) with the old values, and{" "}
            <b className="bg-green-200">then run your setup function</b> with
            the new values. After your{" "}
            <b className="bg-pink-200">component is removed</b> from the DOM,
            React will run your <b className="bg-pink-200">cleanup function</b>.
          </li>
          <li>
            <b>
              optional <code>dependencies</code>:
            </b>{" "}
            The list of all reactive values referenced inside of the setup code.
            Reactive values include props, state, and all the variables and
            functions declared directly inside your component body. If your
            linter is configured for React, it will verify that every reactive
            value is correctly specified as a dependency. The list of
            dependencies must have a constant number of items and be written
            inline like [dep1, dep2, dep3]. React will compare each dependency
            with its previous value using the Object.is comparison. If you omit
            this argument, your Effect will re-run after every re-render of the
            component.
          </li>
        </ul>
      </p>

      <h3>Returns</h3>
      <p>
        useEffect returns <code>undefined</code>
      </p>

      <h3>Caveats</h3>
    </div>
  );
};

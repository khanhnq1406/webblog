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
      <p>
        <ul className="list-disc">
          <li>
            useEffect is a Hook, so you can only call it at the top level of
            your component or your own Hooks. You can’t call it inside loops or
            conditions. If you need that, extract a new component and move the
            state into it.
          </li>
          <li>
            When Strict Mode is on, React will run one extra development-only
            setup+cleanup cycle before the first real setup. This is a
            stress-test that ensures that your cleanup logic “mirrors” your
            setup logic and that it stops or undoes whatever the setup is doing.
          </li>
          <li>
            Effects only run on the client. They don’t run during server
            rendering.
          </li>
        </ul>
      </p>
      <h3>Use cases</h3>
      <h4>React useEffect Hook: Always</h4>
      <pre>
        {`
        React.useEffect(() => {
            console.log('I run on every render: mount + update.');
        });
        `}
      </pre>
      <h4>React useEffect Hook: Mount</h4>
      <pre>
        {`
        React.useEffect(() => {
            console.log('I run only on the first render: mount.');
        }, []);
        `}
      </pre>
      <h4>React useEffect Hook: Update</h4>
      <pre>
        {`
        React.useEffect(() => {
            console.log('I run only if toggle changes (and on mount).');
        }, [toggle]);
        `}
      </pre>
      <h4>React useEffect Hook: Only on Update</h4>
      <pre>
        {`
        const didMount = React.useRef(false);   
        React.useEffect(() => {
            if (didMount.current) {
                console.log('I run only if toggle changes.');
            } else {
                didMount.current = true;
            }
        }, [toggle]);
        `}
      </pre>
      <h4>React useEffect Hook: Only Once</h4>
      <pre>
        {`
        const calledOnce = React.useRef(false);
        React.useEffect(() => {
            if (calledOnce.current) {
                return;
            }
            if (toggle === false) {
                console.log('I run only once if toggle is false.');
                calledOnce.current = true;
            }
        }, [toggle]);     	 
        `}
      </pre>
      <h2 id="useCallback">useCallback</h2>
      <p>
        <code>useCallback</code> is a React hook that returns a memoized version
        of a callback function. It’s used to optimize performance by preventing
        unnecessary re-renders. Specifically, it helps avoid recreating
        functions when their dependencies haven’t changed, which can be useful
        when passing callbacks to child components that rely on referential
        equality to prevent re-rendering.
      </p>
      <pre>const cachedFn = useCallback(fn, dependencies)</pre>
      <pre>
        {`
        const handleSubmit = useCallback((orderDetails) => {
            post('/product/' + productId + '/buy', {
                referrer,
                orderDetails,
            });
        }, [productId, referrer]);
        `}
      </pre>
      <h3>Parameters</h3>
      <p>
        <ul className="list-disc">
          <li>
            <b>
              <code>fn</code>
            </b>
            : The function value that you want to cache. It can take any
            arguments and return any values. React will return (not call!) your
            function back to you during the initial render. On next renders,
            React will give you the same function again if the dependencies have
            not changed since the last render. Otherwise, it will give you the
            function that you have passed during the current render, and store
            it in case it can be reused later. React will not call your
            function. The function is returned to you so you can decide when and
            whether to call it.
          </li>
          <li>
            <b>
              <code>dependencies</code>: The list of all reactive values
              referenced inside of the <code>fn</code> code.{" "}
            </b>
          </li>
        </ul>
      </p>
      <h3>Returns</h3>
      <p>
        On the initial render, useCallback returns the fn function you have
        passed
      </p>
      <p>
        During subsequent renders, it will either return an already stored fn
        function from the last render (if the dependencies haven’t changed), or
        return the fn function you have passed during this render.
      </p>
      <h2 id="useMemo">useMemo</h2>
      <p>
        <b>
          <code>useMemo</code>
        </b>{" "}
        is a React hook that memoizes the result of a function. It is used to
        optimize performance by caching the result of a function and returning
        the cached result when the inputs to the function have not changed.
      </p>
      <pre>const cachedValue = useMemo(calculateValue, dependencies)</pre>
      <h3>Parameters</h3>
      <p>
        <ul className="list-disc">
          <li>
            <b>
              <code>calculateValue</code>
            </b>
            : The function calculating the value that you want to cache. It
            should be pure, should take no arguments, and should return a value
            of any type. React will call your function during the initial
            render. On next renders, React will return the same value again if
            the dependencies have not changed since the last render. Otherwise,
            it will call calculateValue, return its result, and store it so it
            can be reused later.
          </li>
          <li>
            <b>
              <code>dependencies</code>
            </b>
            : The list of all reactive values referenced inside of the
            calculateValue code
          </li>
        </ul>
      </p>
      <h3>Returns</h3>
      <p>
        On the initial render, useMemo returns the result of calling
        calculateValue with no arguments.
      </p>
      <p>
        During next renders, it will either return an already stored value from
        the last render (if the dependencies haven’t changed), or call
        calculateValue again, and return the result that calculateValue has
        returned.
      </p>
      <h2 id="useRef">useRef</h2>
      <p>
        useRef is a React Hook that lets you reference a value that’s not needed
        for rendering.
      </p>
      <pre>const ref = useRef(initialValue)</pre>
      <h3>Parameters</h3>
      <ul className="list-disc">
        <li>
          <b>
            <code>initialValue</code>
          </b>
          : The value you want the ref object’s current property to be
          initially. It can be a value of any type. This argument is ignored
          after the initial render.
        </li>
      </ul>
      <h3>Returns</h3>
      <p>
        <b>
          <code>useRef</code>
        </b>{" "}
        returns an object with a single property:
        <ul className="list-disc">
          <b>
            <code>current</code>
          </b>
          : Initially, it’s set to the initialValue you have passed. You can
          later set it to something else. If you pass the ref object to React as
          a ref attribute to a JSX node, React will set its current property.
        </ul>
      </p>
      <h3>Usage</h3>
      <p>
        By using a ref, you ensure that:
        <ul className="list-disc">
          <li>
            You can store information between re-renders (unlike regular
            variables, which reset on every render).
          </li>
          <li>
            Changing it does not trigger a re-render (unlike state variables,
            which trigger a re-render).
          </li>
          <li>
            The information is local to each copy of your component (unlike the
            variables outside, which are shared).
          </li>
        </ul>
      </p>
      <h2 id="useReducer">useReducer</h2>
      <p>
        useReducer is a React Hook that lets you add a reducer to your
        component.
      </p>
      <pre>
        const [state, dispatch] = useReducer(reducer, initialArg, init?)
      </pre>
      <h3>Parameters</h3>
      <p>
        <ul className="list-disc">
          <li>
            <b>
              <code>reducer</code>
            </b>
            : The reducer function that specifies how the state gets updated. It
            must be pure, should take the state and action as arguments, and
            should return the next state. State and action can be of any types.
          </li>
          <li>
            <b>
              <code>initialArg</code>
            </b>
            : The value from which the initial state is calculated. It can be a
            value of any type. How the initial state is calculated from it
            depends on the next init argument.
          </li>
          <li>
            <b>
              optional <code>init</code>
            </b>
            : The initializer function that should return the initial state. If
            it’s not specified, the initial state is set to initialArg.
            Otherwise, the initial state is set to the result of calling
            init(initialArg).
          </li>
        </ul>
      </p>
      <h3>Returns</h3>
      <p>
        useReducer returns an array with exactly two values:
        <ul className="list-decimal">
          <li>
            <b>The current state.</b> During the first render, it’s set to
            init(initialArg) or initialArg (if there’s no init).
          </li>
          <li>
            The dispatch function that lets you update the state to a different
            value and trigger a re-render.
          </li>
        </ul>
      </p>
      <h3>
        <code>dispatch</code> function
      </h3>
      <p>
        The dispatch function returned by useReducer lets you update the state
        to a different value and trigger a re-render. You need to pass the
        action as the only argument to the dispatch function:
      </p>
      <pre>
        {`
        const [state, dispatch] = useReducer(reducer, { age: 42 });

        function handleClick() {
            dispatch({ type: 'incremented_age' });
        // ...
        `}
      </pre>
      <p>
        React will set the next state to the result of calling the reducer
        function you’ve provided with the current state and the action you’ve
        passed to dispatch.
      </p>
      <h4>Parameters</h4>
      <p>
        <b>
          <code>action</code>
        </b>
        : The action performed by the user. It can be a value of any type. By
        convention, an action is usually an object with a type property
        identifying it and, optionally, other properties with additional
        information.
      </p>

      <h2 id="useContext">useContext</h2>
      <p>
        Usually, you will pass information from a parent component to a child
        component via props. But passing props can become verbose and
        inconvenient if you have to pass them through many components in the
        middle, or if many components in your app need the same information.
        <b>Context</b> lets the parent component make some information available
        to any component in the tree below it—no matter how deep—without passing
        it explicitly through props.
      </p>
      <p>
        The <code>useContext</code> Hook lets us share data between components
        without having to pass props down through every level of the component
        tree. This is particularly useful when many components need to access
        the same data or when components are deeply nested.
      </p>
      <pre>const value = useContext(SomeContext)</pre>
      <h3>Parameters</h3>
      <p>
        <b>
          <code>SomeContext</code>
        </b>
        : The context that you’ve previously created with{" "}
        <a href="#createContext" className="text-blue-600 font-semibold">
          createContext
        </a>
        . The context itself does not hold the information, it only represents
        the kind of information you can provide or read from components.
      </p>
      <h3>Returns</h3>
      <p>
        <code>useContext</code> returns the context value for the calling
        component. It is determined as the value passed to the closest
        SomeContext.Provider above the calling component in the tree. If there
        is no such provider, then the returned value will be the defaultValue
        you have passed to createContext for that context. The returned value is
        always up-to-date. React automatically re-renders components that read
        some context if it changes.
      </p>
      <h3>Caveats</h3>
      <p>
        <ul className="list-disc">
          <li>
            useContext() call in a component is not affected by providers
            returned from the same component. The corresponding{" "}
            {"<Context.Provider>"} needs to be above the component doing the
            useContext() call.
          </li>
          <li>
            React automatically re-renders all the children that use a
            particular context starting from the provider that receives a
            different value.
          </li>
        </ul>
      </p>
      <img
        alt=""
        src="https://dmitripavlutin.com/90649ae4bdf379c482ad24e0dd220bc4/react-context-3.svg"
      />
      <h3>Optimizing re-renders when passing objects and functions</h3>
      <pre>
        {`
        import { useCallback, useMemo } from 'react';

        function MyApp() {
          const [currentUser, setCurrentUser] = useState(null);

          const login = useCallback((response) => {
            setCurrentUser(response.user);
          }, []);

          const contextValue = useMemo(() => ({
            currentUser,
            login
          }), [currentUser, login]);

          return (
            <AuthContext.Provider value={contextValue}>
              <Page />
            </AuthContext.Provider>
          );
        }
        `}
      </pre>

      <h2 id="createContext">createContext (is not a hook)</h2>
      <p>Call createContext outside of any components to create a context.</p>
      <pre>const SomeContext = createContext(defaultValue)</pre>
      <h3>Parameters</h3>
      <p>
        <b>
          <code>defaultValue</code>
        </b>
        : The value that you want the context to have when there is no matching
        context provider in the tree above the component that reads context. If
        you don’t have any meaningful default value, specify null. The default
        value is meant as a “last resort” fallback. It is static and never
        changes over time.
      </p>
      <h3>Returns</h3>
      <p>
        The context object itself does not hold any information. It represents
        which context other components read or provide. Typically, you will use
        SomeContext.Provider in components above to specify the context value,
        and call useContext(SomeContext) in components below to read it. The
        context object has a few properties:
        <ul className="list-disc">
          <li>
            <code>SomeContext.Provider</code> lets you provide the context value
            to components.
          </li>
          <li>
            <code>SomeContext.Consumer</code> is an alternative and rarely used
            way to read the context value.
          </li>
        </ul>
      </p>
      <h3>
        <b>
          <code>SomeContext.Provider</code>
        </b>
      </h3>
      <h4>Props</h4>
      <p>
        <b>
          <code>value</code>
        </b>
        : The value that you want to pass to all the components reading this
        context inside this provider, no matter how deep. The context value can
        be of any type. A component calling{" "}
        <a href="#useContext" className="text-blue-600 font-semibold">
          useContext(SomeContext)
        </a>{" "}
        inside of the provider receives the value of the innermost corresponding
        context provider above it.
      </p>
      <h3>
        <b>
          <code>SomeContext.Consumer</code> (not recommended)
        </b>
      </h3>
      <p>
        Before useContext existed, using <code>Consumer</code> was an older way
        to read context.
      </p>
      <h3>Importing and exporting context from a file </h3>
      <p>
        Often, components in different files will need access to the same
        context. This is why it’s common to declare contexts in a separate file.
        Then you can use the export statement to make context available for
        other files:
      </p>
      <pre>
        {`
        // Contexts.js
        import { createContext } from 'react';

        export const ThemeContext = createContext('light');
        export const AuthContext = createContext(null);
        `}
      </pre>
      <pre>
        {`
        // Button.js
        import { ThemeContext } from './Contexts.js';

        function Button() {
          const theme = useContext(ThemeContext);
          // ...
        }
        `}
      </pre>

      <h2 id="react-hooks-best-practices">React Hooks Best Practices</h2>
      <p>
        References:{" "}
        <a
          href="https://medium.com/womenintechnology/react-hooks-best-practices-unlocking-efficiency-and-elegance-da23f7e1418a"
          className="text-blue-600 font-semibold"
        >
          React Hooks Best Practices: Unlocking Efficiency and Elegance
        </a>
      </p>
      <h3>Use Hooks at the Top Level</h3>
      <p>
        To ensure consistent behavior and prevent unexpected issues, always call
        Hooks at the top level of your functional component. Avoid placing them
        within loops, conditions, or nested functions. By following this
        practice, you guarantee that Hooks are executed in the same order on
        every render, providing predictable results.
      </p>
      <h3>Optimize useEffect with Dependency Arrays</h3>
      <h3>Memoize Expensive Computations</h3>
      <p>
        To optimize performance, utilize the useCallback and useMemo Hooks.
        <b>useCallback memoizes a function</b>, preventing it from being
        recreated on each render. This is particularly useful when passing
        functions as props to child components.{" "}
        <b>useMemo memoizes the result of expensive computations</b>, avoiding
        unnecessary recalculations.
      </p>
      <h3>Encapsulate Logic in Custom Hooks</h3>
      <h3>Use Effect Cleanup</h3>
      <p>
        Leverage the useEffect hook’s cleanup function to handle resource
        cleanup and unsubscribe from subscriptions or event listeners. Failing
        to clean up can lead to memory leaks and unexpected behavior.
      </p>
      <h3>Separate Side Effects with useEffect</h3>
      <p>
        Avoid bundling multiple unrelated side effects within a single
        useEffect. Instead, create separate useEffect hooks to clearly express
        the intention and maintain a clean and predictable code structure.
      </p>
      <h3>Keep Hooks Focused and Simple</h3>
    </div>
  );
};

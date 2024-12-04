import { useEffect } from "react";
import "./MySql/MySql.css";
const TypeScript = () => {
  useEffect(() => {
    window.Prism.highlightAll();
  }, []);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>TypeScript</h1>
      <h1>Everyday Types</h1>
      <ul>
        <li>The primitives: string , number , and boolean</li>
        <li>
          You can use the syntax <code>number[];</code> or{" "}
          <code>Array{"<number>"}</code>
        </li>
        <li>
          any: you can use whenever you don't want a particular value to cause
          typechecking errors.
        </li>
      </ul>
      <h2>Type Annotations on Variables</h2>
      <p>
        When you declare a variable using const, var, or let, you can optionally
        add a type annotation to explicitly specify the type of the variable:
      </p>
      <pre>
        <code className="language-typescript">
          let myName: string = "Alice";
        </code>
      </pre>
      <p>
        In most cases, though, this isn't needed. Wherever possible, TypeScript
        tries to automatically infer the types in your code. For example, the
        type of a variable is inferred based on the type of its initializer:
      </p>
      <pre>
        <code className="language-typescript">
          {`// No type annotation needed -- 'myName' inferred as type 'string'
let myName = "Alice";`}
        </code>
      </pre>
      <h2>Functions</h2>
      <pre>
        <code className="language-typescript">
          {`// Parameter type annotation
function greet(name: string) : void {
  console.log("Hello, " + name.toUpperCase() + "!!");
}`}
        </code>
      </pre>

      <h2>Enum</h2>
      <h3>Numeric enums</h3>
      <pre>
        <code className="language-typescript">
          {`enum Direction {
  Up, //0
  Down, //1
  Left, //2
  Right, //3
}`}
        </code>
      </pre>
      <h3>String enums</h3>
      <pre>
        <code className="language-typescript">
          {`enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}`}
        </code>
      </pre>

      <h2>Object Types</h2>
      <pre>
        <code className="language-typescript">
          {"let aPerson: {name: string, age: number};"}
        </code>
      </pre>

      <h2>Type Aliases</h2>
      <p>
        One great way to customize the types in our programs is to use type
        aliases. These are alternative type names that we choose for
        convenience. We use the format type{" "}
        <code className="language-typescript">{"<alias name> = <type>"}</code>
      </p>
      <pre>
        <code className="language-typescript">{`type Name = string;`}</code>
      </pre>
      <pre>
        <code className="language-typescript">{`type Person = { name: string, age: number };
 let aCompany: {
  companyName: string, 
  boss: Person, 
  employees: Person[], 
  employeeOfTheMonth: Person,  
  moneyEarned: number
};`}</code>
      </pre>

      <h2>Function Types</h2>
      <p>
        One of the neat things about TypeScript is that we can precisely control
        the kinds of functions assignable to a variable. We do this using
        function types, which specify the argument types and return type of a
        function.
      </p>
      <pre>
        <code className="language-typescript">
          type Add = (a: number, b: number) => number;
        </code>
      </pre>
      <p>
        It doesn't matter what we name the function parameters, so long as they
        have the correct types
      </p>
      <h2>Generic Types</h2>
      <p>
        TypeScript's generics are ways to create collections of types (and typed
        functions, and more) that share certain formal similarities. These
        collections are parameterized by one or more type variables
      </p>
      <pre>
        <code className="language-typescript">
          {`type Family<T> = {
  parents: [T, T], mate: T, children: T[]
};

 let aStringFamily: Family<string> = {
  parents: ['stern string', 'nice string'],
  mate: 'string next door', 
  children: ['stringy', 'stringo', 'stringina', 'stringolio']
}; 
`}
        </code>
      </pre>

      <h2>Generic Functions</h2>
      <pre>
        <code className="language-typescript">
          {`function getFilledArray<T>(value: T, n: number): T[] {
  return Array(n).fill(value);
}

getFilledArray<number>(6,6); // return number[]
`}
        </code>
      </pre>

      <h2>Union Types</h2>
      <h3>Defining Unions</h3>
      <p>
        Preview: Docs Some values may be one of the multiple possible types.
        TypeScript refers to these "either or" types as type unions. Unions
        allow us to define multiple allowed type members by separating each type
        member with a vertical line character |.
      </p>
      <pre>
        <code className="language-typescript">
          {`type UnionType = string | number | boolean;`}
        </code>
      </pre>

      <h3>Type Narrowing</h3>
      <p>
        Type Preview: Docs Narrowing is a TypeScript process that refines a
        value of multiple types into a single, specific type. narrowing is when
        TypeScript can figure out what type a variable can be at a given point
        in our code. In our examples, TypeScript has narrowed the type inside
        the type guard to only be a string. Type narrowing allows us to use
        unions, then perform type-specific logic without TypeScript getting in
        the way.
      </p>
      <pre>
        <code className="language-typescript">
          {`function printMessage(message: string | number) {
    if (typeof message === 'string') {
    console.log(message.toUpperCase());
    } else {
        console.log(message);
    }
}`}
        </code>
      </pre>
      <h4>Using in with Type Guards</h4>
      <p>
        The in operator checks if a property exists on an object itself or
        anywhere within its prototype chain.
      </p>
      <pre>
        <code className="language-typescript">
          {`type Tennis = {
  serve: () => void;
 }

 function play(sport: Tennis | Soccer) {
  if ('serve' in sport) {
    return sport.serve();
  }
 }`}
        </code>
      </pre>
      <h3>Unions and Arrays</h3>
      <pre>
        <code className="language-typescript">
          {"const timesList: (string | number)[] = [dateNumber, dateString];"}
        </code>
      </pre>

      <h3>Common Key Value Pairs</h3>
      <p>
        When we put type members in a union, TypeScript will only allow us to
        use the <mark>common methods and properties</mark> that all members of
        the union share.
      </p>

      <h2>Advanced object types</h2>
      <h3>Interfaces and Types</h3>
      <p>
        The biggest difference between interface and type is that interface can
        only be used to type objects, while type can be used to type objects,
        Preview: Docs TypeScript supports primitives, which are the basic types
        in JavaScript that make up data other than functions and objects.
        primitives , and more.
      </p>
      <p>
        Since interface may only type objects, it's a perfect match for writing
        object-oriented programs because these programs need many typed objects.
      </p>
      <h3>Interfaces and Classes</h3>
      <p>
        The interface keyword in TypeScript is especially good for adding types
        to a class. Since interface is constrained to typed objects and using
        class is a way to program with objects, interface and class are a great
        match.
      </p>
      <pre>
        <code className="language-typescript">
          {`interface Person {
  name: string;
  age: number;
  }
  class PersonClass implements Person {
  name: string;
  age: number;
  }
            `}
        </code>
      </pre>
      <h3>Extending Interfaces</h3>
      <p>
        Sometimes it's convenient to copy all the type members from one type
        into another type. We can accomplish this with the extends keyword
      </p>
      <pre>
        <code className="language-typescript">
          {`interface Person {
    name: string;
    age: number;
    }
    interface Employee extends Person {
    department: string;
}
            `}
        </code>
      </pre>
      <h3>Index Signatures</h3>
      <p>
        While we may not know the exact property names at compile-time, we may
        know what the data will look like in general. In that case, it’s useful
        to write an object type that allows us to include a variable name for
        the property name. This feature is called index signatures.
      </p>
      <pre>
        <code className="language-typescript">
          {`interface StringArray {
    [index: string]: string;
}
            `}
        </code>
      </pre>

      <h3>Optional Type Members</h3>
      <p>
        A common scenario in programming is creating a function or class that
        can take in many arguments, some of which are required, and some that
        are optional.
      </p>
      <pre>
        <code className="language-typescript">
          {`interface Person {
    name: string;
    age?: number;
    }
            `}
        </code>
      </pre>
    </>
  );
};

export default TypeScript;

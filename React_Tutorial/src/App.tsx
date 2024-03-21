import "./App.css";
import ArrayType from "./Components/ArrayType";
import Child from "./Components/Child";
import LogLevel from "./Components/LogLevel";
import ObjectType from "./Components/ObjectType";
import Parent from "./Components/Parent";
import VariableType from "./Components/VariableType";

function App() {
  const details = {
    firstName: "MS",
    lastName: "Dhoni",
    isPlaying: true,
    score: 120,
  };

  const players = ["Dhoni", "Jadeja", "Raina"];

  const teams = [
    { team: "CSK", players: 15 },
    { team: "RR", players: 16 },
    { team: "GL", players: 14 },
  ];

  return (
    <>
      <h1 style={{ textAlign: "center" }}>React TypeScript</h1>

      <VariableType name="Tapan" age={22} isEligible={true} />

      <ObjectType details={details} />

      <ArrayType playerType={{ players }} teamType={{ teams }} />

      <LogLevel status="Info"/>

      <Parent children={<Child />}/>
    </>
  );
}

export default App;

// TypeScript is a development tool for building scalable and maintainable JavaScript applications by adding static type.
// This helps catch type-related errors during development rather than at runtime.
// TypeScript is superset of JavaScript that adds optional static typing to the language.
// TypeScript uses type annotations to declare the data types of variables, parameters, and return types.
// TypeScript allows to define interfaces, which describe the structure of objects.
// TypeScript allows to write reusable code with generics, enabling to create functions and classes that work with a variety of data types.
// TypeScript code is transpiled into JavaScript before execution.
// Types of TypeScript : Number, String, Boolean, Null, Undefined, Void, Object, Array, Tuples, any, Never, Unknown, ....

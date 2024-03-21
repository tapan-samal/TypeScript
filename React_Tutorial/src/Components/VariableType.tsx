import React from "react";

interface VariableType {
  name: string;
  age: number;
  isEligible: boolean;
  loaction?: string  // ? It behave like not mandatory
}
// type PropsType = {
//     name: string,
//     age: number,
//     isEligible: boolean
// }
const VariableType = (props: VariableType) => {
  return (
    <>
      <h2>1. Variable Types :</h2>
      <h3>Hello {props.name}, Welcome to TypeScript !!</h3>
      {props.isEligible ? (
        <p>My age is {props.age}, so I am eligible for vote.</p>
      ) : (
        <p>I am not eligible.</p>
      )}
    </>
  );
};

export default VariableType;

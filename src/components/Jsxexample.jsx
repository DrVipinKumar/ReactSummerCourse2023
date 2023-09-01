import React from "react";

const Jsxexample = () => {
  let name = "MCA REACT";
  let n1 = 50,
    n2 = 20;
  const findGreater = () => {
    if (n1 > n2) {
      return "n1";
    } else {
      return "n2";
    }
  };
  return (
    <div>
      <h2>JSX Example</h2>
      <h3> Welcome to React by {name}</h3>
      <h3>Greater Number is {n1 > n2 ? "n1" : "n2"}</h3>
      <h3>Greater Number is {findGreater()}</h3>
    </div>
  );
};

export default Jsxexample;

import React, { useState } from "react";
import ToggleUseEffect from "./ToggleUseEffect";

const UseStateEx = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const increment5 = () => {
    increment();
    increment();
    increment();
    increment();
    increment();
  };
  const changeToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="m-3">
      <button className="btn btn-primary" onClick={increment}>
        Increment
      </button>
      {" " + count}
      <button className="btn btn-primary mx-2" onClick={increment5}>
        Increment +5
      </button>
      <button className="btn btn-primary mx-2" onClick={changeToggle}>
        Show Toggle
      </button>
      {toggle && <ToggleUseEffect />}
    </div>
  );
};

export default UseStateEx;

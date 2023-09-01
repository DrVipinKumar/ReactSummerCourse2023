import React, { useEffect, useState } from "react";

const ToggleUseEffect = () => {
  const [X, setX] = useState();
  const [Y, setY] = useState();
  const mouseMove = (event) => {
    setX(event.clientX);
    setY(event.clientY);
    console.log("Inside mouseMove Function");
  };
  useEffect(() => {
    console.log("Inside useEffect");
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  });
  return (
    <div>
      <h1>ToggleUseEffect</h1>
      <h2>
        X:{X} and Y:{Y}
      </h2>
    </div>
  );
};

export default ToggleUseEffect;

import React, { useState } from "react";

const ChangeName = () => {
  const [name, setName] = useState("MCA");
  const chName = () => {
    setName("REACT JS");
    // console.log(name);
  };
  return (
    <div>
      <h2>Your name is {name}</h2>
      <button className="btn btn-outline-danger" onClick={chName}>
        Change Name
      </button>
    </div>
  );
};

export default ChangeName;

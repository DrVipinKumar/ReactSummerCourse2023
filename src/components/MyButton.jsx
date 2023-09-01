import React from "react";

const MyButton = (props) => {
  return (
    <div>
      <button onClick={() => props.onPress("This message in under MyButton")}>
        Click ME
      </button>
    </div>
  );
};

export default MyButton;

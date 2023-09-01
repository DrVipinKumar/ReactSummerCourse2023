import React from "react";
import MyButton from "./MyButton";

const EventEx = () => {
  const displayMsg = (msg) => {
    alert(msg);
  };
  return (
    <div>
      <h2>Event Handling Example</h2>
      <MyButton onPress={displayMsg} />
    </div>
  );
};

export default EventEx;

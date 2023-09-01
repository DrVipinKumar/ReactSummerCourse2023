import React from "react";

const Message = (props) => {
  const { lang, lab } = props.info;
  return (
    <div>
      <h2>
        We are reading {lang} in {lab}
      </h2>
    </div>
  );
};

export default Message;

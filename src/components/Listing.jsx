import React from "react";

const Listing = () => {
  let Langs = ["Dot.Net", "React", "Next JS", "Java", "Python"];
  let LangsObj = [
    { id: "1", lang: "Dot.Net" },
    { id: "2", lang: "React JS" },
    { id: "3", lang: "Next JS" },
    { id: "4", lang: "Java" },
    { id: "5", lang: "Python" },
  ];
  return (
    <div>
      <h2>List of langauges:</h2>
      <ul>
        {Langs.map((lang, index) => (
          <li style={{ textAlign: "left" }} key={index}>
            {lang}
          </li>
        ))}
      </ul>
      <h2>List of Array Objects:</h2>
      <ul>
        {LangsObj.map((obj) => (
          <li style={{ textAlign: "left" }} key={obj.id}>
            {obj.lang}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listing;

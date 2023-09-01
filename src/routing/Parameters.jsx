import React from "react";
import { useParams } from "react-router-dom";
import CheckBoxEx from "../forms/CheckBoxEx";
const Parameters = () => {
  const param = useParams();
  const displayLang = () => {
    switch (param.lang) {
      case "java":
        return "Welcome to Java";
      case "python":
        return "Welcome to Python";
      default:
        return <CheckBoxEx />;
    }
  };
  return <div>{displayLang()}</div>;
};

export default Parameters;

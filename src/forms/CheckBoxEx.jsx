import React, { useEffect, useState } from "react";

const CheckBoxEx = () => {
  const [selectLang, setSelectLang] = useState([]);
  const [lang, setLang] = useState({
    java: false,
    python: false,
    javascript: false,
    kotlin: false,
  });
  const checkLang = (event) => {
    const { name, checked } = event.target;
    setLang({ ...lang, [name]: checked });
    //setSelectLang([...selectLang, name]);
  };
  const displayLang = () => {
    setSelectLang([]);
    if (lang.java === true) {
      setSelectLang((prevSel) => [...prevSel, "Java"]);
    }
    if (lang.python === true) {
      setSelectLang((prevSel) => [...prevSel, "Python"]);
    }
    if (lang.javascript === true) {
      setSelectLang((prevSel) => [...prevSel, "JavaScript"]);
    }
    if (lang.kotlin === true) {
      setSelectLang((prevSel) => [...prevSel, "Kotlin"]);
    }
  };
  useEffect(() => {
    displayLang();
  }, [lang]);

  return (
    <div className="m-3">
      <h4>Select your language</h4>
      <form className="d-flex flex-column">
        <div>
          <input type="checkbox" name="java" onChange={checkLang} />
          <b>&nbsp;Java</b>
        </div>
        <div>
          <input type="checkbox" name="python" onChange={checkLang} />
          <b>&nbsp;Python</b>
        </div>
        <div>
          <input type="checkbox" name="javascript" onChange={checkLang} />
          <b>&nbsp;JavaScript</b>
        </div>
        <div>
          <input type="checkbox" name="kotlin" onChange={checkLang} />
          <b>&nbsp;Kotlin</b>
        </div>
      </form>
      {JSON.stringify(lang)}
      <br />
      {JSON.stringify(selectLang)}
    </div>
  );
};

export default CheckBoxEx;

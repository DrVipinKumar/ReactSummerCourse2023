import React, { useState } from "react";

const FormEx = () => {
  const [form, setForm] = useState({
    name: "",
    pwd: "",
    gender: "",
  });

  const changeInput = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="m-3 ">
      <h2>Form Example</h2>
      <form className="d-flex flex-column col-3">
        <label>Enter your name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Enter name"
          onChange={changeInput}
        />
        <label>Enter your password</label>
        <input
          type="password"
          name="pwd"
          value={form.pwd}
          placeholder="Enter password"
          onChange={changeInput}
        />
        <label>Gender</label>
        <div>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={changeInput}
          />
          <b>&nbsp;Male</b>
          &nbsp;&nbsp;
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={changeInput}
          />
          <b>&nbsp;Female</b>
        </div>
        <div>{JSON.stringify(form)}</div>
      </form>
    </div>
  );
};

export default FormEx;

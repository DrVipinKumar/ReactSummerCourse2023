import React, { useState } from "react";
import axios from "axios";
const DeleteStudents = () => {
  const [sid, setSid] = useState();
  const insertInfo = (event) => {
    setSid(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (sid !== 0) {
      axios
        .delete(`http://10.21.78.79:8080/students/${sid}`)
        .then((response) => {
          alert("Information Deleted!");
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      alert("Please insert infomation!");
    }
  };
  return (
    <div>
      <h2>Delete Student Information</h2>
      <form className="d-flex flex-column" onSubmit={onSubmit}>
        <label>Enter student id</label>
        <input type="text" name="sid" value={sid} onChange={insertInfo} />

        <button type="submit" className="btn btn-outline-warning my-3">
          Delete Information
        </button>
      </form>
    </div>
  );
};

export default DeleteStudents;

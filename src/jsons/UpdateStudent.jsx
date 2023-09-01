import React, { useState } from "react";
import axios from "axios";
const UpdateStudents = () => {
  const [student, setStudent] = useState({
    sid: "",
    name: "",
    course: "",
  });
  const insertInfo = (event) => {
    const { name, value } = event.target;
    setStudent({ ...student, [name]: value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (student.sid !== 0 && student.name !== "" && student.course !== "") {
      axios
        .put("http://10.21.78.79:8080/students", student)
        .then((response) => {
          alert("Information Updated!");
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
      <h2>Update Student Information</h2>
      <form className="d-flex flex-column col-4" onSubmit={onSubmit}>
        <label>Enter student id</label>
        <input
          type="text"
          name="sid"
          value={student.sid}
          onChange={insertInfo}
        />
        <label>Enter student name</label>
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={insertInfo}
        />
        <label>Enter student course</label>
        <input
          type="text"
          name="course"
          value={student.course}
          onChange={insertInfo}
        />
        <button type="submit" className="btn btn-outline-warning my-3">
          Update Information
        </button>
      </form>
    </div>
  );
};

export default UpdateStudents;

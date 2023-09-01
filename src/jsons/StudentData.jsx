import React, { useEffect, useState } from "react";
import axios from "axios";
const StudentData = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/students")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {});
  });
  return (
    <div>
      <h2>Student Information</h2>
      <div>
        <table className="table table-success">
          <thead className="table table-warning">
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Student Course</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr>
                <td>{student.sid}</td>
                <td>{student.name}</td>
                <td>{student.course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentData;

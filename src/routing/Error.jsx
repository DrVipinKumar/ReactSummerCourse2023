import React from "react";
import { useNavigate } from "react-router-dom";
const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>404 page not found</h2>
      <button className="btn btn-warning" onClick={() => navigate("/")}>
        Home
      </button>
    </div>
  );
};

export default Error;

import React from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>KIET MCA Department</h2>
      <button className="btn btn-warning" onClick={() => navigate("/")}>
        Home
      </button>
      <nav className="m-3">
        <Link className="m-2 text-decoration-none" to="aboutone">
          About One
        </Link>
        <Link className="m-2 text-decoration-none" to="abouttwo">
          About Two
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default AboutUs;

import React from "react";

const NavBar = (props) => {
  const { acounter } = props;
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid badge bg-warning">
          <span className="navbar-brand mx-auto ">
            Active Counter: <span className="text-light fs-4">{acounter}</span>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

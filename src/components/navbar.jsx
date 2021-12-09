import React from "react";
const Navbar = ({totalCount}) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">
          Navbar
          <span className="badge bg-secondary badge-sm m-2">
            {totalCount}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

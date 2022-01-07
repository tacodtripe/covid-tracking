import React from 'react';
import './style.css';

function Navbar() {
  return (
    <div className="navContainer row" data-test="navbarContainer">
      <p className="col-2 text-center" data-test="yearDisplay">2022</p>
      <p className="col-7 text-center" data-test="title">COVID-19 cases</p>
      <div className="col-3 row justify-content-end pe-3">
        <i className="col-6 bi bi-mic-fill" data-test="icon" />
        <i className="col-6 bi bi-gear-fill" data-test="icon" />
      </div>
    </div>
  );
}

export default Navbar;

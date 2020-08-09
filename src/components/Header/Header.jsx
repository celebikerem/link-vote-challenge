import React from "react";

import "./Header.css";

export default function Header() {
  return (
    <div className="row border-bottom" data-test="component-header">
      <div className="col-6">
        <img
          src="https://www.musteritemsilcisinebaglanma.com/wp-content/uploads/2019/09/hepsiburada-logo.png"
          className="img-fluid"
          alt="logo"
        />
      </div>
      <div className="col-6 d-flex justify-content-center align-items-center">
        <span className="header-right-text">
          <b>link</b>VOTE Challenge
        </span>
      </div>
    </div>
  );
}

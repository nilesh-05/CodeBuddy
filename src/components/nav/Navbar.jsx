import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav class="navbar navbar-dark bg-dark justify-content-start align-items-center">
      <a class="navbar-brand">
        {" "}
        <span className="text-danger" style={{ fontFamily: "cursive" }}>
          C
        </span>
        ode
        <span className="text-danger" style={{ fontFamily: "cursive" }}>
          B
        </span>
        uddy
      </a>
      <div class="input-group mb-3 search-bar">
        <div class="input-group-prepend">
          <button
            class="btn btn-info dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={{ color: "white", height: 45 }}
          >
            Select
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="/home">
              Skill
            </a>
            <div role="separator" class="dropdown-divider"></div>
            <a class="dropdown-item" href="/home">
              Name
            </a>
          </div>
        </div>
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <button class="btn btn-outline-success" type="submit">
          Search
        </button>
      </div>
      <div class="vl"></div>
      <button className="round-button">?</button>
      <button className="round-button">?</button>
      <button className="round-button">?</button>
    </nav>
  );
};

export default Navbar;

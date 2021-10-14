import React from "react";

import "./Recipies.css";
import { Link } from "react-router-dom";

export default function Recipies() {
  return (
    <div>
      <div className="recipies">
        <ul className="d-flex justify-content-center my-5">
          <Link to="/">
            <li tabIndex="1">Breakfast</li>
          </Link>

          <Link to="/lunch">
            <li tabIndex="1">Lunch</li>
          </Link>

          <Link to="/dinner">
            <li tabIndex="1">Dinner</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

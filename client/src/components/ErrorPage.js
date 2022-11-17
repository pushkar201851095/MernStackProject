import React from "react";
 
import { NavLink } from "react-router-dom";
export const ErrorPage = () => {
  return (
    <div>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
            <NavLink to="/">Back to homePage</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

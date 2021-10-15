import React from "react";
import useAuth from "../../../Hooks/useAuth";
import "./Banner.css";

export default function Banner() {
  let { user } = useAuth();
  return (
    <div className="banner d-flex justify-content-center align-items-center">
      <div className="container bannerContent">
        {user.email && (
          <h1 className="text-center fw-light mb-3 fs-3">
            Welcome! {user.displayName}
          </h1>
        )}
        <h1 className="text-center  mx-auto ">
          <span className="redonion">Red Onion</span> Delicious Food Restaurant
        </h1>
        <div className="input-group my-5 w-50 mx-auto searchbox">
          <input
            type="text"
            className="form-control p-2 "
            placeholder="Search Food.."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button className="searchbtn btn p-2" type="button">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

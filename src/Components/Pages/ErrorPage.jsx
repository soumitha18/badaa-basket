import React from "react";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="container text-center" style={{height:"100vh"}}>
      <div className="row">
        <div className="col-12 mt-5 mb-3">
          <img
            className="mb-3 mt-5"
            src="https://www.bbassets.com/static/images/404pan.png"
            alt=""
          />
          <h5 className="font-weight-bold my-3">
            <b>This page doesn't exist</b>
          </h5>
          <p className="text-muted mb-3">
            Looks like you entered a page which doesn’t exist anymore.<br/> Let’s
            take you back to home.
          </p>
          <button className="btn btn-success"><Link to="/" className="text-white"><b>Go To Home</b></Link></button>
        </div>
      </div>
    </div>
  );
};

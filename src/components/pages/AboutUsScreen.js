import React from "react";
import { Link } from "react-router-dom";

export default function AboutUsPAge(){
  return (
    <div className="text-center">
      <h1 className="main-title home-page-title">About US </h1>
      <Link to="/">
        <Text>About US</Text>
        <button className="primary-button"></button>
      </Link>
    </div>
  );
}

import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner p-4 text-center">
      <div className="banner-heading container">
        <h1  className=" fst-italic banner-title ">
          <span className="text-white">Welcome To </span> <br />
          <span className="text-danger">Cook Like a Chef</span>
        </h1>
        <p className="mt-4 p-4 banner-description">
          Discover the rich culinary heritage of Italy with our collection of
          authentic recipes, cooking tips, and food stories. From classic pasta
          dishes to regional specialties, our website is your ultimate source
          for Italian cooking inspiration.
        </p>
      </div>
    </div>
  );
};

export default Banner;

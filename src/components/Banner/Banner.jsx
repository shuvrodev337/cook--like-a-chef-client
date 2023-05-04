import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner p-4 text-center">
      <div className="mt-5 p-4">
        <h1 className="fw-bold fst-italic">
          Welcome To <span className="text-white">Cook</span>
          <span className="text-danger">Like-a-</span>
          <span className="text-white">Chef</span>
        </h1>
        <p className="mt-4">
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

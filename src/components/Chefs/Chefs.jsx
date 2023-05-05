import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleChefCard from "../SingleChefCard/SingleChefCard";
import { Row } from "react-bootstrap";

const Chefs = () => {
  const chefs = useLoaderData();
  return (
    <div className="container">
      <div className="text-center section-heading">
        <h1 className="section-title">Meet Our Best Chefs </h1>
        <p className="text-secondary">
          Our team of talented chefs have been recognized for their exceptional
          skills and creativity in the culinary industry. From classic Italian
          dishes to modern fusion cuisine, each of our award-winning chefs
          brings a unique perspective to the kitchen. Join us for a dining
          experience that will delight your taste buds and leave you wanting
          more.
        </p>
      </div>
      <Row xs={1} md={2} lg={3} className="g-4 mt-4">
        {chefs.map((chef) => (
          <SingleChefCard key={chef.id} chef={chef}></SingleChefCard>
        ))}
      </Row>
    </div>
  );
};

export default Chefs;

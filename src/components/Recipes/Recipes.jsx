import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const Recipes = () => {
  const selectedChef = useLoaderData();
  const {name,bio,picture,experience, numberof_recipes,likes} = selectedChef
  return (
    <>
      {/* <div className="text-center my-4">
        <h2 className='my-4 fw-bold'> {name} is one of our best chefs</h2>
        <p className='text-secondary'>Here are some of his bw recipes</p>
      </div> */}
      <Card className="border-0 rounded shadow-lg">
        <Row>
          <Col md={4}>
            <div className="p-3">
            <Card.Img className="w-100 rounded" variant="left" src={picture} />
            </div>
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{bio}</Card.Text>
              <Card.Text>Experiences: {experience} years.</Card.Text>
              <Card.Text>Number of Recipes: {numberof_recipes}</Card.Text>
              <Card.Text>Likes: {likes}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default Recipes;

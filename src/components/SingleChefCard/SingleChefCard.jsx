import React, { useContext } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
const SingleChefCard = ({ chef }) => {
  const { id, name, picture, experience, likes } = chef;
  console.log(id);
  // const id = 2
  return (
    <Col>
      <Card className="bg-light shadow border-0 text-center">
        <div className="p-3 w-75   mx-auto">
          <LazyLoad>
            <Card.Img className="h-100  rounded" variant="top" src={picture} />
          </LazyLoad>
        </div>
        <Card.Body>
          <Card.Title className="fw-bolder">{name}</Card.Title>
          <Card.Text className="fw-semibold">
            {experience} years experience.
          </Card.Text>
          <Card.Text className="fw-semibold">{likes} Likes.</Card.Text>
          <Link to={`/chef/${id}`}>
            <Button variant="danger">See Recipes</Button>{" "}
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleChefCard;

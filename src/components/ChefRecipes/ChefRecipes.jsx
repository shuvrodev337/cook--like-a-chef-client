import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";
import SingleChefRecipe from "../SingleChefRecipe/SingleChefRecipe";
import LazyLoad from "react-lazy-load";
const ChefRecipes = () => {
  const selectedChef = useLoaderData();
  const { name, bio, picture, experience, numberof_recipes, likes, recipes } =
    selectedChef;
  return (
    <>

      <div className="banner mt-5">
        <Card className="border-0 rounded shadow-lg">
          <Row>
            <Col md={4}>
              <div className="p-3">
              <Card.Img className="w-100 rounded" variant="left" src={picture} />               
              </div>
            </Col>
            <Col>
              <Card.Body className="text-center mt-5">
                <Card.Title className="fw-bold text-danger fs-1">
                  {name}
                </Card.Title>
                <Card.Text className="text-secondary">
                  <span className="text-danger">Bio:</span> {bio}
                </Card.Text>
                <Card.Text className="text-secondary">
                  <span className="text-danger">Experience:</span> {experience}{" "}
                  years.
                </Card.Text>
                <Card.Text className="text-secondary">
                  <span className="text-danger">Number of Recipes:</span>{" "}
                  {numberof_recipes}
                </Card.Text>
                <Card.Text className="text-secondary">
                  <span className="text-danger">Likes:</span> {likes}{" "}
                  <FaThumbsUp className="pb-1"></FaThumbsUp>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </div>
      <div className="chef-recipes mt-5">
        {recipes.map((recipe) => (
          <SingleChefRecipe key={recipe._id} recipe={recipe}></SingleChefRecipe>
        ))}
      </div>
    </>
  );
};

export default ChefRecipes;

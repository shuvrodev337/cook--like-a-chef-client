import React from 'react';
import { Card, Col, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { FaThumbsUp } from 'react-icons/fa';
import SingleChefRecipe from '../SingleChefRecipe/SingleChefRecipe';
const ChefRecipes = () => {
    const selectedChef = useLoaderData();
    console.log(selectedChef);
    const {name,bio,picture,experience, numberof_recipes,likes, recipes} = selectedChef
    console.log(recipes);
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
            <Col >
              
              <Card.Body className="text-center mt-5">
                <Card.Title className="fw-bold text-danger fs-1">{name}</Card.Title>
                <Card.Text className="text-secondary">Bio: {bio}</Card.Text>
                <Card.Text className="text-secondary">Experiences: {experience} years.</Card.Text>
                <Card.Text className="text-secondary">Number of Recipes: {numberof_recipes}</Card.Text>
                <Card.Text className="text-secondary">Likes: {likes}  <FaThumbsUp className="pb-1"></FaThumbsUp></Card.Text>
                 
              </Card.Body>
                
            </Col>
          </Row>
        </Card>
  
        </div>
        <div className="chef-recipes mt-5">
          {
              recipes.map(recipe=><SingleChefRecipe recipe={recipe}></SingleChefRecipe>)
          }
  
        </div>
      </>
    );
};

export default ChefRecipes;
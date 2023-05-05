import React, { useState } from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { toast } from "react-toastify"


const SingleChefRecipe = ({ recipe }) => {
    const { _id, recipe_name, ingredients, cooking_method, rating, image } = recipe;
    const [favourite, setFavourite] = useState(false)
    const addToFavourite = (favouriteRecipe) =>{
        setFavourite(true)
    toast.success(`You have added ${favouriteRecipe} as you favourite!!`);
        
    }
  return (
    <Card className="border-0 shadow-lg my-3 p-4 text-center">
      <Card.Img className="w-50 mx-auto rounded" variant="top" src={image} style={{ height: "400px", objectFit: "cover" }} />
      <Card.Body className="d-flex flex-column justify-content-center">
        <Card.Title className="fs-2 fst-italic fw-bold my-3 text-semibold">Recipe Name : <span className=" text-danger">{recipe_name}</span></Card.Title>
        
          <Card.Text className="my-2 fw-bolder fs-3">Ingredients:</Card.Text>
            
          
          <ListGroup className="my-2 w-50 mx-auto">
            {
            ingredients.map((ingredient, index) => <ListGroupItem key={index} className=" text-secondary">{ingredient}</ListGroupItem>)
            }
          </ListGroup>
        <Card.Text className="my-2 fw-semibold fs-4">Cooking Method:</Card.Text>

        <Card.Text className="my-2 fw-semibold text-secondary">{cooking_method}</Card.Text>
        <Card.Text className="mt-4 fw-semibold fs-4">Rating:</Card.Text>

        <Card.Text className=" fs-4 fw-semibold text-warning"> {rating}</Card.Text>
        <Button onClick={()=>addToFavourite(recipe_name)} className={favourite? "w-25 mx-auto disabled" : "w-25 mx-auto "} variant="danger">Favourite</Button>{' '}
      </Card.Body>
    </Card>
  );
};

export default SingleChefRecipe;

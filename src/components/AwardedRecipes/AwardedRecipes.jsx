import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../assets/food1.jpg";
import image2 from "../../assets/food2.jpg";
import image3 from "../../assets/food3.webp";
const AwardedRecipes = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="container my-5">
      <h1 className="fw-bold text-center my-4">
        Here are the our Awarded Recipes!
      </h1>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide" />
          <Carousel.Caption>
            <h3>Pasta Carbonara</h3>
            <p>
            This simple Roman pasta dish derives its name from 'carbone' meaning coal. It was a pasta popular with the coal miners. The original recipe calls for guanciale, which is beef, but since its not easily available, the chef has used chicken instead.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Bruschetta</h3>
            <p>An antipasto dish, bruschetta has grilled bread topped with
              veggies, rubbed garlic and tomato mix. A country bread sliced and
              topped with different toppings - the evergreen tomato-basil and an
              inventive mushroom-garlic. The classic Italian starter!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Pizza Panne</h3>
            <p>
            Enjoy the crisp crunch of these paper thin snacks. Infused will garlic and subtle spices, you can team them up with whatever you desire or just go on a solo affair!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default AwardedRecipes;

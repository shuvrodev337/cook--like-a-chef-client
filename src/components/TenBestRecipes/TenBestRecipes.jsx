import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Marquee from "react-fast-marquee";
const TenBestRecipes = () => {
  return (
    <div className="container">
      <div className="section-heading">
        <h1 className="text-center fw-bold section-title">
          These are the Top 10 Italian Recipes you Can also explore.
        </h1>
      </div>

      <div>
        <Row xs={1} md={2} lg={2} className="g-4 mt-4">
          <Col>
            <Card className="bg-light shadow border-0 text-center h-100">
              <Card.Body>
                <Card.Title className="fw-bolder">
                  Caprese Salad with Pesto Sauce
                </Card.Title>
                <Card.Text className="fw-semibold">
                  Nothing like a fresh tomato salad in summers! A great
                  antipasto bite to start your meal with. This combination of
                  juicy tomatoes and mozzarella cheese salad topped with freshly
                  made pesto sauce is a distinct yet simple one. It offers a
                  twist to the classic caprese salad.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bg-light shadow border-0 text-center h-100">
              <Card.Body>
                <Card.Title className="fw-bolder">Panzenella</Card.Title>
                <Card.Text className="fw-semibold">
                  Panzenella is a Tuscan bread salad, ideal for summer. It does
                  not follow a particular recipe, but the two ingredients that
                  do not change are tomatoes and bread. This salad is great with
                  a chilled glass of Prosecco and lots of sunshine!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bg-light shadow border-0 text-center h-100">
              <Card.Body>
                <Card.Title className="fw-bolder">Bruschetta</Card.Title>
                <Card.Text className="fw-semibold">
                  An antipasto dish, bruschetta has grilled bread topped with
                  veggies, rubbed garlic and tomato mix. A country bread sliced
                  and topped with different toppings - the evergreen
                  tomato-basil and an inventive mushroom-garlic. The classic
                  Italian starter!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bg-light shadow border-0 text-center h-100">
              <Card.Body>
                <Card.Title className="fw-bolder">Focaccia Bread</Card.Title>
                <Card.Text className="fw-semibold">
                  Fresh dough is topped with caramelized onions, olives, tomato
                  slices, basil leaves, grated parmesan cheese and baked
                  delicious!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bg-light shadow border-0 text-center h-100">
              <Card.Body>
                <Card.Title className="fw-bolder">Pasta Carbonara</Card.Title>
                <Card.Text className="fw-semibold">
                  This simple Italian pasta dish derives its name from 'carbone'
                  meaning coal. It was a pasta popular with the coal miners. The
                  original recipe calls for guanciale, which is pig's cheek, but
                  since its not easily available, the chef has used bacon
                  instead.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bg-light shadow border-0 text-center h-100">
              <Card.Body>
                <Card.Title className="fw-bolder">Margherita Pizza</Card.Title>
                <Card.Text className="fw-semibold">
                  Fancy a pipping hot pizza, fresh out of the oven? Create one
                  at home! Margherita Pizza is to many the true Italian flag.
                  One of the most loved Italian dishes, it just takes a few
                  simple ingredients and you get insanely delicious results! You
                  just can't go wrong with that tomato, basil and fresh
                  mozzarella combo.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bg-light shadow border-0 text-center h-100">
              <Card.Body>
                <Card.Title className="fw-bolder">Mushroom Risotto</Card.Title>
                <Card.Text className="fw-semibold">
                  A plateful of buttery risotto with the goodness of mushrooms.
                  A healthy bowl of mushroom risotto has benefits more than you
                  can think. A great source of protein, powerful antioxidant and
                  even has cancer-fighting properties. This risotto recipe with
                  mushrooms is a delicious recipe besides being easy and quick!
                  Great to feed a hungry horde!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bg-light shadow border-0 text-center h-100">
              <Card.Body>
                <Card.Title className="fw-bolder">
                  Pasta Con Pomodoro E Basilico
                </Card.Title>
                <Card.Text className="fw-semibold">
                  This is the most basic and simplest cooked pasta sauce, hence
                  it is the benchmark of a good Italian home cook. This one
                  boats of being among the original Italian recipes of pasta.
                  easy and quick, this pasta recipe can be made under half an
                  hour. Serve as a breakfast, pack for kid's tiffin or savour as
                  an evening snack. You can even cook this for a casual and lazy
                  dinner and pair this up with red wine.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bg-light shadow border-0 text-center h-100">
              <Card.Body>
                <Card.Title className="fw-bolder">
                  Tiramisu - The 'pick-me-up' cake
                </Card.Title>
                <Card.Text className="fw-semibold">
                  The delightful tiramisu recipe with sponge fingers soaked in
                  coffee, layered around and smeared with a creamy mascarpone
                  mixture. The word 'tiramisu' in Italian means 'pick-me-up'.
                  Owing to its caffeine kick it sure does!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bg-light shadow border-0 text-center h-100">
              <Card.Body>
                <Card.Title className="fw-bolder"> Lasagna</Card.Title>
                <Card.Text className="fw-semibold">
                  The ultimate Italian dish has to be this recipe of Lasagna. A
                  secret to the best lasagna recipe lies in the perfectly made,
                  home made bolognese sauce and this bacon and lamb lasagna
                  boasts of a delicious one! Loaded with parmesan cheese and
                  layered with a mix of vegetables, bacon strips and minced
                  lamb, this lasagna recipe is nothing short of perfect.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

    </div>
  );
};

export default TenBestRecipes;

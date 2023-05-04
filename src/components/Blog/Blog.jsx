import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Blog = () => {
    
  return (
    <div className="container">
      <h1 className="text-center fw-bold my-4">Blog</h1>
      <div>
        <Card className="bg-light shadow border-0 text-center my-4">
          <Card.Body>
            <Card.Title className="fw-bolder">Tell us the differences between uncontrolled and controlled components?</Card.Title>
            <Card.Text className="fw-semibold">
              Controlled component does not maintain its internal state, Data is controlled by the parent component, Accepts its current value as a prop.
              But Uncontrolled component maintains its internal state, the data is controlled by the DOM itself, Uses a ref for their current values.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="bg-light shadow border-0 text-center my-4">
          <Card.Body>
            <Card.Title className="fw-bolder">How to validate React props using PropTypes?</Card.Title>
            <Card.Text className="fw-semibold">
            PropTypes is React's internal functionality to add type checking to component props. React components use a property called propTypes to set up type checking
            </Card.Text>
            <Card.Text className="fw-semibold">
            The PropTypes utility exports many validators for configuring type definitions. These are the validators for the basic data types:
            <li>PropTypes.any</li>
            <li>PropTypes.bool</li>
            <li>PropTypes.number</li>
            <li>PropTypes.string</li>
            <li>PropTypes.func</li>
            <li>PropTypes.array</li>
            <li>PropTypes.object</li>
            <li>PropTypes.symbol</li>
            </Card.Text>
            
          </Card.Body>
        </Card>
        <Card className="bg-light shadow border-0 text-center my-4">
          <Card.Body>
            <Card.Title className="fw-bolder">Tell us the difference between nodejs and express js?</Card.Title>
            <Card.Text className="fw-semibold">
            Node. js is framework of JavaScript which is used to execute JavaScript code outside of a browser. Express.js is used to develop complete web applications such as single-page, multi-page, and hybrid web applications and APIs.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="bg-light shadow border-0 text-center my-4">
          <Card.Body>
            <Card.Title className="fw-bolder">What is a custom hook, and why will you create a custom hook?</Card.Title>
            <Card.Text className="fw-semibold">
            A custom hook is a reusable function that we can apply in a react application. Custom Hooks start with "use". When we need to add any logic or functionality across multiple components, we can use that custom hook.We will create custom hook because ,they help us to save time, are reliable, reusable, and make the code clean.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Blog;

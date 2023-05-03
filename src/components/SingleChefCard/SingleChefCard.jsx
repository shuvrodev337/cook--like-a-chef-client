import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const SingleChefCard = ({chef}) => {
    const {name,picture, experience,likes} = chef
    console.log(picture);
    return (
        
          <Col>
            <Card className='bg-light shadow border-0 text-center'>
                <div className='p-3 w-75   mx-auto'>

              <Card.Img className='h-100  rounded' variant="top" src={picture} />
                </div>
              <Card.Body>
                <Card.Title className='fw-bolder'>{name}</Card.Title>
                <Card.Text className='fw-semibold'>
                  {experience} years experience.
                </Card.Text>
                <Card.Text className='fw-semibold'>
                  {likes} Likes.
                </Card.Text>
                <Button variant="danger">See Recipes</Button>{' '}
              </Card.Body>
            </Card>
          </Col>
        
    
    );
};

export default SingleChefCard;
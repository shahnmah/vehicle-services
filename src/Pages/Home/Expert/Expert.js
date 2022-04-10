import React from 'react';
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';

const Expert = ({ expert }) => {
    const { name, img } = expert
    return (
        <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Book Now</Button>
                </Card.Body>
            </Card>
        </div>

    );
};

export default Expert;
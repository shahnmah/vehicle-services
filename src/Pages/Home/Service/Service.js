import React from 'react';
import './Service.css'
import { Button } from 'react-bootstrap';

const Service = ({service}) => {
    const {name, price, description, img} = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <div className="details">
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <Button variant="primary">Book Now</Button>
            </div>
        </div>
    );
};

export default Service;
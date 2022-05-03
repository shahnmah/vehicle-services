import React from 'react';
import './Service.css'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const {_id, name, price, description, img } = service;

    const navigate = useNavigate()
    const navigateServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <div className="details">
                <h3>{name}</h3>
                <p>Price: {price}</p>
                <p><small>{description}</small></p>
                <Button onClick={() => navigateServiceDetail(_id)} variant="primary">Book Now</Button>
            </div>
        </div>
    );
};

export default Service;
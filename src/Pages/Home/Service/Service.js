import React from 'react';
import './Service.css'
const Service = ({service}) => {
    const {name, price, description, img} = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <div className="details">
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button>Book Now</button>
            </div>
        </div>
    );
};

export default Service;
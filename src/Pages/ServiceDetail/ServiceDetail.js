import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams()
    return (
        <div>
            <h2>Welcome to Detail Information {serviceId}</h2>
            <div className='text-center'>
                <Link to='/checkout'>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;
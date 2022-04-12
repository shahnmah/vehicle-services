import React from 'react';
import notfoundImg from '../../../images/404.jpg'
const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>Page Not Found</h2>
            <img width='100%' src={notfoundImg} alt="" />
        </div>
    );
};

export default NotFound;
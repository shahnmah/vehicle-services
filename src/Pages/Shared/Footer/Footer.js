import React from 'react';
import './Footer.css'


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center bg-light py-3'>
            <p><small>Copyright &copy; {year} </small></p>
        </footer>
    );
};

export default Footer;
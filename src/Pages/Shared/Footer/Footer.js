import React from 'react';
import './Footer.css'


const Footer = () => {
    let getYear = () => {
        let currentYear = new Date().getFullYear();
        return currentYear;
    };
    return (
        <footer>
            <p><small>Copyright &copy; {getYear()} </small></p>
        </footer>
    );
};

export default Footer;
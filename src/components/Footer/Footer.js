import React from 'react';
import './Footer.css';


const Footer = ({ footerText }) => {

    return (
        <div className='footer__main'>

            {footerText}

        </div>
    );
}

export default Footer;

import React from 'react';
import './Header.css';

const Header = ({headerText}) => {
    return (
        <div className='header__main'>
            {headerText}
        </div>
    );
}

export default Header;

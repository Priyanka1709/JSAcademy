import React from "react";
import { Link } from 'react-router-dom';

const Header= (props) => {
    return (
        <header>
            <nav className="navbar navbar-default">
                 <div className="navbar-header">
                    <img src= "images/saxobank.jpg" alt="Image not supported"/>
                </div>
                <ul className="nav navbar-nav">
                    <li><Link to={`/home`}>Home</Link></li>
                    <li><Link to={`/about`}>About Us</Link></li>
                    <li><Link to={`/contact`}>Contact Us</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
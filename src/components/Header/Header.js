import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="logo">
                    <h1><a href="/home">P.Hero</a></h1>
                </div>
                <nav className="nav-bar">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/team">Our Community</a></li>
                    <li><a href="/contact">Contact us</a></li>
                    <li><a href="/blog">Blog</a></li>
                </nav>
            </div>
        </div>
    );
};

export default Header;
import React from 'react';
import './Header.css'; // For styling (optional)

const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <a href="/">Unit Ops Media</a>
                </div>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

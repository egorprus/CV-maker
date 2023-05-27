import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
    return (
        <div className="header-wrapper">
            <header className="header container">
                <nav className="navigation">
                    <ul className="navigation__list">
                        <li className="navigation__link">
                            <Link to="/">Main</Link>
                        </li>
                        <li className="navigation__link">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="navigation__link">
                            <Link to="/resume">CV</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
};

export default Header;
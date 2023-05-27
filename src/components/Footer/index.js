import React from 'react';
import './style.css';

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <footer className="footer container">
                <div className="social">
                    <ul className="social__list">
                        <li className="social__link">
                            <a href="https://www.linkedin.com/in/egor-prus-nik/">linkedin</a>
                        </li>
                        <li className="social__link">
                            <a href="https://telegram.me/pruswayne" target="_blank" rel="noreferrer">Telegram</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
};

export default Footer;
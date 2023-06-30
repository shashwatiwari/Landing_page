import React from 'react';

const Footer = () => {
    return (
        <footer className="footer" id='footer'>
            <nav>
                <ul className="navigation">
                    <li><a href="#terms">Terms of Service</a></li>
                    <li><a href="#privacy">Privacy Policy</a></li>
                    <li><a href="#faq">FAQs</a></li>
                </ul>
            </nav>
            <p>&copy; 2023 Your E-commerce Website. All rights reserved.</p>
            {/* Optionally, include badges or certifications */}
        </footer>
    );
};

export default Footer;

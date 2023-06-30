import React from 'react';

const AboutUs = () => {
    const containerStyle = {
        display: 'flex',
        // alignItems: 'center'
    };

    const paragraphStyle = {
        marginRight: '20px'
    };
    return (
        <section className="about-us" id='about'>
            <h2>About Us</h2>
            <div style={containerStyle}>
                <p style={paragraphStyle}>At Freshlo, we are passionate about delivering the freshest groceries to your doorstep. Our mission is to provide a seamless online shopping experience, making it easy for you to access high-quality products and enjoy the convenience of home delivery. With our commitment to freshness, quality, and customer satisfaction, Freshlo is your trusted partner for all your grocery needs.<br></br><br></br>At Freshlo, we are passionate about delivering the freshest groceries to your doorstep. Our mission is to provide a seamless online shopping experience, making it easy for you to access high-quality products and enjoy the convenience of home delivery. With our commitment to freshness, quality, and customer satisfaction, Freshlo is your trusted partner for all your grocery needs.</p>
                <img src={process.env.PUBLIC_URL + '/aboutus.png'} alt="aboutus" />
            </div>
        </section>
    );
};

export default AboutUs;

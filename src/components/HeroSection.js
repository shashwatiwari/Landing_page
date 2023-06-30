import React from 'react';

const HeroSection = () => {
    const styles = {
        color: 'white',
        fontSize: '48px'
    };
    return (
        <section className="hero" id='hero'>
            <div className="hero-content" >
                <h1 style={styles}>Freshlo</h1>
                <h1>Discover Freshness in Every Bite!</h1>
                <p>Emphasize the quality and health benefits of your products.</p>
                <button className="cta-button">Browse Products</button>
            </div>
            {/* <div className='background'><img src='/front.jpg.png' alt='background'></img></div> */}
            {/* Add the visually appealing background image or slider */}
        </section>
    );
};

export default HeroSection;

import React from 'react';

const ProductFeatures = () => {
    return (
        <section className="product-features" id='products'>
            <h2>Pricing</h2>
            <div style={{ display: 'flex' }}>
                <img src={process.env.PUBLIC_URL + '/pricing_1.png'} alt='pricing_1' ></img>
                <img src={process.env.PUBLIC_URL + '/pricing_2.png'} alt='pricing_2' ></img>
                <img src={process.env.PUBLIC_URL + '/pricing_3.png'} alt='pricing_3' ></img>
            </div>
            {/* Create a grid or carousel to showcase product categories */}
            {/* Highlight unique selling points with images and descriptions */}
        </section>
    );
};

export default ProductFeatures;

import React from 'react';

const Contact = () => {
    return (
        <section className="contact" id='contact'>
            <div>
                <img src={process.env.PUBLIC_URL + '/get_in_touch.png'} alt='find it'></img>
            </div>
            {/* Add a contact form for visitors to submit inquiries or feedback */}
            {/* Display contact information, such as email, phone, and address */}
            {/* Optionally, include links to social media profiles */}
        </section>
    );
};

export default Contact;

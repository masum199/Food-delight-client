import React from 'react';
import image from '../../../public/chicken.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-container py-5">
            <div className="row">
                <div className="col-md-6 banner-text">
                    <h1 className="banner-title fw-bold">We Provide The Best Quality Foods</h1>
                    <p className="banner-description">Experience the taste of our exquisite dishes made from the freshest ingredients.</p>
                    <button className="banner-button btn btn-primary">View Menu</button>
                </div>
                <div className="col-md-6">
                    <img src={image} alt="Delicious Food" className="banner-img img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
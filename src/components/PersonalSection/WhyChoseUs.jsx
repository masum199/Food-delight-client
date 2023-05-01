import React from 'react';
import image from '../../../public/dele1.jpg'
import './WhyChosseUs.css'
import image2 from '../../../public/dele2.jpg'
import image3 from '../../../public/dele3.jpg'
import image4 from '../../../public/dele4.jpg'
const WhyChoseUs = () => {
    return (
        <div>
            <div className='container mt-5 mb-5'>
                <div className='text-center'>
                <h1 className='fw-bold'>Why chose us</h1>
                <p>We strive to provide our customers with the best possible experience.
            Our services are unmatched.</p>
                </div>
                <div className='bg-warning'>
                <div className='d-md-flex gap-5 container p-4'>
                    <div>
                    <img className="deleImage img-fluid" src={image} alt="" />
                    </div>
                    <div className='ps-5'>
                    <div>
                        <img className='delevery-image1' src={image2} alt="" />
                        <h4>Fastest Delivery</h4>
                        <p>Our delivery service is quick and efficient, ensuring that your
                  food arrives hot and fresh.</p>
                    </div>
                    <div>
                        <img className='delevery-image1' src={image3} alt="" />
                        <h4>Delicious Taste</h4>
                        <p> Our chefs use the freshest ingredients to create mouth-watering
                  dishes that are sure to please your taste buds.</p>
                    </div>
                    <div>
                        <img className='delevery-image1' src={image4} alt="" />
                        <h4>Easy to Order</h4>
                        <p> Our online ordering system is user-friendly and simple to use,
                  making it easy for you to place your order in just a few clicks.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoseUs;
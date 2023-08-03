import React from 'react';
import './WhyChosseUs.css';

const WhyChooseUs = () => {
  return (
    <div className='why-choose-us-container my-5'>
      <div className='why-choose-us-header'>
        <h1 className='why-choose-us-heading'>Why Choose Us</h1>
        <p className='why-choose-us-subheading'>We strive to provide our customers with the best possible experience. Our services are unmatched.</p>
      </div>
      <div className='why-choose-us-row'>
        <div className='why-choose-us-col why-choose-us-image-col'>
          <img className='why-choose-us-image container' src='https://cdn.pixabay.com/photo/2018/05/15/09/01/foodora-3402507__340.jpg' alt='' />
        </div>
        <div className='why-choose-us-col why-choose-us-info-col'>
          <div className='why-choose-us-info why-choose-us-fastest-delivery'>
            <h2 className='why-choose-us-info-heading'>Fastest Delivery</h2>
            <p className='why-choose-us-info-text'>Our delivery service is quick and efficient, ensuring that your food arrives hot and fresh.</p>
          </div>
          <div className='why-choose-us-info why-choose-us-delicious-taste'>
            <h2 className='why-choose-us-info-heading'>Delicious Taste</h2>
            <p className='why-choose-us-info-text'>Our chefs use the freshest ingredients to create mouth-watering dishes that are sure to please your taste buds.</p>
          </div>
          <div className='why-choose-us-info why-choose-us-easy-to-order'>
            <h2 className='why-choose-us-info-heading'>Easy to Order</h2>
            <p className='why-choose-us-info-text'>Our online ordering system is user-friendly and simple to use, making it easy for you to place your order in just a few clicks.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
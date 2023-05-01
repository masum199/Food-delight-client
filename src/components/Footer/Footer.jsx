import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-dark text-white py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>We are passionate about food and bringing people together to enjoy it. Our mission is to provide high-quality, delicious meals that everyone can enjoy.</p>
          </div>
          <div className="col-md-4">
            <h5>Menu</h5>
            <ul className="list-unstyled">
             
              <li>Appetizers</li>
              <li>Entrees</li>
              <li>Desserts</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>123 Main Street<br />Comilla, BD<br />Phone: 1234567890<br />Email: info@foodie.com</p>
          </div>
        </div>
      </div>
    </footer>
        </div>
    );
};

export default Footer;
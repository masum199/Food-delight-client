import React from 'react';
import './Footer.css';
import { FaFacebook, FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer-container p-5">
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h2>About Us</h2>
                            <p>We are passionate about food and bringing people together to enjoy it. Our mission is to provide .</p>
                            <div>
                              <FaFacebook size={40}></FaFacebook>
                              <FaInstagram className='mx-3' size={40}></FaInstagram>
                              <FaTwitter size={40}></FaTwitter>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <h2>Support</h2>
                            <ul className="list-unstyled">
                                <li>Account</li>
                                <li>Support Center</li>
                                <li>Feedback</li>
                                <li>Accebility</li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h2>Menu</h2>
                            <ul className="list-unstyled">
                                <li>Appetizers</li>
                                <li>Entrees</li>
                                <li>Desserts</li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h2>Useful Links</h2>
                            <ul className="list-unstyled">
                                <li>Payment & Task</li>
                                <li>Terms of Service</li>
                                <li>Privacy & policy</li>
                                <li>About Us</li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h2>Contact Us</h2>
                            <p>123 Main Street<br />Comilla, BD<br />Phone: 1234567890<br />Email: info@foodie.com</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
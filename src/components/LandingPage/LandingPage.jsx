import React from 'react';
import Banner from '../Banner/Banner';
import Chief from '../Chief/Chief';

import WhyChoseUs from '../PersonalSection/WhyChoseUs';
import SpecialMenu from '../SpecialMenu/SpecialMenu';

const LandingPage = () => {
    return (
        <div>
        <Banner></Banner>
        <Chief></Chief>
        <SpecialMenu></SpecialMenu>
        <WhyChoseUs></WhyChoseUs>
        </div>
    );
};

export default LandingPage;
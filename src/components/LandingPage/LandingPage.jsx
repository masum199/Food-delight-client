import React from 'react';
import Banner from '../Banner/Banner';


import WhyChoseUs from '../PersonalSection/WhyChoseUs';
import SpecialMenu from '../SpecialMenu/SpecialMenu';
import { useLoaderData } from 'react-router-dom';
import Chief from '../Chief/Chief';

const LandingPage = () => {
    const chiefs = useLoaderData()
    return (
        <div>
        <Banner></Banner>
       <div className='row row-cols-1 row-cols-md-3 g-4 my-5 container mx-auto'>
       {
            chiefs.map(chief=><Chief chief={chief} 
            key={chief.id}></Chief>)
        }
       </div>
        <SpecialMenu></SpecialMenu>
        <WhyChoseUs></WhyChoseUs>
        </div>
    );
};

export default LandingPage;
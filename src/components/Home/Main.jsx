import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Main.css'

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            
            <Outlet></Outlet>
           
            <Footer></Footer>

        </div>
    );
};

export default Main;
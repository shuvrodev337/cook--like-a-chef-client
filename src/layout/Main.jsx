import React from 'react';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className='container'>
            <Outlet></Outlet>
            </div>
            <div className='d-flex flex-column min-vh-100'>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;
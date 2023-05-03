import React from 'react';
import Banner from '../Banner/Banner';
import Chefs from '../Chefs/Chefs';

const Home = () => {
    return (
        <div>
            <h1 className='text-center fe-bold fs-1 my-4'>Cook like a Chef</h1>
            <Banner></Banner>
            <Chefs></Chefs>
        </div>
    );
};

export default Home;
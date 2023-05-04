import React from 'react';
import Banner from '../Banner/Banner';
import Chefs from '../Chefs/Chefs';
import AwardedRecipes from '../AwardedRecipes/AwardedRecipes';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs>
            <AwardedRecipes></AwardedRecipes>
        </div>
    );
};

export default Home;
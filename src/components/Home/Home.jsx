import React from 'react';
import Banner from '../Banner/Banner';
import Chefs from '../Chefs/Chefs';
import AwardedRecipes from '../AwardedRecipes/AwardedRecipes';
import TenBestRecipes from '../TenBestRecipes/TenBestRecipes';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs>
            <AwardedRecipes></AwardedRecipes>
            <TenBestRecipes></TenBestRecipes>
        </div>
    );
};

export default Home;
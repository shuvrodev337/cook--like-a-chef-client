import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Recipes = () => {
    const selectedChef = useLoaderData()
    return (
        <div>
           <h2> this is {selectedChef.name}</h2>
        </div>
    );
};

export default Recipes;
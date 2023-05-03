import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Recipes = () => {
    const selectedChef = useLoaderData()
    return (
        <div>
            this is {selectedChef.name}
        </div>
    );
};

export default Recipes;
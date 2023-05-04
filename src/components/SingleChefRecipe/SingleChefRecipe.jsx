import React from 'react';

const SingleChefRecipe = ({recipe}) => {
    return (
        <div>
            <h1>{recipe.recipe_name}</h1>
        </div>
    );
};

export default SingleChefRecipe;
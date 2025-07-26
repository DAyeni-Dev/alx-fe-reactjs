import React from 'react';
import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) => state.favorites);

  return (
    <div>
      <h2>Favorite Recipes</h2>
      <ul>
        {favorites.map((recipe) => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;

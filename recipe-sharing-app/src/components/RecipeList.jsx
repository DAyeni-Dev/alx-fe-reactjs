import React from 'react';
import { useRecipeStore } from './recipeStore';
import RecipeCard from './RecipeCard';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div className="recipe-list">
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </Link>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;

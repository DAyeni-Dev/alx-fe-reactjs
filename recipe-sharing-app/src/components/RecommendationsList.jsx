import React, { useEffect } from 'react';
import { useRecipeStore } from '../components/recipeStore';

const RecommendationsList = () => {
  const { recommendations, generateRecommendations } = useRecipeStore();

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (recommendations.length === 0) {
    return <p>No recommendations available </p>;
  }

  return (
    <div>
      <h2> Recommended for You</h2>
      <ul>
        {recommendations.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationsList;

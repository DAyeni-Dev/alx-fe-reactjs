import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data || []);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-yellow-600 mb-10">
        Recipe Sharing Platform
      </h1>

      <div className="grid gap-8 grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
        {recipes.map((recipe) => (
          <Link
            to={`/recipe/${recipe.id}`}
            key={recipe.id}
            className="block bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-5 flex flex-col justify-between h-40">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-1">
                  {recipe.name}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {recipe.description}
                </p>
              </div>

              <div className="mt-3">
                <span className="inline-block px-3 py-1 bg-yellow-500 text-white rounded-lg text-sm">
                  View Recipe
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import data from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const found = (data || []).find((r) => String(r.id) === String(id));
    setRecipe(found || null);
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-xl text-center">
          <h2 className="text-2xl font-semibold mb-4">Recipe not found</h2>
          <p className="text-gray-600 mb-6">
            We couldn't find that recipe. It may have been removed or the ID is
            invalid.
          </p>
          <div className="flex justify-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Go back
            </button>
            <Link
              to="/"
              className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const { name, image, description, ingredients, instructions } = recipe;

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="md:flex">
         
          <div className="md:w-1/2">
            <img
              src={image}
              alt={name}
              className="w-full h-80 object-cover"
            />
          </div>

         
          <div className="md:w-1/2 p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-3">{name}</h1>
            <p className="text-gray-600 mb-5">{description}</p>

            <div className="space-y-6">

              <section>
                <h3 className="text-xl font-semibold mb-3">Ingredients</h3>
                {Array.isArray(ingredients) && ingredients.length > 0 ? (
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {ingredients.map((ing, idx) => (
                      <li key={idx}>{ing}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">No ingredient list provided.</p>
                )}
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Cooking Steps</h3>
                {Array.isArray(instructions) && instructions.length > 0 ? (
                  <ol className="list-decimal list-inside text-gray-700 space-y-2">
                    {instructions.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ol>
                ) : (
                  <p className="text-gray-500">No instructions provided.</p>
                )}
              </section>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => navigate(-1)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Back
              </button>
              <Link
                to="/"
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;

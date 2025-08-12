import { useState } from "react";

export default function AddRecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !ingredients.trim() || !steps.trim()) {
      setError("All fields are required!");
      return;
    }

    if (ingredients.split(",").length < 2) {
      setError("Please include at least two ingredients.");
      return;
    }

    setError("");

   
    onAddRecipe({
      title,
      ingredients: ingredients.split(",").map((item) => item.trim()),
      steps,
    });

   
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg space-y-4"
    >
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        Add New Recipe
      </h2>

      {error && <p className="text-red-500 text-center">{error}</p>}

     
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Recipe Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="e.g., Chicken Tikka Masala"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Ingredients (separate with commas)
        </label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          rows="3"
          placeholder="e.g., chicken, yogurt, spices"
        ></textarea>
      </div>

      
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Preparation Steps
        </label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          rows="5"
          placeholder="Describe the steps here..."
        ></textarea>
      </div>

      
      <button
        type="submit"
        className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition-colors"
      >
        Submit Recipe
      </button>
    </form>
  );
}

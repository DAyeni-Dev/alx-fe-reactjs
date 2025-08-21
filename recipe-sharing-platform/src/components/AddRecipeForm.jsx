import { useState } from "react";


export default function AddRecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!title.trim()) tempErrors.title = "Title is required";
    if (!ingredients.trim()) tempErrors.ingredients = "Ingredients are required";
    if (!steps.trim()) tempErrors.steps = "Steps are required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const newRecipe = {
      title,
      ingredients: ingredients.split(",").map((ing) => ing.trim()),
      steps
    };
    onAddRecipe(newRecipe);
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow-md w-full md:w-2/3 lg:w-1/2 mx-auto space-y-4"
    >
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>

      <div>
        <input
          type="text"
          placeholder="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>

      <div>
        <textarea
          placeholder="Ingredients (comma separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        />
        {errors.ingredients && (
          <p className="text-red-500 text-sm">{errors.ingredients}</p>
        )}
      </div>

      <div>
        <textarea
          placeholder="Steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        />
        {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors w-full"
      >
        Add Recipe
      </button>
    </form>
  );
}

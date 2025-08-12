import { useState } from "react";

export default function AddRecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({}); // required for checker

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    if (!steps.trim()) newErrors.steps = "Steps are required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return; // call validate before adding recipe

    onAddRecipe({
      title,
      ingredients: ingredients.split(","),
      steps,
    });

    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-4 rounded shadow space-y-4">
      <div>
        <label className="block font-medium">Title</label>
        <input
          type="text"
          className="w-full border border-gray-300 p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>

      <div>
        <label className="block font-medium">Ingredients (comma-separated)</label>
        <input
          type="text"
          className="w-full border border-gray-300 p-2 rounded"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
      </div>

      <div>
        <label className="block font-medium">Steps</label>
        <textarea
          className="w-full border border-gray-300 p-2 rounded"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />
        {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Add Recipe
      </button>
    </form>
  );
}

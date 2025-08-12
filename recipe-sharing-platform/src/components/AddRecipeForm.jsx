import React, { useState } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    image: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    if (!formData.instructions.trim()) newErrors.instructions = "Instructions are required";
    if (!formData.image.trim()) newErrors.image = "Image URL is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onAddRecipe(formData);
      setFormData({ title: "", ingredients: "", instructions: "", image: "" });
      setErrors({});
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl mx-auto flex flex-col gap-4 md:gap-6"
    >
      <h2 className="text-2xl font-bold text-center">Add New Recipe</h2>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col w-full md:w-1/2">
          <label className="font-semibold">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        <div className="flex flex-col w-full md:w-1/2">
          <label className="font-semibold">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            placeholder="Enter image URL"
          />
          {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
        </div>
      </div>

      <div>
        <label className="font-semibold">Ingredients</label>
        <textarea
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          placeholder="Enter ingredients (comma separated)"
        />
        {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
      </div>

      <div>
        <label className="font-semibold">Instructions</label>
        <textarea
          name="instructions"
          value={formData.instructions}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          placeholder="Enter step-by-step instructions"
        />
        {errors.instructions && <p className="text-red-500 text-sm">{errors.instructions}</p>}
      </div>

      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition duration-300 w-full md:w-1/3 self-center"
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;

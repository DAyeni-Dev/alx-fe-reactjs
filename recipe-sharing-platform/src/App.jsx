import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  const [recipes, setRecipes] = useState([]);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([newRecipe, ...recipes]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gray-100 p-4">
              <AddRecipeForm onAddRecipe={handleAddRecipe} />
              {/* Display Recipes */}
              <div className="max-w-3xl mx-auto mt-8 space-y-4">
                {recipes.map((recipe, index) => (
                  <div key={index} className="bg-white p-4 rounded shadow">
                    <h3 className="text-xl font-bold">{recipe.title}</h3>
                    <p className="text-sm text-gray-600">
                      Ingredients: {recipe.ingredients.join(", ")}
                    </p>
                    <p className="mt-2">{recipe.steps}</p>
                  </div>
                ))}
              </div>
            </div>
          }
        />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

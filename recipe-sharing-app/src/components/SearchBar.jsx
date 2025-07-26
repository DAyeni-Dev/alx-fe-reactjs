import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  
  useEffect(() => {
    filterRecipes();
  }, [useRecipeStore.getState().searchTerm]);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleChange}
      style={{ padding: '10px', width: '100%', marginBottom: '1rem' }}
    />
  );
};

export default SearchBar;

import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),

  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
      filteredRecipes: [...state.recipes, recipe],
    })),

  updateRecipe: (updatedRecipe) => {
    const updatedList = get().recipes.map((r) =>
      r.id === updatedRecipe.id ? updatedRecipe : r
    );
    set({
      recipes: updatedList,
      filteredRecipes: updatedList,
    });
  },

  deleteRecipe: (id) => {
    const updated = get().recipes.filter((r) => r.id !== id);
    set({
      recipes: updated,
      filteredRecipes: updated,
      favorites: get().favorites.filter((favId) => favId !== id),
    });
  },

  filterRecipes: (searchTerm) =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((r) =>
        r.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    })),

  addFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.includes(id)
        ? state.favorites
        : [...state.favorites, id],
    })),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((favId) => favId !== id),
    })),

  generateRecommendations: () => {
    const state = get();
    const nonFavoriteRecipes = state.recipes.filter(
      (r) => !state.favorites.includes(r.id)
    );
    const shuffled = nonFavoriteRecipes.sort(() => 0.5 - Math.random());
    set({ recommendations: shuffled.slice(0, 3) });
  },
}));

import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  favorites: [],
  recommendations: [],
  searchTerm: '',

  setRecipes: (recipes) =>
    set({ recipes, filteredRecipes: recipes }),

  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
      filteredRecipes: [...state.filteredRecipes, recipe],
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedList = state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      );
      return {
        recipes: updatedList,
        filteredRecipes: updatedList,
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updated = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: updated,
        filteredRecipes: updated,
        favorites: state.favorites.filter((favId) => favId !== id),
      };
    }),

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(term);
  },

  filterRecipes: (term) =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((r) =>
        r.title.toLowerCase().includes(term.toLowerCase())
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
    const top3 = shuffled.slice(0, 3);
    set({ recommendations: top3 });
  },
}));
export default useRecipeStore;
import axios from 'axios';
const token = import.meta.env.VITE_GITHUB_TOKEN;

const headers = {
  Authorization: `Bearer ${token}`,
};


export const fetchUsersByQuery = async (query) => {
  const url = `https://api.github.com/search/users?q=${query}`;
  const headers = {};
  const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await axios.get(url, { headers });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching users by query:', error);
    throw error;
  }
};

export const fetchUserData = async (username) => {
  const url = `https://api.github.com/users/${username}`;
  const headers = {};
  const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

export const fetchUsersWithFilters = async (searchTerm, location, minRepos) => {
  let query = `${searchTerm}`;

  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${query}`;
  const headers = {};
  const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await axios.get(url, { headers });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching users with filters:', error);
    throw error;
  }
};





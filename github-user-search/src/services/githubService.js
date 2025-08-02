import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const fetchUsersByQuery = async (query) => {
  const url = `${BASE_URL}/search/users?q=${encodeURIComponent(query)}`;
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
  const url = `${BASE_URL}/users/${encodeURIComponent(username)}`;
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

  const url = `${BASE_URL}/search/users?q=${encodeURIComponent(query)}`;
  const headers = {};

  const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await axios.get(url, { headers });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching filtered users:', error);
    throw error;
  }
};

import React, { useState } from 'react';
import { fetchUserData, fetchUsersWithFilters } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [userDetail, setUserDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAdvancedSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUsers([]);
    setUserDetail(null);

    try {
      const results = await fetchUsersWithFilters(username, location, minRepos);
      if (!results.length) {
        setError('Looks like we cant find the user');
      } else {
        setUsers(results);
      }
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  const handleDirectSearch = async () => {
    setLoading(true);
    setError('');
    setUserDetail(null);
    setUsers([]);

    try {
      const result = await fetchUserData(username);
      setUserDetail(result);
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">GitHub User Search</h1>

      <form onSubmit={handleAdvancedSearch} className="grid gap-4 bg-white shadow-md rounded p-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="GitHub Username"
          className="border px-4 py-2 rounded"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location (e.g., Nigeria)"
          className="border px-4 py-2 rounded"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum Repositories"
          className="border px-4 py-2 rounded"
        />
        <div className="flex space-x-2">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
          >
            Advanced Search
          </button>
          <button
            type="button"
            onClick={handleDirectSearch}
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 w-full"
          >
            Search by Username
          </button>
        </div>
      </form>

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center mt-4 text-red-600">{error}</p>}

      {userDetail && (
        <div className="mt-6 border rounded p-4 bg-gray-50 shadow">
          <img src={userDetail.avatar_url} alt="Avatar" className="w-20 h-20 rounded-full mb-2" />
          <p><strong>Name:</strong> {userDetail.name || 'No name provided'}</p>
          <p><strong>Username:</strong> {userDetail.login}</p>
          <p><strong>Bio:</strong> {userDetail.bio || 'No bio'}</p>
          <p><strong>Location:</strong> {userDetail.location || 'Unknown'}</p>
          <a href={userDetail.html_url} className="text-blue-500 hover:underline" target="_blank" rel="noreferrer">
            View Full Profile
          </a>
        </div>
      )}

      {users.length > 0 && (
        <div className="mt-6 grid gap-4">
          {users.map((user) => (
            <div key={user.id} className="flex items-center space-x-4 p-4 border rounded shadow">
              <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
              <div>
                <p className="font-bold">{user.login}</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;

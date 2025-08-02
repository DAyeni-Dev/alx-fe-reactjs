
import React from 'react';
import Search from './components/Search';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-center p-8">
      <h1 className="text-3xl font-bold mb-4">GitHub User Search</h1>
      <p className="mb-6 text-gray-600">Start typing a GitHub username to search...</p>
      <Search />
    </div>
  );
}

export default App;

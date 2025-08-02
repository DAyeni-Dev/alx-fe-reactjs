import React from 'react';
import Search from './components/Search';


function App() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>GitHub User Search</h1>
      <p>Start typing a GitHub username to search...</p>
    </div>
  );
  return (
    <div>
      <h1 style={{ textAlign: 'center', paddingTop: '2rem' }}>GitHub User Search</h1>
      <Search />
    </div>
  );
}

export default App;


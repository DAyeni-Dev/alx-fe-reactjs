
import { useState } from 'react';
import UserContext from './components/UserContext';
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  const [user] = useState({
    name: 'Alice',
    age: 25,
    bio: 'Loves hiking and photography.',
  });

  return (
    <UserContext.Provider value={user}>
      <>
        <WelcomeMessage />
        <Header />
        <MainContent />
        <UserProfile />
        <Footer />
      </>
    </UserContext.Provider>
  );
}

export default App;

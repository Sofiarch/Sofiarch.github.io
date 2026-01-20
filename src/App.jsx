import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home'; // Import the new page

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <NavBar />
      
      <main className="flex-grow">
        <Home />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
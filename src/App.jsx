import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />

      <div className="min-h-screen flex flex-col pt-16"> {/* pt-16 offsets fixed NavBar */}
        <main className="flex-grow flex items-center justify-center">
            
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App


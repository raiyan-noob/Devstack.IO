import React from 'react';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechnologyGrid from './components/TechnologyGrid'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
     <Hero />
     <TechnologyGrid />
     <Footer />
     <ToastContainer position="top-right" autoClose={1500} />
    </div>
  );
};

export default App;
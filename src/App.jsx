import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoadingPage from './components/LoadingPage';
import Header from './components/Header';
import LocationInput from './components/LocationInput';
import ThreeDModels from './components/ThreeDModels';
import CTA from './components/CTA';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import SingleModel from './components/SingleModel';
import DriverDashboard from './components/Login/DriverDashboard';

import './App.css';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAssets = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 5000));
        setLoading(false);
      } catch (error) {
        console.error('Error loading assets:', error);
        setLoading(false);
      }
    };

    loadAssets();  
  }, []);

  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen relative">
        {loading && (
          <div className="absolute inset-0 z-50">
            <LoadingPage />
          </div>
        )}

        <div className={loading ? 'opacity-0 pointer-events-none' : 'opacity-100'}>
          <Routes>
            {/* Home Route */}
            <Route path="/" element={
              <>
                <Header />
                <SingleModel />
                <LocationInput />
                <ThreeDModels />
                <CTA />
                <Testimonials />
                <Footer />
              </>
            } />
            
            {/* Driver Dashboard Route */}
            <Route path="/driver" element={<DriverDashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

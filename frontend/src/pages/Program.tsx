
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import '../pages-3/Program1.css';
import Calculate from '../pages-3/Calculate';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Program = () => {
  // Function to handle opening local file

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      

<div className='contents'>
    <div className="header">
      <h1>Program</h1>
      <p>Welcome to the Program section. Fuel your body with proper nutrition!</p>
      <div className="images-container">
        <img src="https://images.unsplash.com/photo-1546069901-eacef0df6022" alt="Healthy Salad" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjHArZFmC9vryb8PDEzB_M-FjvU8kiPdsG7A&s" alt="Smoothie" />
        <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90" alt="Healthy Drink" />
      </div>
    </div>

    
    <div className='nub'>
      <h1>🥗 Calorie Calculator for 3 Meals</h1>
      <div id="meals"></div>
    </div>
</div>

<div className='calcu'>
  <Calculate />
</div>
      
      <Footer />
    </div>
  );
};

export default Program;

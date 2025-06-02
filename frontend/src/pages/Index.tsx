
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import "../pages-6/Home.css";

const Index = () => {


  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="wall">
        <div id="pic">
          <img src="https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/hero/exercises.jpg" alt="Home Page" />
        </div>
          <div className='paper'>
            <h2>Exercise Video Databse</h2>
            <p>The largest and most comprehensive database of free video exercise guides! Learn how to perform exercises using correct technique.</p>
          </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;

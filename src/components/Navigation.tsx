
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const navItems = [
    { name: "TandN", path: "/tandn" },
    { name: "Exercise", path: "/exercise" },
    { name: "Cardio", path: "/cardio" },
    { name: "Program", path: "/program" },
    { name: "Food", path: "/food" },
    { name: "Community", path: "/" },
    { name: "FreeFitness", path: "/freefitness" },
  ];

  return (
    <>
      <div className="bg-black bg-opacity-75 text-white text-center py-12 px-4">
        <h1 className="text-5xl font-bold m-0">Fitness Hub</h1>
        <h2 className="text-2xl font-light mt-2">Your Gateway to Health & Strength</h2>
      </div>
      
      <div className="bg-black bg-opacity-50 mx-auto my-8 p-5 max-w-3xl rounded-lg">
        <p className="text-white">
          Welcome to the Fitness Hub — your all-in-one destination for workouts, nutrition, programs, and community! Click on a section below to explore more.
        </p>
      </div>
      
      <div className="flex justify-center flex-wrap container mx-auto px-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`
              flex-1 py-4 px-0 text-center text-white font-medium transition-transform duration-300 hover:scale-105 
              min-w-[120px] bg-black border-2 border-purple-600 rounded-md m-1
              ${currentPath === item.path ? 'bg-opacity-80' : 'bg-opacity-100'}
            `}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navigation;

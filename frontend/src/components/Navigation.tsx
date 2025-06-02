
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const navItems = [
    { name: "TandN", path: "/" },
    { name: "Exercise", path: "/exercise" },
    { name: "Cardio", path: "/cardio" },
    { name: "Program", path: "/program" },
    { name: "Food", path: "/food" },
    { name: "Community", path: "/community" },
    { name: "FreeFitness", path: "/freefitness" },
  ];

  return (
    <>
      <div className="bg-fitness-orange text-white text-center py-6">
        <h1 className="text-4xl font-bold tracking-wide">Fitness Hub Community</h1>
      </div>
      <nav className="flex bg-fitness-navy">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex-1 py-4 text-center text-white font-medium transition-colors duration-200 hover:bg-fitness-orange
            ${currentPath === item.path ? 'bg-fitness-orange' : ''}`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Navigation;


import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
      <div className="bg-fitness-orange text-white text-center py-6">
        <h1 className="text-4xl font-bold tracking-wide">Fitness Hub Community</h1>
      </div>
      <div className="w-full bg-fitness-navy">
        <div className="container mx-auto">
          <div className="flex">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;

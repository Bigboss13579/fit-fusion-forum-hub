
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
      <Tabs defaultValue={currentPath} className="w-full">
        <TabsList className="w-full flex bg-fitness-navy h-auto rounded-none">
          {navItems.map((item) => (
            <TabsTrigger
              key={item.name}
              value={item.path}
              className={`flex-1 py-4 text-center text-white font-medium transition-colors duration-200 hover:bg-fitness-orange rounded-none
              ${currentPath === item.path ? 'bg-fitness-orange' : 'bg-transparent'}`}
              asChild
            >
              <Link to={item.path}>
                {item.name}
              </Link>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </>
  );
};

export default Navigation;

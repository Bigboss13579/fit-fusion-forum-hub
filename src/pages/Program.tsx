
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Program = () => {
  // Function to handle opening local file
  const openLocalFile = () => {
    // This creates a URL to your local file
    const localFilePath = 'file:///C:/Users/66617/Desktop/WEB%20PROJECT%20II/fit-fusion-forum-hub/oknew04.html';
    window.open(localFilePath, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow container mx-auto px-4 py-16 flex flex-col items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-3xl font-bold text-fitness-navy">Program Page</h1>
          <p className="text-lg text-gray-600">
            Click below to access your local Program HTML file.
          </p>
          <div className="flex flex-col gap-4">
            <Button 
              className="bg-fitness-orange hover:bg-fitness-orangeHover"
              onClick={openLocalFile}
            >
              Open Local Program Page
            </Button>
            <Link to="/">
              <Button variant="outline">
                Return to Community
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Program;


import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow container mx-auto px-4 py-16 flex flex-col items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-3xl font-bold text-fitness-navy">{title} Page</h1>
          <p className="text-lg text-gray-600">
            This section is under development. Check back soon for content about {title.toLowerCase()}.
          </p>
          <Link to="/">
            <Button className="bg-fitness-orange hover:bg-fitness-orangeHover">
              Return to Community
            </Button>
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PlaceholderPage;

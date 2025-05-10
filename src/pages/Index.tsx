
import React from 'react';
import Navigation from '@/components/Navigation';
import ConsultCard from '@/components/ConsultCard';
import CommunityForum from '@/components/CommunityForum';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-900 to-black">
      <Navigation />
      
      <main className="flex-grow px-4 py-8 max-w-4xl mx-auto">
        <div className="space-y-6">
          <ConsultCard />
          <CommunityForum />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;


import React from 'react';
import Navigation from '@/components/Navigation';
import ConsultCard from '@/components/ConsultCard';
import CommunityForum from '@/components/CommunityForum';
import Footer from '@/components/Footer';


const Community = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-6">
          <ConsultCard />
          <CommunityForum />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Community;

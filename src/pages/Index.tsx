
import React from 'react';
import Navigation from '@/components/Navigation';
import ConsultCard from '@/components/ConsultCard';
import CommunityForum from '@/components/CommunityForum';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black bg-opacity-50" style={{
      backgroundImage: `url('https://media.istockphoto.com/id/487241538/photo/athletic-man-and-woman-with-a-dumbells.jpg?s=612x612&w=0&k=20&c=S0FntmWoBcQWLalYi89C9Tv-j1Jkg7_yUveu7muryEY=')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
    }}>
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

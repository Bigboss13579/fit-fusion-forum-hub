
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import '../pages-4/Cardios.css'
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Cardio = () => {
  // Function to handle opening local file
  const openLocalFile = () => {
    // This creates a URL to your local file
    const localFilePath = 'file:///C:/Users/66617/Desktop/WEB%20PROJECT%20II/fit-fusion-forum-hub/oknew02.html';
    window.open(localFilePath, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="video-section">
        <iframe src="https://www.youtube.com/embed/pz7PdUGrwmQ?si=V_JQT5u1CBcqFAHp&amp;controls=0" ></iframe>
        <div className="description">
          <strong>15-Minute Standing Cardio Fat Burning Workout</strong><br />
          A quick, equipment-free 15-minute standing cardio session perfect for burning fat and getting your heart rate up. Great for beginners and intermediate levels.
        </div>
      </div>

      <div className="video-section">
        <iframe src="https://www.youtube.com/embed/_fesO5oNcEs?si=tV7qRQ-xuhcQjpqd" ></iframe>
        <div className="description">
          <strong>9 MIN Cardio at Home Workout</strong><br />
          An energizing 9-minute cardio routine you can do from home with minimal space. Focuses on full-body movement and endurance building.
        </div>
      </div>

      <div className="video-section">
        <iframe src="https://www.youtube.com/embed/rosIwQajcaA?si=ym_bdgBOOQxvBA48" ></iframe>
        <div className="description">
          <strong>NO JUMPING CARDIO - Fat Burn | Low Impact</strong><br />
          A low-impact cardio workout that's easy on the joints—no jumping required. Ideal for beginners or those recovering from injuries.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cardio;

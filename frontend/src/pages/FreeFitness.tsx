import React from 'react';
import styled from 'styled-components';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
  text-align: center;
`;

const ParkImage = styled.img`
  width: 562.5px;
  height: 375px;
`;

const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  
  a {
    margin-left: 8px;
    color: purple;
    text-decoration: underline;
  }
`;

const Description = styled.p`
  margin: 10px 0;
  max-width: 800px;
  line-height: 1.5;
`;

interface ParkLocation {
  name: string;
  imageUrl: string;
  locationUrl: string;
  description: string;
}

const parkLocations: ParkLocation[] = [
  {
    name: 'Thonburirom Park',
    imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipPXC3abi3ucZCGsXRXPblDk1VYDkYAeiVi0hdbS=w408-h306-k-no',
    locationUrl: 'https://maps.app.goo.gl/VusLe7ESPYepVggi6',
    description: 'A beautiful park with outdoor exercise equipment and running tracks. Perfect for morning workouts and evening jogs. The park features various fitness stations and a large open area for group exercises.'
  },
  {
    name: 'Suan Luang Rama IX',
    imageUrl: 'https://img.wongnai.com/p/1600x0/2018/11/29/333cbb4a66354a2991346b8f11437a48.jpg',
    locationUrl: 'https://maps.app.goo.gl/DiRmadGcJWTA78AK8',
    description: 'One of Bangkok\'s largest parks with extensive walking paths and exercise areas. The park offers a serene environment for outdoor workouts, with dedicated spaces for yoga and group fitness activities.'
  },
  {
    name: 'Wachirabenchathat Park',
    imageUrl: 'https://img.wongnai.com/p/1600x0/2018/11/29/0d0c5c215a234b0aa62f3a0351fd643e.jpg',
    locationUrl: 'https://maps.app.goo.gl/spFbivgx8Rqi1sDfA',
    description: 'Known for its beautiful gardens and fitness facilities. The park includes outdoor gym equipment and running tracks, making it an ideal spot for both casual and serious fitness enthusiasts.'
  },
  {
    name: 'Chatuchak Park',
    imageUrl: 'https://img.wongnai.com/p/1600x0/2018/11/29/8516d398159f436bb4b4f7d37d1cc4ee.jpg',
    locationUrl: 'https://maps.app.goo.gl/wc7pNKBnxfvwaJsF9',
    description: 'A popular park with well-maintained exercise areas and walking paths. Features various outdoor fitness equipment and spaces for group activities. Perfect for morning exercises and weekend workouts.'
  },
  {
    name: 'Lumphini Park',
    imageUrl: 'https://img.wongnai.com/p/1600x0/2018/11/29/bacbef3cdff24e689a8a00a96e0fae00.jpg',
    locationUrl: 'https://maps.app.goo.gl/wc7pNKBnxfvwaJsF9',
    description: 'Bangkok\'s first public park, offering extensive fitness facilities including outdoor gym equipment, running tracks, and open spaces for various exercises. A favorite spot for fitness enthusiasts.'
  },
  {
    name: 'Santiphap Park',
    imageUrl: 'https://img.wongnai.com/p/1600x0/2018/11/29/e4e8c90364b6473a9823079b13d91743.jpg',
    locationUrl: 'https://maps.app.goo.gl/wc7pNKBnxfvwaJsF9',
    description: 'A peaceful park with modern exercise equipment and walking paths. The park provides a perfect environment for outdoor workouts with its well-maintained facilities and natural surroundings.'
  }
];

const FreeFitness: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow container mx-auto px-4 py-16">
        {parkLocations.map((park, index) => (
          <CenteredContent key={index}>
            <ParkImage src={park.imageUrl} alt={`${park.name} Image`} />
            <h3>{park.name}</h3>
            <Description>{park.description}</Description>
            <LocationContainer>
              <span>Location :</span>
              <a href={park.locationUrl} target="_blank" rel="noopener noreferrer">Click Here</a>
            </LocationContainer>
          </CenteredContent>
        ))}
      </main>
      
      <Footer />
    </div>
  );
};

export default FreeFitness;

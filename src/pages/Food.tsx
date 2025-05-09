import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Food = () => {
  // Define diet guides data
  const dietGuides = [
    {
      id: "clean-eating",
      image: "https://www.eatingwell.com/thmb/Ch2LFPGHsQ5kySirTzPLNd0LfdA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/14-days-clean-eating-meal-plan-1200-lede-601736337d914519bb5bf8eb83540da1.jpg",
      title: "The Clean Eating Diet Plan Guide",
      description: "Learn everything you need to know before starting the Clean Eating Diet plan including its history, guidelines & components, & all of the science behind it."
    },
    {
      id: "iifym",
      image: "https://iifym.com/wp-content/uploads/2024/06/Flexible-dieting-IIFYM.webp",
      title: "The IIFYM & Flexible Dieting Diet Plan Guide",
      description: "Learn everything you need to know before starting the IIFYM Diet plan including its history, guidelines and components, and all of the science behind it."
    },
    {
      id: "ketogenic",
      image: "https://media.post.rvohealth.io/wp-content/uploads/2020/04/low-carb-diet-meal-plan-and-menu-732x549-thumbnail.jpg",
      title: "The Ketogenic & Low Carb Diet Plan Guide",
      description: "Learn everything you need to know before starting the Keto Diet plan including its history, guidelines and components, and all of the science behind it."
    },
    {
      id: "fasting",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXINnenCyubffcewrleHxwJ29kADm9rAX9g&s",
      title: "The Intermittent Fasting Diet Plan Guide",
      description: "Learn everything you need to know before starting the Keto Diet plan including its history, guidelines and components, and all of the science behind it."
    },
    {
      id: "carb-cycling",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6PoWrK8gPBiWZILpyPVx0UYKTVXF-Rky_PQ&s",
      title: "The Carb Cycling Diet Plan Guide",
      description: "Learn everything you need to know before starting the Paleo Diet plan including its history, guidelines and components, and all of the science behind it."
    },
    {
      id: "paleo",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWEBi_szfJCOb20Oao2pJI4Ma4aAlPphc59w&s",
      title: "The Paleolithic (Paleo) Diet Plan Guide",
      description: "Learn everything you need to know before starting the Paleo Diet plan including its history, guidelines and components, and all of the science behind it."
    }
  ];

  // Define healthy menu data
  const healthyMenus = [
    {
      id: "butter-bean",
      image: "https://images.immediate.co.uk/production/volatile/sites/30/2023/12/Butter-bean-curry-cd2e061.jpg?quality=90&webp=true&resize=375,341",
      title: "Butter bean curry",
      description: "The butter beans in this veggie curry create a satisfying texture. We've paired them with dark-skinned aubergine, which is packed with antioxidants."
    },
    {
      id: "chicken-burritos",
      image: "https://images.immediate.co.uk/production/volatile/sites/30/2024/01/Healthy-chicken-burritos-e16725f.jpg?quality=90&webp=true&resize=375,341",
      title: "Healthy chicken burritos",
      description: "Use storecupboard ingredients and leftovers to make this nutritious and easy Mexican-style lunch. The filling for the burritos can be made ahead."
    },
    {
      id: "curried-noodles",
      image: "https://images.immediate.co.uk/production/volatile/sites/30/2022/11/Curried-sate-noodles-75bdc86.jpg?quality=90&webp=true&resize=375,341",
      title: "Curried satay noodles",
      description: "Serve up some quick and easy curried noodles. Packed with wholewheat, pulses, vegetables and spices, this recipe is full of healthy plant-based foods."
    }
  ];

  // Function to handle opening the original local file if needed
  const openLocalFile = () => {
    const localFilePath = 'file:///C:/Users/66617/Desktop/WEB%20PROJECT%20II/fit-fusion-forum-hub/oknew05.html';
    window.open(localFilePath, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Diet Guides Section */}
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-center text-yellow-600 mb-4">Diet Guides</h2>
          
          <p className="text-center mb-8 max-w-3xl mx-auto">
            Diet guides help you make smart food choices to support weight management and muscle growth.<br />
            They focus on balanced nutrition for better energy and health.<br />
            Following them leads to sustainable and long-term well-being.
          </p>
          
          {/* Diet Guides Grid - First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {dietGuides.slice(0, 3).map((guide) => (
              <div key={guide.id} className="flex flex-col">
                <img 
                  src={guide.image} 
                  alt={guide.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="font-bold mt-3 text-lg">{guide.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{guide.description}</p>
              </div>
            ))}
          </div>
          
          {/* Diet Guides Grid - Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {dietGuides.slice(3, 6).map((guide) => (
              <div key={guide.id} className="flex flex-col">
                <img 
                  src={guide.image} 
                  alt={guide.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="font-bold mt-3 text-lg">{guide.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{guide.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Healthy Menu Section */}
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-center text-yellow-600 mb-8">Healthy Menu</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {healthyMenus.map((menu) => (
              <div key={menu.id} className="flex flex-col">
                <img 
                  src={menu.image} 
                  alt={menu.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="font-bold mt-3 text-lg">{menu.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{menu.description}</p>
              </div>
            ))}
          </div>
          
          {/* Link to original local file */}
          <div className="text-center mt-8">
            <button 
              onClick={openLocalFile}
              className="text-sm text-gray-500 hover:underline"
            >
              View original page
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Food;

// src/pages/Food.tsx
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import '../pages-2/Food1';
import '../pages-2/Food2';
import '../pages-2/Food2';
import '../pages-2/Food3';
import '../pages-2/Food4';
import '../pages-2/Food5';
import '../pages-2/Food6';
import '../pages-2/Food7';
import '../pages-2/Food8';
import '../pages-2/Food9';




const Food: React.FC = () => {
  // Diet guides data
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

  // Healthy menu data
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

  const foodPages = [
    { title: 'The Clean Eating Diet Plan Guide', image: 'https://www.eatingwell.com/thmb/Ch2LFPGHsQ5kySirTzPLNd0LfdA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/14-days-clean-eating-meal-plan-1200-lede-601736337d914519bb5bf8eb83540da1.jpg', link: '/Food1' },
    { title: 'The IIFYM & Flexible Dieting Diet Plan Guide', image: 'https://iifym.com/wp-content/uploads/2024/06/Flexible-dieting-IIFYM.webp', link: '/Food2' },
    { title: 'The Ketogenic & Low Carb Diet Plan Guide', image: 'https://media.post.rvohealth.io/wp-content/uploads/2020/04/low-carb-diet-meal-plan-and-menu-732x549-thumbnail.jpg', link: '/Food3' },
    { title: 'The Intermittent Fasting Diet Plan Guide', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXINnenCyubffcewrleHxwJ29kADm9rAX9g&s', link: '/Food4' },
    { title: 'The Carb Cycling Diet Plan Guide', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6PoWrK8gPBiWZILpyPVx0UYKTVXF-Rky_PQ&s', link: '/Food5' },
    { title: 'The Paleolithic (Paleo) Diet Plan Guide', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWEBi_szfJCOb20Oao2pJI4Ma4aAlPphc59w&s', link: '/Food6' },
    { title: 'Butter bean curry', image: 'https://images.immediate.co.uk/production/volatile/sites/30/2023/12/Butter-bean-curry-cd2e061.jpg?quality=90&webp=true&resize=375,341', link: '/Food7' },
    { title: 'Healthy chicken burritos', image: 'https://images.immediate.co.uk/production/volatile/sites/30/2024/01/Healthy-chicken-burritos-e16725f.jpg?quality=90&webp=true&resize=375,341', link: '/Food8' },
    { title: 'Curried satay noodles', image: 'https://images.immediate.co.uk/production/volatile/sites/30/2022/11/Curried-sate-noodles-75bdc86.jpg?quality=90&webp=true&resize=375,341', link: '/Food9' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">


        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-center text-yellow-600 mb-8">Food Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {foodPages.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                // target="_blank"
                rel="noopener noreferrer"
                className="block text-center hover:shadow-lg p-4 rounded-lg border border-gray-200 transition"              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="font-semibold text-lg text-gray-800 hover:text-yellow-600">{item.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Food;

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './Foods.css';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Food3: React.FC = () => {
    return (

        <div className="min-h-screen flex flex-col">
            <Navigation />



            <div className="image-container">
                <div className="image-wrapper">

                    <div className="caption">The Paleolithic (Paleo) Diet Plan Guide</div>


                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWEBi_szfJCOb20Oao2pJI4Ma4aAlPphc59w&s" alt="" width="562.5" height="375" />

                    <div className="description">Learn everything you need to know before starting the Paleo Diet plan including its history, guidelines and components, and all of the science behind it.</div>
                </div>
            </div>

            <div className="content">
                <p>The Paleolithic diet, aka the paleo diet, is based upon the idea that our current food environment is at odds with our evolutionary heritage and that the optimal diet is to mimic that of our Paleolithic ancestors.</p>

                <p>It has been argued that for nearly 99% of human history we ate a certain way, and only in the past 1% of the human timeline have we begun to eat as we currently do.</p>

                <p>The paleo diet claims that this mismatch between our genetics and our environment is responsible for the large increase in obesity, diabetes, and other chronic disease we currently face.</p>

                <p>The basic tenets of this diet are to:</p>

                <p>
                    1. Avoid: processed foods, grains, legumes, and dairy<br />
                    2. Consume: lean meats, fruits, vegetables, and “healthy fat”.
                </p>

                <p>Also, calorie counting is not generally promoted by the paleo diet; food quality is the primary focus.</p>

                <p>In general, it adopts a more low-carbohydrate stance. It tries to minimize starch intake and often times the types of foods people tend to consume on a paleo diet shifts their macronutrient intake to a high protein, high fat, low carb diet.</p>

                <h3>History of the Paleo Diet</h3>

                <p>The paleo diet, as currently thought of, can be initially traced back to Dr. Boyd Eatin and Dr. Melvin Konner who originally published a paper in the New England Journal of Medicine titled, “Paleolithic Nutrition - A Consideration of its Nature Current Implications”.</p>

                <p>It was brought into the mainstream media by Dr. Loren Cordain who published the book, “The Paleo Diet: Lose Weight and Get Health by Eating the Foods You Were Designed to Eat” in 2001.</p>

                <br />
                <Link to="/Food" className="tab food active">Back to home</Link>
            </div>
            <Footer />
        </div>
    );
};

export default Food3;


import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './Foods.css';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Food5: React.FC = () => {
    return (

        <div className="min-h-screen flex flex-col">
            <Navigation />


            <div className="image-container">
                <div className="image-wrapper">

                    <div className="caption">The Carb Cycling Diet Plan Guide</div>


                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6PoWrK8gPBiWZILpyPVx0UYKTVXF-Rky_PQ&s" alt="" width="421.875" height="281.25" />

                    <div className="description">Learn everything you need to know before starting the Clean Eating Diet plan including its history, guidelines & components, & all of the science behind it.</div>
                </div>
            </div>

            <div className="content">
                <p>Carb cycling is a dietary tool that essentially uses a fasted and fed approach; however it is unique in that it focuses specifically on carbohydrate intake and not any other macronutrient.</p>

                <p>It uses long periods of carbohydrate restriction coupled with short windows of carbohydrate referring (aka refeeds).</p>

                <p>The theory behind this diet is similar to other diets that manipulate dietary carbohydrates in that they are attempting to leverage insulin signaling to maximize fat loss.</p>

                <p>Carb cycling adopts a different approach from other diets like the ketogenic diet or other low carbohydrate diets by including periods of high carbohydrate intake.</p>

                <p>Carb cycling is also referred to as the cyclic ketogenic diet as it uses periods of ketosis which are purported to have some health benefits.</p>

                <h2>History of Carb Cycling</h2>

                <p>From what we can gather carb cycling as it is currently thought of is believed to have been created and implemented by Franco Carlotto in the late 1980s or early 1990s. It was a riff off of both the high carbohydrate diet ideas that pervaded the bodybuilding scene and the low-carb diets that were beginning to gain popularity in some of the dieting circles.</p>

                <p>It was the first attempt to blend several ideas into one diet that might take advantage of the benefits of different dietary approaches that were being implemented during the Golden Era of Bodybuilding. More recently, it has, for all intents and purposes, been repackaged into the modern day Carb Nite and Carb Backloading diets.</p>

                <br />
                <Link to="/Food" className="tab food active">Back to home</Link>
            </div>
            <Footer />
        </div>
    );
};

export default Food5;


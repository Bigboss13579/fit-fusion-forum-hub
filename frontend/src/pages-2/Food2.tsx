import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './Foods.css';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Food2: React.FC = () => {
    return (

        <div className="min-h-screen flex flex-col">
            <Navigation />

            <div className="image-container">
                <div className="image-wrapper">

                    <div className="caption">The IIFYM & Flexible Dieting Diet Plan Guide</div>


                    <img src="https://iifym.com/wp-content/uploads/2024/06/Flexible-dieting-IIFYM.webp"
                        alt=""
                        width="562.5"
                        height="375" />

                    <div className="description">Learn everything you need to know before starting the IIFYM Diet plan including its history, guidelines and components, and all of the science behind it.</div>
                </div>
            </div>

            <div className="content">
                <p>Without question the single biggest component to the success of any diet, calories are the overarching principle that needs to be addressed when fat loss or muscle gain is a focus.</p>

                <p>The second major component of a diet aimed at losing fat or gaining muscle is the macro nutrient breakdown of the diet.</p>

                <p>The macronutrients themselves can play a big role in satiety, your ability to workout at a high level, and how much muscle mass you are able to build.</p>

                <p>Together, calories and macronutrients cover about 80% of the major components that make up a successful dieting paradigm.</p>

                <p>(If It Fits Your Macros) IIFYM takes these two principles and uses them to build a diet that is very flexible on food quality and very rigid on food quantity.</p>

                <h2>History of IIFYM & Flexible Dieting</h2>

                <p>IIFYM has been around for decades and no one can truly pin down the date and place of its origin. It has evolved over the decades though and increased in its sophistication as it has gone through its iterations. It began with simple calculators based on basic formulas to assign calories and very general macro recommendations.</p>

                <p>The most recent iteration of this diet uses more advanced tools that factor in sex, height, weight, lean mass, level of activity, days per week, minutes per day, intensity of exercise, weight goals, and even types of training etc. While it used to be considered a sub culture of a sub culture it is has grown into its own individual sub culture.</p>


                <br />
                <Link to="/Food" className="tab food active">Back to home</Link>
            </div>

            <Footer />
        </div>
    );
};

export default Food2;


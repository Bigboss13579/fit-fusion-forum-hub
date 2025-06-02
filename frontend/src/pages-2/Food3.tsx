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

                    <div className="caption">The Ketogenic & Low Carb Diet Plan Guide</div>


                    <img src="https://media.post.rvohealth.io/wp-content/uploads/2020/04/low-carb-diet-meal-plan-and-menu-732x549-thumbnail.jpg"
                        alt=""
                        width="562.5"
                        height="375" />

                    <div className="description">Learn everything you need to know before starting the Keto Diet plan including its history, guidelines and components, and all of the science behind it.</div>
                </div>
            </div>

            <div className="content">

                <p>The ketogenic diet is a diet that capitalizes on a very interesting aspect of human physiology, namely ketosis.</p>

                <p>Ketosis is a metabolic state that occurs when we consume carbohydrates in such low quantities fatty acid oxidation becomes the main source of fuel.</p>

                <p>When fatty acid oxidation reaches a certain point and carbohydrate availability is low enough, the body begins producing ketone bodies.</p>

                <p>These ketone bodies are then used preferentially in specific tissues, especially the brain.</p>

                <p>The ketogenic diet allows us to survive on without food intake or on very low (down to virtually zero) carbohydrates for long periods of time.</p>

                <p>From an evolutionary, biochemical, and physiological perspective, ketosis appears to be a survival strategy/mechanism.</p>

                <p>For the purposes of the ketogenic diet as a fat loss tool, a focal point of the ketogenic diets is that it allows us to live for long periods of time on virtually no carbohydrate intake and theoretically lower insulin levels than normal.</p>

                <p>As it has been hypothesized that insulin plays a role in body composition by regulating fat storage, this is one of the key points the ketogenic diet attempts to capitalize on.</p>

                <br />
                <Link to="/Food" className="tab food active">Back to home</Link>
            </div>
            <Footer />
        </div>
    );
};

export default Food3;


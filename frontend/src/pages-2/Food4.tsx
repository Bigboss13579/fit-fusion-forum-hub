import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './Foods.css';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Food4: React.FC = () => {
    return (

        <div className="min-h-screen flex flex-col">
            <Navigation />


            <div className="image-container">
                <div className="image-wrapper">

                    <div className="caption">The Intermittent Fasting Diet Plan Guide</div>


                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXINnenCyubffcewrleHxwJ29kADm9rAX9g&s"
                        alt=""
                        width="562.5"
                        height="375" />

                    <div className="description">Learn everything you need to know before starting the Keto Diet plan including its history, guidelines and components, and all of the science behind it.</div>
                </div>
            </div>

            <div className="content">
                <p>Intermittent fasting is a dietary philosophy that either involves long periods of fasting followed by short windows of feasting or 24 hours of fasting followed by 24 hours of feasting (this is known as alternate day fasting).</p>

                <p>There are several variations of intermittent fasting with the most popular fasting protocol being a 16 hour fast followed by an 8 hour feasting window.</p>

                <p>The basis of intermittent fasting hinges on a few key ideas:</p>

                <p>
                    1. Maximizing the time your body spends oxidizing fat <br />
                    2. Minimizing overall insulin load to the systemf <br />
                    3. Improved energy levels <br />
                    4. Increased longevity.
                </p>

                <p>Recently several key studies have been carried out to examine how these claims stack up to the research and the results have been quite interesting.</p>

                <br />
                <Link to="/Food" className="tab food active">Back to home</Link>
            </div>
            <Footer />
        </div>
    );
};

export default Food4;


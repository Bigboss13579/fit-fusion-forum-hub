import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Exercise5: React.FC = () => {
    return (

        <div className="min-h-screen flex flex-col">
            <Navigation />

            <div className="image-container">
                <div className="image-wrapper">
                    <div className="caption">Strength Training Guide</div>

                    <Link to="/Exercise1">
                        <img src="https://barbend.com/wp-content/uploads/2022/11/Barbend-Featured-Image-1600x900-How-to-increase-strength.jpg"
                            alt="Strength Training"
                            width="562.5"
                            height="375" 
                            className="hover:opacity-90 transition-opacity cursor-pointer"/>
                    </Link>

                    <div className="description">Learn everything you need to know about strength training, including proper form, programming, and how to progressively overload for maximum gains.</div>
                </div>
            </div>

            <div className="content">
                <p>Strength training is a type of physical exercise specializing in the use of resistance to induce muscular contraction, which builds the strength, anaerobic endurance, and size of skeletal muscles.</p>

                <p>The key principles of strength training include progressive overload, specificity, and proper form. Progressive overload means gradually increasing the weight, frequency, or number of repetitions in your training routine.</p>

                <p>Proper form is crucial in strength training to prevent injuries and ensure you're targeting the intended muscle groups effectively. Always start with lighter weights to master the movement patterns before increasing the load.</p>

                <h2>Benefits of Strength Training</h2>

                <p>Strength training offers numerous benefits beyond just building muscle. It can help improve bone density, boost metabolism, enhance joint function, and reduce the risk of injury in daily activities.</p>

                <p>Regular strength training can also improve your overall quality of life by making everyday tasks easier, improving posture, and increasing your energy levels throughout the day.</p>

                <br />
                <Link to="/exercise" className="tab food active">Back to Exercise</Link>
            </div>

            <Footer />
        </div>
    );
};

export default Exercise5;


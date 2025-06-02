import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import './Workout.css';

const Exercise8: React.FC = () => {
    return (

        <div className="min-h-screen flex flex-col">
            <Navigation />

            <div className="first">
                <div className="second">
                    <div className="third"><h5>Get the edge on your competitors by increasing your performance. Find the best workout for your </h5>
                        <h5>fitness goal, experience level, training style and equipment access. Each workout comes with a free </h5>
                        <h5>downloadable PDF you can reference when training.</h5></div>

                    <div className="fouth">
                        <div className='seventh'>

                            <div className="fifth">
                                <img src="https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/jamal_browner_deadlifting.jpg?itok=ZYeiCR9K" alt="" width="210" height="140" />
                                    <div className="sixth">Jamal Browner’s 2-Day Deadlifting Program: Deadlift 1,000+ Lbs </div>
                                    <div className="eighth">Fight to be Fit Training Program </div>
                            </div>

                            <div className="fifth">
                                <img src="https://cdn.muscleandstrength.com/sites/default/files/field/feature-image/workout/fight-to-be-fit-workout.jpg" alt="" width="210" height="140" />
                                    <div className="sixth">3 Day Whole Body Football Strength Workout </div>
                                    <div className="eighth">Build up to a new 1RM in just 8-9 weeks! This program is designed to strip away the complexity and hone in on the essential elements of a world-className deadlift program. </div>
                            </div>


                            <div className="fifth">
                                <img src="https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/field/image/workout/footstrength.png?itok=l8I4mZpo" alt="" width="210" height="140" />
                                    <div className="sixth">This full body workout incorporates some fighting style cardio with a high volume weight training routine to help you fight for your fitness. </div>
                                    <div className="eighth">Increase your explosive power and strength to help you on the football field. It's a full body workout on a three day schedule - Monday, Wednesday and Friday. </div>
                            </div>

                        </div>
                    </div>
                     <br />
                     <Link to="/exercise" className="tab food active">Back to Exercise</Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Exercise8;


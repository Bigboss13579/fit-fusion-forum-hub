import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import './Workout.css';

const Exercise3: React.FC = () => {
    return (

        <div className="min-h-screen flex flex-col">
            <Navigation />

            <div className="first">
                <div className="second">
                    <div className="third"><h5>Our workouts database has hundreds of free workout plans designed for building muscle. The</h5>
                        <h5>workouts are created by fitness experts and come with a free downloadable PDF you can reference </h5>
                        <h5>when training. Use the filters below to find the best workout for your goal, training experience and </h5>
                        <h5>equipment access.</h5></div>

                    <div className="fouth">
                        <div className='seventh'>
                            <div className="fifth">
                                    <img src="https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/fit_woman_doing_a_dumbbell_lunge_in_the_gym.jpg?itok=G3wyY5Is" alt="" width="210" height="140" />
                                        <div className="sixth">Build Without the Bulk: 6 Week Muscle Building Workout for Women</div>
                                        <div className="eighth">Awesome Arms: 8 Weeks to Better Biceps and Triceps</div>
                            </div>

                            <div className="fifth">
                                    <img src="https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/fit-asian-man-doing-dumbbell-curl.jpg?itok=8K7TNHfN" alt="" width="210" height="140" />
                                        <div className="sixth">Big and Strong: 8 Week Advanced Strength Building Workout</div>
                                        <div className="eighth">Build bigger glutes and sculpted shoulders without bulking up. This comprehensive plan also includes a full mobility day to help improve recovery and prevent injury.</div>
                            </div>


                            <div className="fifth">
                                    <img src="https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/close-up-shot-of-strong-man-doing-back-workout.jpg?itok=El2xhqaA" alt="" width="210" height="140" />
                                        <div className="sixth">Build better biceps and triceps in just 30-40 minutes. This awesome arm workout can be completed independently or added to your current program for extra gains.</div>
                                        <div className="eighth">Unlock unmatched strength with this 5-day strength-building workout. This plan incorporates power, speed, and explosive movements to help you move serious weight in 8 weeks</div>
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

export default Exercise3;


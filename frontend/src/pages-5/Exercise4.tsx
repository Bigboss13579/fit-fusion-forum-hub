import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import './Workout.css';

const Exercise4: React.FC = () => {
    return (

        <div className="min-h-screen flex flex-col">
            <Navigation />

            <div className="first">
                <div className="second">
                    <div className="third"><h5>Take your fat loss goals to the next level with our huge database of free fat-burning workouts </h5>
                        <h5>designed for men and women. If you need somewhere to start, check out our 12 Week Fat Destroyer </h5>
                        <h5>Workout Program. For more fat loss training tips and expert guides, you'll want to head over to our </h5>
                        <h5>fat loss articles. </h5></div>

                    <div className="fouth">
                        <div className='seventh'>
                            <div className="fifth">
                                <img src="https://cdn.muscleandstrength.com/sites/default/files/field/feature-image/workout/10-week-fat-torcher.jpg" alt="" width="210" height="140" />
                                <div className="sixth">10 Week Fat Torcher: Fat Burning Program </div>
                                <div className="eighth">8 Week Fat Loss Workout for Beginners </div>
                            </div>

                            <div className="fifth">
                                <img src="https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/lean-man-and-woman-doing-a-fat-loss-workout-in-the-gym_0.jpg?itok=3Q6d_tKC" alt="" width="210" height="140" />
                                <div className="sixth">12 Week Fat Destroyer: Complete Fat Loss Workout & Diet Program </div>
                                <div className="eighth">Torch any unwanted fat right off your body with this 10 week intense fat burning workout routine. This workout is an upper/lower style split with 3 leg days! </div>
                            </div>


                            <div className="fifth">
                                <img src="https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/12_week_fat_destroyer_-_1200x630.jpg?itok=ki1i9dcq" alt="" width="210" height="140" />
                                <div className="sixth">This 4-day program is designed to help you burn fat without burning too much time on the clock. You'll also learn the basics of fat loss nutrition and recovery. </div>
                                <div className="eighth">This is a complete 12 week program to help you get ripped. Feature includes detailed diet plan and cardio schedule, along with a 4 day upper/lower muscle building split. </div>
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

export default Exercise4;


import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import './Workout.css';

const Exercise1: React.FC = () => {
    return (

        <div className="min-h-screen flex flex-col">
            <Navigation />

            <div className="first">
                <div className="second">
                    <div className="third"><h5>We have a huge range of free downloadable workouts for men designed by fitness experts and</h5>
                        <h5>trainers. Find the best workout for your goal, experience, desired training style and equipment</h5>
                        <h5>access.</h5></div>

                    <div className="fouth">
                        <div className='seventh'>
                            <div className="fifth">
                                <img src="https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/fit_woman_doing_a_dumbbell_lunge_in_the_gym.jpg?itok=G3wyY5Is" alt="" width="210" height="140" />
                                <div className="sixth">8 Week Fat Loss Workout for Beginners</div>
                                <div className="eighth">Awesome Arms: 8 Weeks to Better Biceps and Triceps</div>
                            </div>

                            <div className="fifth">
                                <img src="https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/lean-man-and-woman-doing-a-fat-loss-workout-in-the-gym_0.jpg?itok=3Q6d_tKC" alt="" width="210" height="140" />
                                <div className="sixth">Big and Strong: 8 Week Advanced Strength Building Workout</div>
                                <div className="eighth">Build bigger glutes and sculpted shoulders without bulking up. This comprehensive plan also includes a full mobility day to help improve recovery and prevent injury</div>
                            </div>


                            <div className="fifth">
                                <img src="https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/muscular-woman-doing-smith-machine-squat.jpg?itok=nt3v0h0Z" alt="" width="210" height="140" />
                                <div className="sixth">This 4-day program is designed to help you burn fat without burning too much time on the clock. You'll also learn the basics of fat loss nutrition and recovery.</div>
                                <div className="eighth">This full-body workout is perfect for beginners through advanced lifters. It's a great alternative for barbell work if your gym is often crowded or if you aren't ready for free weights.</div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <br />
                <Link to="/exercise" className="tab food active">Back to Exercise</Link>
            </div>

            <Footer />
        </div>
    );
};

export default Exercise1;


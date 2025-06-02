import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import './Workout.css';

const Exercise7: React.FC = () => {
    return (

        <div className="min-h-screen flex flex-col">
            <Navigation />

            <div className="first">
                <div className="second">
                    <div className="third"><h5>Full body workouts train all muscle groups in a single workout. From beginners to experienced </h5>
                        <h5>lifters, our database of free, full body workouts is designed to offer a variety of programs to help</h5>
                        <h5>meet you where you are on your fitness journey. Check out one of our most popular programs to</h5>
                        <h5>get started: 3 Day Full Body Dumbbell Workout.</h5></div>

                    <div className="fouth">
                        <div className='seventh'>

                        <div className="fifth">
                                <img src="https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/3_day_dumbbell_only_workout_-_1200x630.jpg?itok=hyxqeH91" alt="" width="210" height="140" />
                                    <div className="sixth">Dumbbell Only Workout: 3 Day Full Body Dumbbell Workout </div>
                                    <div className="eighth">Muscle & Strength Full Body Workout Routine</div>
                        </div>

                        <div className="fifth">
                                <img src="https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/ms_full_body_routine_-_1200x630.jpg?itok=sLsyAWwY" alt="" width="210" height="140" />
                                    <div className="sixth">The Total Package: A 3 Day Full Body Strength & Hypertrophy Workout </div>
                                    <div className="eighth">This workout program only requires dumbbells, has just the right amount of volume to promote muscle growth, and is perfect to do at home or on the go. </div>
                        </div>


                        <div className="fifth">
                                <img src="https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/total_package_-_1200x630.jpg?itok=me74ugok" alt="" width="210" height="140" />
                                    <div className="sixth">This M&S mass building routine is perfect for lifters who want to give full body workouts a try. All major muscle groups are trained, and the program includes a 20 rep set of squats.</div>
                                    <div className="eighth">Can't seem to train for hypertrophy without sacrificing strength or vice versa? Check out this 3 day full body workout that helps you train for both! </div>
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

export default Exercise7;


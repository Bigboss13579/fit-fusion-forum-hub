import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import './Workout.css';

const Exercise6: React.FC = () => {
    return (

        <div className="min-h-screen flex flex-col">
            <Navigation />

            <div className="first">
                <div className="second">
                    <div className="third"><h5>Our database of free ab workout plans will help you build a strong and sturdy core. Find the best </h5>
                        <h5>workout for your experience level, training style, and equipment access. For more helpful </h5>
                        <h5>information on ab specific training, check out Freaky Abs! The Monster Guide To A Shredded Six </h5>
                        <h5>Pack</h5></div>

                    <div className="fouth">
                        <div className='seventh'>
                            <div className="fifth">
                                    <img src="https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/core_destoyer_-_1200x630.jpg?itok=TgMOLuNz" alt="" width="210" height="140" />
                                        <div className="sixth">Core Destroyer: 8 Week At Home Ab Workout </div>
                                        <div className="eighth">15-Minute Core Conditioning Workout You Can Do Anywhere </div>
                            </div>

                            <div className="fifth">
                                    <img src="https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/shirtless_male_doing_ab_workout_at_home.jpg?itok=Glbg5vTr" alt="" width="210" height="140" />
                                        <div className="sixth">Abs Workout For Women: 8 Weeks To A Flatter Stomach </div>
                                        <div className="eighth">Ab training shouldn’t be complicated. Add this twice-weekly workout to your routine to help build core strength and ab definition for the six pack of your dreams. </div>
                            </div>


                            <div className="fifth">
                                    <img src="https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/8_weeks_to_flat_stomach_-_1200x630.jpg?itok=kGViOTgi" alt="" width="210" height="140" />
                                        <div className="sixth">Train your abs effectively and efficiently! This versatile workout can be done with just your bodyweight and should be incorporated into your training plan 2-3 times per week.</div>
                                        <div className="eighth">Women: looking for that elusive flat stomach? Combine this abs workout with a smart diet and weekly cardio, and you'll reach your goals in no time! </div>
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

export default Exercise6;


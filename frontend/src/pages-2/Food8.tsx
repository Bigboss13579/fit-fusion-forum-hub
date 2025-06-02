import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './Foods.css';
import './Foodss.css';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Food8: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />

            <div className="image-container">
                <div className="image-wrapper">

                    <div className="caption">Healthy chicken burritos</div>


                    <img src="https://images.immediate.co.uk/production/volatile/sites/30/2024/01/Healthy-chicken-burritos-e16725f.jpg?quality=90&webp=true&resize=375,341" alt="" width="425" height="375" />

                    <div className="description">Use storecupboard ingredients and leftovers to make this nutritious and easy Mexican-style lunch. The filling for the burritos can be made ahead.</div>

                    <div className="steps-container">
                        <div className="step">
                            <h2>Step 1</h2>
                            <p>Heat the oil in a large non-stick frying pan and cook the pepper, covered, for 10 mins over a low heat until softened and lightly charred.</p>
                        </div>
                        <div className="step">
                            <h2>Step 2</h2>
                            <p>Meanwhile, in a dry frying pan, toast the spices gently over a low heat for 2-3 mins until fragrant, then tip in the beans, along with their liquid, the sweetcorn, tomato purée and garlic. Mix well and turn the heat up to medium so the mixture bubbles, then stir in the rice, chicken and coriander. Cook for 3-4 mins until piping hot. Will keep chilled for up to a day. Leave to cool completely first. Reheat in a pan or the microwave until piping hot.</p>
                        </div>
                        <div className="step">
                            <h2>Step 3</h2>
                            <p>Toss the avocado in a bowl with the lime juice. Lay the tortillas out on a work surface and pile the rice down the centre leaving a space at either side. Top with the peppers and avocado, then fold up the tortillas at each end to enclose the filling and tightly roll up the wrap. Put in the pan that you cooked the peppers in, seam-side down, and cook gently on each side over a low heat to lightly toast, about 2-3 mins. You may need to do this in batches.</p>
                        </div>
                    </div>
                </div>
            </div>

            <br />

            <div className='back'>
                <Link to="/Food" className="tab food active">Back to home</Link>
            </div>

            <Footer />
        </div>
    );
};

export default Food8;

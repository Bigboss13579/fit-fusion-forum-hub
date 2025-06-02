import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './Foods.css';
import './Foodss.css';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Food7: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />

            <div className="image-container">
                <div className="image-wrapper">
                    <div className="caption">Butter bean curry</div>

                    <img
                        src="https://images.immediate.co.uk/production/volatile/sites/30/2023/12/Butter-bean-curry-cd2e061.jpg?quality=90&webp=true&resize=375,341"
                        alt=""
                        width="562.5"
                        height="375"
                    />

                    <div className="description">
                        The butter beans in this veggie curry create a satisfying texture. We’ve paired them with dark-skinned aubergine, which is packed with antioxidants.
                    </div>

                    <div className="steps-container">
                        <div className="step">
                            <h2>Step 1</h2>
                            <p>
                                Heat the oil in a non-stick pan over a medium heat and fry the onions for 8 mins until softened. Add the ginger, garlic and chilli, and cook for a few minutes more. Measure 300ml of the liquid from the cans of butter beans into a jug, and mix in the bouillon powder to make a stock (don’t worry if it’s thick or lumpy as it will dissolve in the pan as it cooks).
                            </p>
                        </div>
                        <div className="step">
                            <h2>Step 2</h2>
                            <p>
                                Stir the cumin seeds and curry powder into the onions, followed by the tomatoes, beans and aubergine. Add the stock. Bring to the boil. Reduce the heat to medium-low, cover and simmer for 30 mins until the veg is tender. Stir in half the coriander. Remove from the heat.
                            </p>
                        </div>
                        <div className="step">
                            <h2>Step 3</h2>
                            <p>
                                For the raita, toss the bananas in the lime juice. Add the cucumber, onion, chilli and remaining coriander. Warm the rice following pack instructions and serve with half the curry and raita. Cool and chill the rest of the curry and raita to make our butter bean curry wraps. The curry will keep chilled for up to three days. The raita keeps chilled for a day.
                            </p>
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

export default Food7;

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './Foods.css';
import './Foodss.css';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Food9: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />

            <div className="image-container">
                <div className="image-wrapper">

                    <div className="caption">Curried satay noodles</div>


                    <img src="https://images.immediate.co.uk/production/volatile/sites/30/2022/11/Curried-sate-noodles-75bdc86.jpg?quality=90&webp=true&resize=375,341" alt="" width="425" height="375" />

                    <div className="description">Serve up some quick and easy curried noodles. Packed with wholewheat, pulses, vegetables and spices, this recipe is full of healthy plant-based foods.</div>
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

export default Food9;

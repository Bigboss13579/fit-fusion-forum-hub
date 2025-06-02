import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './Foods.css';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Food1: React.FC = () => {
  return (

    <div className="min-h-screen flex flex-col">
      <Navigation />


      <div className="image-container">
        <div className="image-wrapper">
          <div className="caption">The Clean Eating Diet Plan Guide</div>
          <img
            src="https://www.eatingwell.com/thmb/Ch2LFPGHsQ5kySirTzPLNd0LfdA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/14-days-clean-eating-meal-plan-1200-lede-601736337d914519bb5bf8eb83540da1.jpg"
            alt=""
            width="562.5"
            height="375"
          />
          <div className="description">
            Learn everything you need to know before starting the Clean Eating Diet plan including its history, guidelines & components, & all of the science behind it.
          </div>
        </div>
      </div>

      <div className="content">
        <div className='sentences'>
          <h2>Clean Eating vs IIFYM</h2>

          <p>When we discuss diet plans, we can typically put them along a spectrum where food quantity is on one end and food quality is on the other.</p>
          <p>Diet plans can be placed on a spectrum where food quantity is on one end and food quality is on the other.</p>
          <p>Diets like If It Fits Your Macros (IIFYM) focus on food quantity, while clean eating focuses on food quality.</p>
          <p>Unlike IIFYM, clean eating sets rules on food types rather than calorie counting.</p>
          <p>Its main idea is to choose whole, natural foods and avoid processed ones.</p>

          <h3>Core Principles:</h3>
          <ul>
            <li>Avoid processed foods</li>
            <li>Avoid refined foods</li>
            <li>Avoid artificial ingredients</li>
            <li>Avoid alcohol</li>
            <li>Avoid soda and fruit juice</li>
          </ul>
        </div>
        <br />
        <Link to="/Food" className="tab food active">Back to home</Link>
      </div>
      <Footer />
    </div>
  );
};

export default Food1;


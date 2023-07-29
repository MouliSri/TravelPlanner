// src/Card.js
import React from 'react';
import { useSpring, animated } from 'react-spring';
import  Lottie  from "lottie-react";
import card1 from "../assets/card1.json"
import card2 from "../assets/card2.json"
import card3 from "../assets/card3.json"


const Card = () => {
  const [isHovered, setHovered] = React.useState(false);

  // Animation config for scaling and shadow
  const springProps = useSpring({
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    boxShadow: isHovered
      ? '0 4px 10px rgba(0, 0, 0, 0.2)'
      : '0 1px 3px rgba(0, 0, 0, 0.1)',
  });

  return (
    <div className=' m-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3   '>
    <animated.div
      className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={springProps}
    >
        <Lottie className="object-none h-48 w-96 "  loop={true} animationData={card1} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Plan</div>
        <ul className='custom font-custom'>
        <li className="text-gray-700 text-base ">
          Decide on the country or city you want to visit.
        </li>
        <li className="text-gray-700 text-base">
        Consider the time of year you want to travel, as different destinations have varying weather conditions throughout the year.

        </li>
        </ul>
      </div>
      
    
    </animated.div>
    <animated.div
      className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={springProps}
    >
        <Lottie className="object-none h-48 w-96 "  loop={true} animationData={card3} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Travel</div>
        <ul className='custom font-custom'>
        <li className="text-gray-700 text-base  ">
        Remember that every trip is unique, and the most important thing is to enjoy the journey and create lasting memories. Happy travels!
        </li>
      
        </ul>
      </div>
      
    
    </animated.div>
    <animated.div
      className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={springProps}
    >
        <Lottie className="object-none h-48 w-96 "  loop={true} animationData={card2} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Travel Planner</div>
        <ul className='custom font-custom'>
        <li className="text-gray-700 text-base ">
        Store user-created itineraries, which include selected destinations, activities, and dates.
        </li>
        <li className="text-gray-700 text-base">
        Allow users to save, edit, and delete their travel plans.

        </li>
        </ul>
      </div>
      
    
    </animated.div>
   
       
    </div>
  );
};

export default Card;

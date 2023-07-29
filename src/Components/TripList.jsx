// components/TripList.js
import React from 'react';
import { useSelector } from 'react-redux';
import TripItem from './TripItem';



const TripList = () => {
  const trips = useSelector((state) => state.trips);


  

 

  

  return (
   
    <div >
       {trips.length===0 ?<div className='  text-center font-semibold  text-teal-950 items-center justify-center text-4xl mt-36 bg'> <h1>Oops , There is no data🙁</h1></div> :
    <div className='grid grid-cols-2 sm:grid-cols-5 gap-4 overflow-hidden'>
      
      { trips.map((trip) => (
        <TripItem key={trip.id} trip={trip} />
      ))} 
    </div>
}

    </div>
  
   
  );
};

export default TripList;

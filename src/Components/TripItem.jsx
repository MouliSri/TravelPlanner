// components/TripItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTrip} from '../actions/tripActions';


const TripItem = ({ trip }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTrip(trip.id));
  };
 

  return (
    <div className=' bg-teal-100 h-60 w-48 m-10  hover:scale-110  rounded-lg text-center  hover:transition-shadow '>
      <div class="flex flex-col mb-4">
        <h1 className='font-serif underline'>Destination</h1>
      <h2> {trip.destination}</h2>
      </div>
      <div class="flex flex-col mb-4">
        <h1 className='font-serif'>Start Date</h1>
      <h2>{trip.startDate}</h2>
      </div>
      <div class="flex flex-col mb-4">
     <h1 className='font-serif'>End Date</h1>
      <h2>{trip.endDate}</h2>
      </div>
      <div class="flex flex-row mb-4">
      <button onClick={handleDelete} className='bg-teal-200 uppercase text-md mx-auto p-2 rounded hover:animate-bounce'>Delete</button>
    
      </div>
    </div>
  );
};

export default TripItem;

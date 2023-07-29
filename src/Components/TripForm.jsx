// components/TripForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTrip } from '../actions/tripActions';


function TripForm() {
    const dispatch = useDispatch();
    const [destination, setDestination] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const trip = {
            destination,
            startDate,
            endDate,
            activities: [],
        };
        console.log(trip)
        dispatch(addTrip(trip));
        setDestination('');
        setStartDate('');
        setEndDate('');
    };

    return (
      <div className='flex justify-center items-center h-screen w-full bg-teal-400  '>
        <div className="w-96 md:w-1/2 bg-white rounded shadow-2xl p-10 m-4">
        <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Trip Form</h1>
        <form onSubmit={handleSubmit} className=' mx-auto mt-10 h-80 w-80    grid grid-flow-row '>
        <div className="flex flex-col mb-4 ">
           <label className=" mb-2 font-bold text-lg text-gray-900">Enter the destination:</label>
            <input  className="border py-2 px-3 text-grey-800 w-48 md:w-80"
                type="text"
                placeholder="Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                required />
            </div>
            <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg text-gray-900">Enter the start Date</label>
            <input className="border py-2 px-3 text-grey-800 w-48 md:w-80  "
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required />
                </div>
           <div className="flex flex-col mb-4"> 
           <label className="mb-2 font-bold text-lg text-gray-900">Enter the End Date</label>
            <input className="border py-2 px-3 text-grey-800 w-48 md:w-80"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required />
              </div>
            <button type="submit"  className="block  bg-teal-400 hover:bg-gradient-to-r from-teal-500 to-teal-50 text-white uppercase text-lg mx-auto p-4  rounded">Add Trip</button>
        </form>
        </div>
        </div>
    );
}

export default TripForm;


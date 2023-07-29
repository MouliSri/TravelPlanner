// components/TripDetails.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTrip } from '../actions/tripActions';

const TripDetails = ({ trip }) => {
  const dispatch = useDispatch();
  const [destination, setDestination] = useState(trip.destination);
  const [startDate, setStartDate] = useState(trip.startDate);
  const [endDate, setEndDate] = useState(trip.endDate);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTrip = {
      ...trip,
      destination,
      startDate,
      endDate,
    };
    dispatch(updateTrip(updatedTrip));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        required
      />
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        required
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        required
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default TripDetails;

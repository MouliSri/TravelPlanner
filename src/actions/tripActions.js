export const ADD_TRIP = 'ADD_TRIP';
export const DELETE_TRIP = 'DELETE_TRIP';
export const UPDATE_TRIP = 'UPDATE_TRIP';


export const addTrip = (tripData) => ({
    type: 'ADD_TRIP',
    payload: tripData,
  });
  
  export const updateTrip = (tripId, tripData) => ({
    type: 'UPDATE_TRIP',
    payload: { id: tripId, ...tripData },
  });
  
  export const deleteTrip = (tripId) => ({
    type: 'DELETE_TRIP',
    payload: tripId,
  });
  
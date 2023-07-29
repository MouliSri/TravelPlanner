

const initialState = [];

const tripsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TRIP':
      return [...state, action.payload];
    case 'UPDATE_TRIP':
      return state.map((trip) =>
        trip.id === action.payload.id ? { ...trip, ...action.payload } : trip
      );
    case 'DELETE_TRIP':
      return state.filter((trip) => trip.id !== action.payload);
    default:
      return state;
  }
};

export default tripsReducer;

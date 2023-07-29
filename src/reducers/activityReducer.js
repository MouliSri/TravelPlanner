

const initialState = [];

const activitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ACTIVITY':
      return [...state, action.payload];
      case 'DELETE_ACTIVITY':
        return state.filter((Activity) => Activity.id !== action.payload);
    default:
      return state;
  }
};

export default activitiesReducer;



 



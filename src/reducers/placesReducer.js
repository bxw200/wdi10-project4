const initialState = [];

export default function placesReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PLACE':
      return addPlace(state, action.payload);
    default:
      return state;
  }
}

function addPlace(state, payload){
  return [...state, payload];  
}

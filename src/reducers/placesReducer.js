const initialState = [];

export default function placesReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PLACE':
      return addPlace(state, action.payload);
    case 'UPDATE_PLACE':
      return updatePlace(state, action.payload);
    case 'ADD_PLACES':
      return addPlaces(state, action.payload);
    default:
      return state;
  }
}


function updatePlace(state, payload) {
  return state.map(place=>{
    return (place.id === payload.id)? payload:place;
  });
}

function addPlace(state, payload){
  return [...state, payload];
}

function addPlaces(state, payload){
  // ... 'spreads' the payload.
  // otherwise, it will be arrays inside an array element.
  return [...state, ...payload];
}

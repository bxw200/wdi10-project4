const initialState = [];

export default function userSelectedTripsReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TRIP':
      return addTrip(state, action.trip);
    case 'ADD_TRIPS':
      return addTrips(state, action.trips);
    case 'REMOVE_TRIP':
      return removeTrip(state, action.trip);
    case 'REMOVE_TRIPS':
      return removeTrips();
    default:
      return state;
  }
}

function addTrip(state, payload){
  if (state && state.length > 0) {
    const found = state.find(trip=> trip.id === payload.id);
    if (!found) {
      state.push(payload);
    }
    return [...state];
  }else {
    return [payload];
  }
}

function removeTrip(state, payload){
  if (state && state.length > 0) {
    const foundIndex = state.findIndex(trip=> trip.id === payload.id);
    if (foundIndex >= 0){
      state.splice(foundIndex,1);
    }
  }
  return [...state];
}

function removeTrips(){
  return [];
}

function addTrips(state, payload){
  if (state && state.length > 0) {
    payload.forEach(trip=>{
      const found = state.find(ust=> ust.id === trip.id)
      if (!found) {
        state.push(trip);
      }
    });
  }else {
    state = [...payload];
  }
  return [...state];
}

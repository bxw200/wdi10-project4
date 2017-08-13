const initialState = [];

export default function userSelectedTripsReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TRIP':
      return addTrip(state, action.payload);
    case 'ADD_TRIPS':
      return addTrips(state, action.payload);
    case 'REMOVE_TRIP':
      return removeTrip(state, action.payload);
    case 'REMOVE_TRIPS':
      return removeTrips();
    case 'UPDATE_TRIP':
      return updateTrip(state, action.payload);
    default:
      return state;
  }
}

function addTrip(state, payload){
  // state not mutated. Aug 13 2017.
  if (state && state.length > 0) {
    const found = state.find(trip=> trip.id === payload.id);
    if (!found) {
      return [...state, payload];
    }
    return [...state];
  }else {
    return [payload];
  }
}

function removeTrip(state, payload){
  return state.filter((trip, index) => {
    return trip.id != payload.id
  });
}

function removeTrips(){
  return [];
}

function addTrips(state, payload){
  if (state && state.length > 0) {
    let result = [...state];
    payload.forEach(trip=>{
      const found = state.find(ust=> ust.id === trip.id)
      if (!found) {
        result.push(trip);
      }
    });
    return result;
  }else {
    return [...payload];
  }
}

function updateTrip(state, payload) {
  return state.map(trip=>{
    if (trip.id === payload.id) {

      let result = {...trip};
      result.pax = payload.pax;
      return result;

    }else {
      return trip;
    }
  });
}

export function addTrip(payload) {
  return {
    type:'ADD_TRIP',
    payload
  };
}

export function addTrips(payload) {
  return {
    type:'ADD_TRIPS',
    payload
  };
}

export function removeTrip(payload) {
  return {
    type:'REMOVE_TRIP',
    payload
  };
}

export function removeTrips() {
  return {
    type:'REMOVE_TRIPS'
  };
}

export function updateTrip(payload) {
  return {
    type:'UPDATE_TRIP',
    payload
  };
}

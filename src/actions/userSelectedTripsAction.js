export function addTrip(trip) {
  return {
    type:'ADD_TRIP',
    trip
  };
}

export function addTrips(trips) {
  return {
    type:'ADD_TRIPS',
    trips
  };
}

export function removeTrip(trip) {
  return {
    type:'REMOVE_TRIP',
    trip
  };
}

export function removeTrips() {
  return {
    type:'REMOVE_TRIPS'
  };
}

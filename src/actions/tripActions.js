import axios from 'axios'

const addTrips = (trips) => {
  return {
    type: 'ADD_TRIPS',
    trips
  }
}

const fetchTrips = () => {
  return {
    type: 'GET_TRIPS'

  }
}

export const getTrips = () => {
  return (dispatch) => {
    // get trips from database
    dispatch(fetchTrips())
    axios.get('/trips')
      .then((response) => {
        let trips = response.data
        console.log(response.data);
        // dispatch action to update store
        dispatch(addTrips(trips))
      })
      .catch((error) => {
        console.log(error);
      });

  }
}

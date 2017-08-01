const trips = (state={}, action) => {
  switch(action.type) {
    case 'ADD_TRIPS':
      return {
        ...state,
        trips: action.trips
      }
      break
    case 'GET_TRIPS':
      return state
      break
    default:
      return state
  }
}

export default trips

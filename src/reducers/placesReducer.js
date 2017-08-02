const initialState = {
  locations:[],
  categories:[]
};

export default function placesReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PLACE':
      return addLocation(state, action.payload);
    case 'ADD_CATEGORY':
      return addCategory(state, action.payload);
    default:
      return state;
  }
}

function addLocation(state, payload){
  let placeFound = state.locations.find((itm) => {
                    return itm.id === payload.id
                  });
  if (placeFound) {
  }else {
    state.locations.push(payload);
  }
  return {...state};
}

function addCategory(state, payload){
  let categoryFound = state.categories.find((itm) => {
                    return itm.id === payload.id
                  });
  if (categoryFound) {
  }else {
    state.categories.push(payload);
  }
  return {...state};
}

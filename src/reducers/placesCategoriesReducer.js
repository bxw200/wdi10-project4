const initialState = {
    categories:[]
};



/**
 *  categories reducer
 */
// import { fromJS } from 'immutable';

// Import Action Types
// import { ACTION_TYPE } from './constants';

// const initialState = fromJS({
//   placeCategories: []
// });

function categories(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_CATEGORIES':
      return {
        ...state,
        categories: [action.payload]
      }

      // [...state,
      //        action.payload];
   case 'UPDATE_CATEGORY':
       return {
         ...state,
         categories: [...state.categories, action.payload]
       }
    default:
      return state;
  }
}

export default categories;

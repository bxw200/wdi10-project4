import thunk from 'redux-thunk';
import {
  createStore,
  compose,
  combineReducers,
  applyMiddleware
} from 'redux';

//reducers
import AuthReducer from '../reducers/authReducer';
import userCheckReducer from '../reducers/userCheckReducer'
import catReducer from '../reducers/categoriesReducer'
import placesReducer from '../reducers/placesReducer'
import tripReducer from '../reducers/tripReducer'

export let initStore = (persistedState) => {

  const reducer = combineReducers ({
    auth: AuthReducer,
    itinerary: userCheckReducer,
    categories: catReducer,
    places: placesReducer,
    trips: tripReducer
  });
  return createStore(reducer,
                     persistedState,
                     compose(applyMiddleware(thunk),
                             window.devToolsExtension?
                              window.devToolsExtension():
                              f=>f
                            ));
}

export default initStore;

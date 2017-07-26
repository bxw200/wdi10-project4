import thunk from 'redux-thunk';
import {
  createStore,
  compose,
  combineReducers,
  applyMiddleware
} from 'redux';
// import thunk from 'redux-thunk';

//reducers
import AuthReducer from '../reducers/authReducer';
import userCheckReducer from '../reducers/userCheckReducer'


export let initStore = () => {

  const reducer = combineReducers ({
    auth: AuthReducer,
    itinerary: userCheckReducer
  });
  return createStore(reducer,
                     compose(applyMiddleware(thunk),
                             window.devToolsExtension?
                              window.devToolsExtension():
                              f=>f
                            ));
}



export default initStore;
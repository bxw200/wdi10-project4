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


export let initStore = () => {

  const reducer = combineReducers ({
    auth: AuthReducer
  });
  return createStore(reducer,
                     compose(applyMiddleware(thunk),
                             window.devToolsExtension?
                              window.devToolsExtension():
                              f=>f
                            ));
}



export default initStore;

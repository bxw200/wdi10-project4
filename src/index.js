import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import initStore from './store/store';

import {addPlaces} from './actions/placesAction';
import {addCategories} from './actions/categoriesAction';


const persistedState = localStorage.getItem('itina') ?
                       JSON.parse(localStorage.getItem('reduxState')) : {}

let store = initStore(persistedState);

// update changes in store to localStorage
store.subscribe(() => {
  const state = store.getState();
  if (state.places.length > 0) {
    localStorage.setItem('places', JSON.stringify(state.places));
  }

  // if (state.categories.length > 0) {
  //   localStorage.setItem('categories', JSON.stringify(state.categories));
  // }
});

// initiate store values from localStorage
let places = JSON.parse(localStorage.getItem('places'));
if (places && places.length > 0) {
    store.dispatch(addPlaces(places));
}

// let categories = JSON.parse(localStorage.getItem('categories'));
// if (categories && categories.length > 0) {
//   store.dispatch(addCategories(categories));
// }

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import initStore from './store/store';
import {persistStoreToLocalStorage} from './store/storeToLocalStorage';

import {addPlaces} from './actions/placesAction';
import {addCategories} from './actions/categoriesAction';
import {addTrips} from './actions/userSelectedTripsAction';

const persistedState = localStorage.getItem('itina') ?
                       JSON.parse(localStorage.getItem('reduxState')) : {}

let store = initStore(persistedState);

persistStoreToLocalStorage(store);

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

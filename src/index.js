import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import initStore from './store/store';


const persistedState = localStorage.getItem('itina') ?
                       JSON.parse(localStorage.getItem('reduxState')) : {}

let store = initStore(persistedState);

store.subscribe(() => {
  const state = store.getState();
  console.log("store state", state);
  localStorage.setItem('itina.places', JSON.Stringify(state.places.places));
  localStorage.setItem('itina.categories', JSON.Stringify(state.categories));
});


store.dispatch


ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

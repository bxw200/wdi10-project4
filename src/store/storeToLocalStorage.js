import {addPlaces} from '../actions/placesAction';
import {addCategories} from '../actions/categoriesAction';
import {addTrips} from '../actions/userSelectedTripsAction';

export const persistStoreToLocalStorage = (store)=>{

  // update changes in store to localStorage
  store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('places', JSON.stringify(state.places));
    localStorage.setItem('user_trips', JSON.stringify(state.user_trips));

    // if (state.categories.length > 0) {
    //   localStorage.setItem('categories', JSON.stringify(state.categories));
    // }
  });

  // populate store with values from localStorage
  let places = JSON.parse(localStorage.getItem('places'));
  if (Array.isArray(places)) {
    store.dispatch(addPlaces(places));
  }

  let user_trips = JSON.parse(localStorage.getItem('user_trips'));
  if (Array.isArray(user_trips)) {
    store.dispatch(addTrips(user_trips));
  }

  // let categories = JSON.parse(localStorage.getItem('categories'));
  // if (categories && categories.length > 0) {
  //   store.dispatch(addCategories(categories));
  // }
}

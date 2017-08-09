import {addPlaces} from '../actions/placesAction';
import {addCategories} from '../actions/categoriesAction';
import {addTrips} from '../actions/userSelectedTripsAction';

export const persistStoreToLocalStorage = (store)=>{

  // <editor-fold update changes in store to localStorage
  store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('places', JSON.stringify(state.places));
    // if (state.places.length > 0) {
    //   localStorage.setItem('places', JSON.stringify(state.places));
    // }

    // if (state.categories.length > 0) {
    //   localStorage.setItem('categories', JSON.stringify(state.categories));
    // }

    localStorage.setItem('user_trips', JSON.stringify(state.user_trips));
    // if (state.user_trips.length > 0) {
    //   localStorage.setItem('user_trips', JSON.stringify(state.user_trips));
    // }
  });
  // </editor-fold>

  // <editor-fold initiate store values from localStorage
  let places = JSON.parse(localStorage.getItem('places'));
  store.dispatch(addPlaces(places));

  let user_trips = JSON.parse(localStorage.getItem('user_trips'));
  store.dispatch(addTrips(user_trips));

  // if (places && places.length > 0) {
  //     store.dispatch(addPlaces(places));
  // }

  // let categories = JSON.parse(localStorage.getItem('categories'));
  // if (categories && categories.length > 0) {
  //   store.dispatch(addCategories(categories));
  // }

  // if (user_trips && user_trips.length > 0) {
  //   store.dispatch(addTrips(user_trips));
  // }
  // </editor-fold>

}

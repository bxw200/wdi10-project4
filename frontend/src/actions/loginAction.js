// No need for reducer since it's redirecting you to a page.
import axios from 'axios';
import * as AuthAction from './authAction'

// handling login only
export const login = (credentials, history) => {
    //need to return another function
    return (dispatch) => {
      axios.post('/auth/login/' , credentials)
      .then( (response) => {

        dispatch (AuthAction.login());

        // it's a function that redirects to the profile page.
        // the response contains the .id. Using the .id, it's going to redirect to the
        // profile route.
        // history is an object of react-router. It contains a function 'Push' with is used to
        history.push("/")

      })
      .catch((error) => {
        console.log(error);
      });
    }
}

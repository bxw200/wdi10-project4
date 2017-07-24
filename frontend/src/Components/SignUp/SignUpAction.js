import axios from 'axios';

export const signUp = (profile, history) => {
    //need to return another function
    return (dispatch) => {
      axios.post('/api/profile/' , profile)
      .then( (response) => {
        console.log("Post SignUp Data", response);
        // it's a function that redirects to the profile page.
        // the response contains the .id. Using the .id, it's going to redirect to the
        // profile route.
        history.push("/" + response.data._id)
      })
      .catch((error) => {
        console.log(error);
      });
    }
}

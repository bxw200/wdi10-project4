const initState = {
  email:"",
  password:"",
  name:"",
  isAuthenticated:false
}



const isAuthenticated = (state = initState, action) => {
  switch (action.type) {
    case 'AUTHENTICATED_STATE':
      return {
        ...state,
        isAuthenticated : action.isAuthenticated
      }
      break;

      default:
        return state;

      }
    }

  export default isAuthenticated;

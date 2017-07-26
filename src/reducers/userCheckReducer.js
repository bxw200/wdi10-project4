const initState = {
  name:"",
  price:""
}



const isChecked = (state = initState, action) => {
  switch (action.type) {
    case 'usercheck':
      return {
        ...state,
      }
      break;

      default:
        return state;

      }
    }

  export default isChecked;

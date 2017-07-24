export const login = () => {
    localStorage.setItem('isAuthenticated', true);
    return {type: 'AUTHENTICATED_STATE', isAuthenticated: true};
};


  export const logout = () => {
      //need to return another function
      return {type: "AUTHENTICATED_STATE", isAuthenticated : false};
  }

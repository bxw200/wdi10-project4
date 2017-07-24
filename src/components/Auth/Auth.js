import {Redirect} from 'react-router';
import React from 'react';
import {connect} from 'react-redux';


// turning authenticated to it's own higher order component. Connecting it
// so that you can pass the authenticated state into it.
const mapStateToProps = ({auth = {isAuthenticated: false}}) => ({
   isAuthenticated:  auth.isAuthenticated
});


export const Authenticated = (Wrapped) => connect(mapStateToProps)(({isAuthenticated, ...rest}) => {
  return isAuthenticated ?
      (<Wrapped {...rest} />) :
      (<Redirect to="/login"/>)
});

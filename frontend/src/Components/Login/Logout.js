import React , { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {logout} from './LogoutAction';

export const Logout = (props) => {
  props.logout(props.history)
  return (<div>You have been successfully logged out.</div>)
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
      logout(history){
        dispatch(logout(history))
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, InputGroup, ControlLabel, FormControl, Glyphicon, Row, Col, Form, Checkbox } from 'react-bootstrap';
// import { login } from './LoginAction';

// import './Login.css'

export default class Error extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div>
        404 Not Found
      </div>
    );
  }
}

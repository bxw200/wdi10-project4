import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  FormGroup,
  InputGroup,
  ControlLabel,
  FormControl,
  Glyphicon,
  Row,
  Col,
  Form, Checkbox } from 'react-bootstrap';

import {signUp} from '../../actions/signUpAction';
// import './signUp.css';

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {

      name: '',
      email: '',
      password: '',
      gender:'',
      age:'',

    }
  }

  onChange = (e) => {
    let state = this.state
    let field = e.target.name;
    let value = e.target.value;
    // setState takes an object. the {} creates a new object.
    // Field is the property that you are changing.
    // if you put "field : value", js will think that are are assigning a key property of field.
    //[field] will give you the value of field which is what you would want.
    this.setState({...state, [field]: value})
    console.log('state', this.state)
  }

  onClick = (e) => {

    this.props.profile(this.state, this.props.history);

  }


  render() {
    return (
    <div className="signupBody">

    <Row className="show-grid">
     <h1 id="signUpTitle">Sign Up</h1>
        <p id="subtitle">Get Planner</p>
        <Col md={6} mdPush={6}>


        <Button bsStyle="success"
                className="signup"
                onClick={this.onClick}>
                Sign Up</Button>
        </Col>

        <Col md={6} mdPull={6}>
        <FormGroup bsSize="large">

          <div className="SignUpField">
            <p>Name:</p>
              <FormControl
                          id="formControlsText"
                          type="name"
                          name="name"
                          placeholder="Name"
                          onChange={this.onChange}
                          />
          </div>

          <div className="SignUpField">
            <p>Password:</p>
              <FormControl
                          id="formControlsText"
                          type="password"
                          name="password"
                          placeholder="Password"
                          onChange={this.onChange}
              />
          </div>

          <div className="SignUpField">
            <p>Age:</p>
              <FormControl
              id="formControlsText"
              type="title"
              name="age"
              placeholder="Age"
              onChange={this.onChange}
              />
          </div>

          <div className="SignUpField">
            <p>Gender:</p>
              <FormControl
                id="formControlsText"
                componentClass="textarea"
                name="gender"
                placeholder="Gender"
                onChange={this.onChange}/>
          </div>

          <div className="SignUpField">
            <p>Email:</p>
              <FormControl
                id="formControlsText"
                componentClass="textarea"
                name="email"
                placeholder="Email"
                onChange={this.onChange}/>
          </div>


        </FormGroup>

        </Col>
      </Row>
</div>);
  }
}


// A higher order component is when you do a {connect}: a higher-order component is a function that takes a
// component and returns a new component.
const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
      profile(state, history){
        dispatch(signUp(state, history))
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

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

import './Profile.css'

export class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.history,
      name: '',
      password: '',
      email : '',
      trips : []
    }
  }

  // onChange = (e) => {
  //   let state = this.state
  //   let field = e.target.name;
  //   let value = e.target.value;
  //
  //   this.setState({...state, [field]: value})
  //   console.log('state', this.state)
  // }
  //
  onClick = (e) => {

    this.props.profile(this.state, this.props.history);

  }

  render() {
    const UserOwnTrips = this.state.trip.itinerary.place.map((trip, place) => {
      return (
        <div key={trip.id}>
          <h3>{trip.place.name}</h3>
          <p>{trip.place.address}</p>
        </div> ) });
    return (
    <div className="profileBody">

    <Row className="show-grid">

        <Col md={8} mdOffset={2} >
        <h1 id="profileTitle">User Profile</h1>
        <FormGroup bsSize="large">

          <div className="nameField">
            <p>Place holder for user name:</p>
            <Button bsStyle="info"
                    className="profile"
                    onClick={this.onClick}>
                    Edit</Button>
          </div>

          <div className="passwordField">
            <p>Place holder for user Password:</p>
            <Button bsStyle="info"
                    className="profile"
                    onClick={this.onClick}>
                    Edit</Button>
          </div>

          <div className="ageField">
            <p>Place holder for user Age:</p>
            <Button bsStyle="info"
                    className="profile"
                    onClick={this.onClick}>
                    Edit</Button>
          </div>

          <div className="genderField">
            <p>Place holder for user Gender:</p>
            <Button bsStyle="info"
                    className="profile"
                    onClick={this.onClick}>
                    Edit</Button>
          </div>

          <div className="emailField">
            <p>Place holder for user Email:</p>
            <Button bsStyle="info"
                    className="profile"
                    onClick={this.onClick}>
                    Edit</Button>
          </div>

        </FormGroup>

        </Col>
      </Row>
      <Row>
        <Col md={8} mdOffset={2} >
          {UserOwnTrips}
        </Col>
      </Row>
    </div>);
      }
    }


// A higher order component is when you do a {connect}: a higher-order component is a function that takes a
// component and returns a new component.
const mapStateToProps = (state) => {
    return {
      // email:state.auth.email,
      // password:state.auth.password,
      // name:state.auth.name,
      // gender:state.auth.gender,
      // age:state.auth.age
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      profile(state, history){
        dispatch(Profile(state, history))
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

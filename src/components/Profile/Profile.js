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
import { getTrips } from '../../actions/tripActions'
import axios from 'axios'

const trips = [
    {
    duration: 1,
    pax: 4,
    budget: 500,
      itineraries: [
        {
          places: [
            {
              id: 26,
              name: "National Museum of Singapore",
              address: "bras basah",
              lat: "1.2967",
              lng: "103.8486",
              price_pax: 500,
              duration: 1

            }
          ]
        }
      ]
    }
  ]


const UserOwnTrips = trips.map((trip, id) => {
  return (
    <div key={trip.id}>
    {trip.itineraries.map((itinerary, id) => {
      return (
        <div key={itinerary.id}>
      {itinerary.places.map((place,id) => {
        return (
          <div key = {place.id}>
          <h3>{place.name}</h3>
          <p>{place.address}</p>
          </div>
        )
      })
    }
      </div>
        )
      }
    )
  }
    </div>
  )
}
)

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

  componentDidMount() {
    // axios.get('/trips')
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    //   this.props.getTrips()
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
//trip.map(element)
//iterate element thru trip to get itineraries
//itinerary.map(element)
// access data from state --> access to individual items ( share the same scope)
//
//
  render() {


    //trip.id ref for each element (onlyin the trip)
    //id is index placced on currrent trip (similar to i in for loop)
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
  };

}



// A higher order component is when you do a {connect}: a higher-order component is a function that takes a
// component and returns a new component.
const mapStateToProps = (state) => {
    return {
      trips: state.trips
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      // profile(state, history){
      //   dispatch(Profile(state, history))
      // },
      getTrips: () => {dispatch(getTrips())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

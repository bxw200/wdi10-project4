import React, {Component, PropTypes} from 'react';
import {UserTripSelection} from './UserTripSelection.js';
import Redux from 'react-redux';
import axios from 'axios';

import { Link } from 'react-router-dom';

import {
  Button, Navbar, NavItem, Nav, Grid, Image, Row, Col
} from 'react-bootstrap';
import './SurpriseMe.css';

export default class ResultPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {place: [] };
    // this.handleClick = this.handleClick.bind(this);
  }

  selectAgain = (e) => {

    console.log('clicked: Select Again');
  }

  surpriseMe = (e) => {

  // var NewItinerary= React.createClass({

  confirmTrip= (e) => {

    const user = {

name: "john iubhiuhbidufb",
email: "john@fire.orgxc xnicj xicj ixjbc",
password: "johvdvsv",

trips: [
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
address: null,
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
}



  //     const toggle = this.state.completed ? false : true;
      console.log('clicked: Confirm trip');
      // var name = this.state.place.name.value;
      // var duration = this.state.place.duration.value;

      axios.post('/users', user).
      then(res => {
        console.log('Trip confirmed, new trip confirmation worked!', res);
      }).catch( err => {
        console.log('error in creating trip', err);
      });
  }
  // getInitialState() {
  //   return { places: [] }
  // }
  // componentDidMount() { this.props.getJSON('/api/place.json', (place) => {
  //   this.setState({ places: place })
  //   });
  // }
  render() {
    var placeresult = this.state.place.map((place) => {
      return (
        <div key={place.id}>
          <h3>{place.name}</h3>
          <p>{place.address}</p>
        </div> ) });
    return (
      <div>
        <Row className="show-grid">
          <Col xs={4} md={4}>
              <div className="result">
                <h2>Result 1</h2>
                {placeresult}
              </div>
          </Col>
          <Col xs={4} md={4}>
              <div className="result">
                <h2>Result 2</h2>
                {placeresult}
              </div>
          </Col>
          <Col xs={4} md={4}>
              <div className="result">
                <h2>Result 3</h2>
                {placeresult}
              </div>
          </Col>
        </Row>
        <Row className="resultchoices">
          <Col xs={2} md={2}>
          <Link
          className="btn btn-info"
          role="button"
          to="/trip_selection"
          onClick={this.selectAgain()}>Select Again!
          </Link>

          </Col>
          <Col xs={2} md={2}>
          <Link
          className="btn btn-info"
          role="button"
          to="/surpriseme"
          onClick={this.surpriseMe()}>Surprise me!
          </Link>
          </Col>

          <Col xs={2} md={2}>
          <Link
          className="btn btn-info"
          role="button"
          to="/profile"
          onClick={this.confirmTrip()}>Confirm your trip!
          </Link>
          </Col>
        </Row>
      </div>
    );
  }
}




// export default connect(
//     (state) => {
//       return state;
//     }
// ) (ResultPreview);

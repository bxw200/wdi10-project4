import React, {Component, PropTypes} from 'react';
import {UserTripSelection} from './UserTripSelection.js';
import Redux from 'react-redux';
import axios from 'axios';

import { Link } from 'react-router-dom';

import {
  Button, Navbar, NavItem, Nav, Grid, Image, Row, Col
} from 'react-bootstrap';
import './ResultPreview.css';

export default class ResultPreview extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {isToggleOn: true};
    // this.handleClick = this.handleClick.bind(this);
  }

  // onClick = (e) => {
  //
  //     const toggle = this.state.completed ? false : true;
  //     console.log('clicked: ', toggle);
  //
  //     this.props.toggleTodo(this.props.todo.id);
  //
  //     this.setState( {
  //       completed: toggle
  //     });
  // }

  selectAgain = (e) => {

      // const toggle = this.state.completed ? false : true;
      console.log('clicked: Select Again');

      // this.props.toggleTodo(this.props.todo.id);
      //
      // this.setState( {
      //   completed: toggle
      // });
  }

  surpriseMe = (e) => {
  //
  //     const toggle = this.state.completed ? false : true;
      console.log('clicked: Surprise me!');
  //
  //     this.props.toggleTodo(this.props.todo.id);
  //
  //     this.setState( {
  //       completed: toggle
  //     });
  }

  confirmTrip= (e) => {
  //
  //     const toggle = this.state.completed ? false : true;
      console.log('clicked: Confirm trip');
  //
      // this.props.trip(this.props.history);
  //
  //     this.setState( {
  //       completed: toggle
  //     });
  }

  // function selectAgain(e) = {
  //   console.log('Select again!');
  // }
  //
  // function confirmTrip(e) = {
  //   console.log('confirm your trip!');
  // }


  // getInitialState() {
  //   return { places: [] }
  // }
  // componentDidMount() { this.props.getJSON('/api/place.json', (place) => {
  //   this.setState({ places: place })
  //   });
  // }

  //under render
  // var PlaceResult = this.state.place.map((place) => {
  //   return (
  //     <div key={place.id}>
  //       <h3>{place.name}</h3>
  //       <p>{place.address}</p>
  //     </div> ) });


  render() {

    return (
      <div>
        <Row className="show-grid">
          <Col xs={4} md={4}>
              <div className="result">
                <h2>Result 1</h2>

              </div>
          </Col>
          <Col xs={4} md={4}>
              <div className="result">
                <h2>Result 2</h2>

              </div>
          </Col>
          <Col xs={4} md={4}>
              <div className="result">
                <h2>Result 3</h2>

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
          to="/resultpreview"
          onClick={this.surpriseMe()}>Surprise me!
          </Link>
          </Col>

          <Col xs={2} md={2}>
          <Link
          className="btn btn-info"
          role="button"
          to="/itinerary"
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

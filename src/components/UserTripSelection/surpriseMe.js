import React, {Component, PropTypes} from 'react';
import {UserTripSelection} from './UserTripSelection.js';
import Redux from 'react-redux';
import axios from 'axios';

import { Link } from 'react-router-dom';

import {
  Button, Navbar, NavItem, Nav, Grid, Image, Row, Col
} from 'react-bootstrap';

import {BUDGET, CATEGORY} from './categoryAndBudget';
import './ResultPreview.css';
import Location from '../Location/Location';
import data from '../../data/data';

export default class ResultPreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
			disabled: false,
			crazy: false,
			options: CATEGORY,
			value: [],
			sentToServer: true
		};

  }


  selectAgain = (e) => {

    console.log('clicked: Select Again');
  }

  surpriseMe = (e) => {

    console.log('clicked: Surprise me!');

  }

  confirmTrip= (e) => {

      console.log('clicked: Confirm trip');

  }

  render() {

    const dispSurprise = this.state.sentToServer? (<div className="randomSurprise">
			<Location location={data[Math.floor(Math.random()*3)+1]}/>
			<Location location={data[Math.floor(Math.random()*3)+1]}/>
			<Location location={data[Math.floor(Math.random()*3)+1]}/>
		</div>):"";


    return (
      <div>

        {dispSurprise}

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
          to="/surpriseMe"
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

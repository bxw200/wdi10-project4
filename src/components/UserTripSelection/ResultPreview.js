import React, {Component, PropTypes} from 'react';
import {UserTripSelection} from './UserTripSelection.js';

import {
  Button, Navbar, NavItem, Nav, Grid, Image, Row, Col
} from 'react-bootstrap';
import './UserTripSelection.css';

export default class ResultPreview extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <Row className="show-grid">
          <Col xs={4} md={4}>
              <div className="result1">
                <h2>Result 1</h2>
              </div>
          </Col>
          <Col xs={4} md={4}>
              <div className="result2">
                <h2>Result 2</h2>
              </div>
          </Col>
          <Col xs={4} md={4}>
              <div className="result3">
                <h2>Result 3</h2>
              </div>
          </Col>
        </Row>
        <Row className="resultchoices">
          <Col xs={2} md={2}>
            <button className="btn-primary" Link to="/trip_selection">Select again</button>
          </Col>
          <Col xs={2} md={2}>
            <button className="btn-primary" onClick={this.generateAgain}>Surprise me!</button>
          </Col>
          <Col xs={2} md={2}>
            <button className="btn-success" Link to="/itinerary">Confirm your trip!</button>
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

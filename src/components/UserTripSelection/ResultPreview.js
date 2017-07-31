import React, {Component, PropTypes} from 'react';
import {UserTripSelection} from '/UserTripSelection.js';

import {
  Button, Navbar, NavItem, Nav, Grid, Image, Row, Col
} from 'react-bootstrap';

export default class ResultPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  selectAgain (value) {
    console.log("You've selected:", value);
    this.setState({ value });
  }

  render() {
    return (
      <div>
        <Row className="show-grid">
          <Col xs={4} md={4}>
              <div className="result1"></div>
          </Col>
          <Col xs={4} md={4}>
              <div className="result2"></div>
          </Col>
          <Col xs={4} md={4}>
              <div className="result3"></div>
          </Col>
        </Row>
        <Row className="resultchoices">
          <Col xs={2} md={2}>
            <button className="btn-primary" onClick={this.selectAgain} href="/trip_selection">Select again</button>
          </Col>
          <Col xs={2} md={2}>
            <button className="btn-primary" onClick={this.generateAgain}>Surprise me!</button>
          </Col>
          <Col xs={2} md={2}>
            <button className="btn-success" onClick={this.confirmTrip} href="/resultpreview">Confirm your trip!</button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(
    (state) => {
      return state;
    }
) (ResultPreview);

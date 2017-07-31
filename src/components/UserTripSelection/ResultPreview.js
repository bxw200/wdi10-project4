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
              <div className="result1"></div>
              <label className="checkbox">
                <input type="checkbox" className="checkbox-delete" checked={this.state.disabled} onChange={this.toggleDisabled} />
                <span className="checkbox-label">Delete</span>
              </label>
          </Col>
          <Col xs={4} md={4}>
              <div className="result2"></div>
              <label className="checkbox">
                <input type="checkbox" className="checkbox-delete" checked={this.state.disabled} onChange={this.toggleDisabled} />
                <span className="checkbox-label">Delete</span>
              </label>
          </Col>
          <Col xs={4} md={4}>
              <div className="result3"></div>
              <label className="checkbox">
                <input type="checkbox" className="checkbox-delete" checked={this.state.disabled} onChange={this.toggleDisabled} />
                <span className="checkbox-label">Delete</span>
              </label>
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

export default connect(
    (state) => {
      return state;
    }
) (ResultPreview);

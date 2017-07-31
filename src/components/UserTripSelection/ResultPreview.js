import React, {Component, PropTypes} from 'react';
import {UserTripSelection} from 'UserTripSelection.js';

import {
  Button, Navbar, NavItem, Nav, Grid, Image, Row, Col
} from 'react-bootstrap';

export default class ResultPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Row className="show-grid">
          <Col xs={4} md={4}>
              <ResultPreview className="result1"/>
          </Col>
          <Col xs={4} md={4}>
              <ResultPreview className="result2"/>
          </Col>
          <Col xs={4} md={4}>
              <ResultPreview className="result3"/>
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

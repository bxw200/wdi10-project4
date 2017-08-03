import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

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

import data from '../../data/data';
import {dummyData} from './dummyData';
import './Itinerary.css';

class Itinerary extends Component {
    constructor(props){
      super(props);

      this.state ={
        name:'',
        price:'',
        user: {
          name: "not found",
          email: "not found",
          trips: [{
            itineraries: [{
              places: [{
                price_pax: "not found"
              }]
            }]
            ,pax: -1
          }]

        }
      }
    }

    render() {
      const row = (name, price, pax) => (
        <Row className="show-grid">
          <Col md={3}>
            {name}
          </Col>
          <Col md={3}>
            ${price}
          </Col>
          <Col md={3}>
            {pax}
          </Col>
          <Col md={3}>
            ${price*pax}
          </Col>
        </Row>);


      return (
        <div className="confirmTripsDiv">
          <Row className="show-grid">
            <Col md={3}>
              <h3>Name</h3>
            </Col>
            <Col md={3}>
              <h3>Price</h3>
            </Col>
            <Col md={3}>
              <h3>Pax</h3>
            </Col>
            <Col md={3}>
              <h3>Total</h3>
            </Col>
          </Row>

          {dummyData.map(loc =>
               row(loc.name, loc.price, loc.pax)
          )}

          <div>
            <a href="/">
            <Button bsStyle="primary">Confirm</Button>
            </a>
          </div>
        </div>

      );
    }
}

export default Itinerary;

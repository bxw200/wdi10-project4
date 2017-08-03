import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import {Button,FormGroup,InputGroup,ControlLabel,FormControl,Glyphicon,Row,Col,Form,Checkbox}
from 'react-bootstrap';

import firstDummyData from '../../data/data';
import {dummyData} from './dummyData';
import './Itinerary.css';

import {mjo} from './massiveJSONobj';

class Itinerary extends Component {
    constructor(props){
      super(props);
      let data = localStorage.getItem('user-trip-selection')
      // console.log(JSON.parse(data));
      data = JSON.parse(data);
      this.state = {
          data
      };
    }


    confirmTripsClick = () => {
      const svrPath = 'users/1';
      axios.post(svrPath,mjo).
      then(res=>{
        if (res.data) {
          console.log(`server post to ${svrPath} responded with data: `, res.data);
        }else {
          console.log(`server post to ${svrPath} responded: `, res);
        }
      }).
      catch(err=>{
        if (err.response) {
          console.error(`server post to ${svrPath} error. responded with: `, err.response);
        }else {
          console.error(`server post to ${svrPath} error: `, err.response);
        }
      });
    }

    render() {
      const {data} = this.state;
      const dataRow = (name, price, pax) => (
        <Row className="show-grid data-row">
          <Col xsHidden md={1}>
          </Col>
          <Col md={3}>
            {name}
          </Col>
          <Col md={2}>
            ${price}
          </Col>
          <Col md={2}>
            {pax}
          </Col>
          <Col md={3}>
            ${price*pax}
          </Col>
        </Row>);
      return (
        <div className="confirmTripsDiv">
          <Row className="show-grid table-headers">
            <Col xsHidden md={1}>
            </Col>
            <Col md={3}>
              <h3>Name</h3>
            </Col>
            <Col md={2}>
              <h3>Price</h3>
            </Col>
            <Col md={2}>
              <h3>Pax</h3>
            </Col>
            <Col md={3}>
              <h3>Total</h3>
            </Col>
          </Row>
          <Row className="datas">
          {
            data?
            data.map(loc =>
               dataRow(loc.name, loc.price_pax, 5)):""
          }
          </Row>

            {/*<a href="/">*/}
              <Button bsStyle="primary" onClick={this.confirmTripsClick}>Confirm</Button>
            {/*</a>*/}

        </div>

      );
    }
}

export default Itinerary;


// this.state = {
//   name:'',
//   price:'',
//   user: {
//     name: "not found",
//     email: "not found",
//     trips: [{
//       itineraries: [{
//         places: [{
//           price_pax: "not found"
//         }]
//       }]
//       ,pax: -1
//     }]
//
//   }
// }

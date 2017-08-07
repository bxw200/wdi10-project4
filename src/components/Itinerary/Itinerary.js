import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import {Button, Row, Col}
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
      // mytesting works
      // axios.get('mytesting').then(res=>
      //   console.log(res)
      // ).catch(err=>console.error(err));
      // return;

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

    dataRow = (name, price, pax) => (
      <tr>
        <td>{name.trim()}</td>
        <td>{price}</td>
        <td>{pax}</td>
        <td>$ {price * pax}</td>
      </tr>
      );

    render() {
      const {data} = this.state;
      return(
        <div>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Pax</td>
            <td>Total</td>
          </tr>
        </thead>
        <tbody>
          {
            data?
            data.map(loc =>
               this.dataRow(loc.name, loc.price_pax, 5)):""
          }
        </tbody>
      </table>
      <Button bsStyle="primary" onClick={this.confirmTripsClick}>Confirm</Button>
      </div>
    )
    }
}
export default Itinerary;

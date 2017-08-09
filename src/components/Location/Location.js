import React, { Component} from 'react';
import { connect } from 'react-redux';

import { Checkbox, Button,Row, Col } from 'react-bootstrap';

import './Location.css';

export default class Location extends Component {
    constructor(props){
      super(props);

      this.state = {
        pax:0
      }
    }

    checkBoxChange = (e) => {
      let pax = this.state.pax;
      // !! beware! pax === 0 ! 1 is string the other is int.
      // pax == 0 works.
      if (e.target.checked && pax == 0){
          pax = 1;
      }else if (!e.target.checked) {
        pax = 0;
      }else {
        return;
      }
      this.setState({pax});
      // cannot use state.pax, as it doesn't update immediately.↓
      // tried setState callback doesn't seem to get called.
      this.props.updated(this.props.location, pax);
    }

    paxInputChanged = (e) => {
      this.setState({
        pax: e.target.value
      });
      // cannot use state.pax, as it doesn't update immediately.↓
      this.props.updated(this.props.location, e.target.value);
    }

    render() {
      const { name, price_pax, image, description, image_url, address} = this.props.location;
      const {pax} = this.state;
      const going = pax > 0;

      const hideElemClass = this.props.dontShowCheckbox?" hidden":"";

      return (
    <div className="place thumbnail" >
      <Row className="show-grid">
        <Col xs={6} md={4}>
          <img src={`images/${image_url}`}
               alt="product"
               onClick={this.pictureClicked}/>
          </Col>
        <div className="caption">
          <Col xs={12} md={8}>
            <h2>
              <a href={`images/${image_url}`}>{name}</a>
            </h2>
            <div className={"checkbox-section" + hideElemClass}>
              <h3>
                <span className={going?"span-is-going":"span-not-going"}>
                  {going? "I'm going!":"Take me there!"}
                </span>
                <input type="checkBox"
                       value={going}
                       checked={going}
                       onChange={this.checkBoxChange}/>
              </h3>
            </div>
            <div className="pricesDiv">
              <span>$$ <b>Price</b>/<em>pax</em>: <strong>$ {price_pax}</strong></span>
              <span className={hideElemClass}>
                <label>Pax:</label>
                <input type="number"
                       max="20"
                       min="0"
                       placeholder="0"
                       value={pax}
                       onChange={this.paxInputChanged}/>
                 <label>Price: $ {price_pax*pax}</label>
               </span>
            </div>
            <p>{address}</p>
          </Col>
        </div>
      </Row>
    </div>
      );
    }
}

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Checkbox, Button,Row, Col } from 'react-bootstrap';

import './Location.css';

class Location extends Component {
    constructor(props){
      super(props);

      this.state = {
        view: "locations",
        going: false,
        name:"Some place",
        price: 200,
        description:"This is some place",
        pax:0,
        image_url:"images/3.png",
      }
    }

    checkBoxChange = (e) => {
      let pax = this.state.pax;
      if (e.target.checked) {
        if (pax === 0) {
          pax = 1;
        }
      }else {
        pax = 0;
      }

      this.setState({
        going: e.target.checked,
        pax
      });

      // raise to set in store
      this.props.checkChanged(e.target.checked, this.props.location, this.state.pax);
    }

    paxInputChanged = (e) => {
      const pax = parseInt(e.target.value);
      let going = this.state.going;

      if (pax === 0) {
        going = false;
      }else if (pax === 1) {
        going = true;
      }
      this.setState({going});
      this.setState({pax});
      this.props.checkChanged(e.target.checked, this.props.location, this.state.pax);
    }

    render() {
      const { name, price_pax, image, description, image_url, address} = this.props.location;
      const {pax} = this.state;

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
            <div className={this.props.dontShowCheckbox?
                    "donShowCheckBoxSection":"checkbox-section"}>
              <h3>
                <span className={this.state.going?
                                "span-is-going":"span-not-going"}>
                  {this.state.going? "I'm going!":"Take me there!"}
                </span>
                <input type="checkBox"
                       value={this.state.going}
                       checked={this.state.going}
                       ref={(el)=>this._checkbox = el}
                       onChange={this.checkBoxChange}/>
              </h3>
            </div>
            <div className="pricesDiv">
              <span>$$ <b>Price</b>/<em>pax</em>: <strong>$ {price_pax}</strong></span>
              <label>Pax:</label>
              <input type="number"
                     max="20"
                     min="0"
                     placeholder="0"
                     value={this.state.pax}
                     ref={(el)=> this._input = el}
                     onChange={this.paxInputChanged}/>
               <label>Price: $ {price_pax*pax}</label>
            </div>
            <p>{address}</p>
          </Col>
        </div>
      </Row>
    </div>
      );
    }
}

export default Location;

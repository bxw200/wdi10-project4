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
        pax:3,
        image_url:"images/3.png",
      }
    }
    intervalChecker = null;
    componentDidMount(){
      this.intervalChecker = setInterval(()=>{
        let paxInput = document.querySelector('.pricesDiv input[type=number]');

        if (paxInput.value != this.state.pax) {
          console.log('im in');
            this.setState({
              pax: paxInput.value
            });
        }

        if (paxInput.value == 0) {

        }else {

        }
      },610);
    }

    componentWillUnmount(){
      window.clearInterval(this.intervalChecker);
      // console.log(`intervalChecker cleared`);
    }

    checkBoxChange = (e) => {
      this.setState({
        going: e.target.checked
      });
      this.props.checkChanged(e.target.checked, this.props.location);
    }

    render() {
      const { name, price_pax, image, description, image_url, address} = this.props.location;
      const {pax} = this.state;

      return (
    <div className="place thumbnail" >
      <Row className="show-grid">
        <Col xs={6} md={4}>
          <img src={"images/"+image_url}
               alt="product"
               onClick={this.pictureClicked}/>
          </Col>
        <div className="caption">
          <Col xs={12} md={8}>
            <h2>
              <a href={"images/"+image_url}>{name}</a>
            </h2>
            <div className={this.props.dontShowCheckbox?
                    "donShowCheckBoxSection":"checkbox-section"}>
              <h3>
                <span className={this.state.going?
                                "span-is-going":"span-not-going"}>
                  {this.state.going? "I'm going!":"Take me there!"}
                </span>
                <input type="checkBox" onChange={this.checkBoxChange}/>
              </h3>
            </div>
            <div className="pricesDiv">
              <span>$$ <b>Price</b>/<em>pax</em>: <strong>$ {price_pax}</strong></span>
              <label>Pax:</label>
              <input type="number"
                     max="20"
                     min="0"
                     placeholder="0"
                     onChange={console.log(`I was changed`)}/>
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

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Checkbox, Button } from 'react-bootstrap';

import './Location.css';

class Product extends Component {
    constructor(props){
      super(props);

      this.state = {
        going: false
      }
    }

    checkBoxChange = (e) => {
      // console.log("in checkbox change");
      // e.preventDefault(); causes issue with response

      this.setState({
        going: !this.state.going
      });


    }

    render() {
      const {
        name, price, image, description, pax, url
      } = this.props.location;

      console.log(this.props.location);
      return (
          <div className="product div thumbnail" >
              <img src={image}alt="product" onClick={this.pictureClicked}/>
              <div className="caption">
                  <h3>
                    <a href={url}>{name}</a>
                    <input type="checkBox" onChange={this.checkBoxChange}/>
                    <span>
                    {this.state.going? "I'm going!":"Take me there!"}
                    </span>
                  </h3>
                  <div className="product__price row">
                    <div className="col-md-3">
                      <strong className="dPrice">${price}</strong>
                    </div>
                    <div className="col-md-4">
                      <strong className="Pax">Pax: {pax}</strong>
                    </div>
                    <div className="col-md-5">
                      <strong className="totalPrice">to: ${price*pax}</strong>
                    </div>
                  </div>
                  <p>
                  {description}
                  </p>
              </div>
          </div>
      );
    }
}

Product.propTypes = {
    // id: PropTypes.number.isRequired,
    // name: PropTypes.string.isRequired,
    // price: PropTypes.number,
    // currency: PropTypes.string,
    // image: PropTypes.string,
    // url: PropTypes.string,
    // addToCart: PropTypes.func.isRequired,
    // removeFromCart: PropTypes.func.isRequired,
    // removeAllFromCart: PropTypes.func.isRequired,
    // quantityInCart: PropTypes.number
}

// const mapStateToProps = (state, props) => {
//     return {
//         quantityInCart: getItemQtyInCart(state, props)
//     }
// }
//
// const mapDispatchToProps = (dispatch) => ({
//     addToCart: (id) => dispatch(addToCart(id)),
//     removeFromCart: (id) => dispatch(removeFromCart(id)),
//     removeAllFromCart: (id) => dispatch(removeAllFromCart(id))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Product);

export default Product;

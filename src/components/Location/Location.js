import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// import { getItemQtyInCart } from '../../apis/cartAPI';
// import {
//   addToCart,
//   removeFromCart,
//   removeAllFromCart} from  '../../actions/cartActions';

import './Location.css';

class Product extends Component {
    constructor(props){
      super(props);
    }

    removeItemClicked = (e) => {
      e.preventDefault();
      return;
      // eslint-disable-next-line
      const { id, removeFromCart, removeAllFromCart } = this.props;

      if (e.target.name === 'minusOne') {
        removeFromCart(id);
      }else if (e.target.name === 'minusAll') {
        removeAllFromCart(id);
      }
    }

    // add item to cart.
    pictureClicked = (e) => {
        e.preventDefault();
return;
        const {addToCart, id} = this.props;
        addToCart(id);
    }

    render() {
      // eslint-disable-next-line
      const { name,
              price,
              currency,
              image,
              url,
              qty,
              quantityInCart } = this.props;

      var cartQty, minusAllButton, minusOneButton;
      if (quantityInCart) {
        cartQty = (<span className="qtySpan">{quantityInCart}</span>);
        minusOneButton = (
          <button
            name="minusOne"
            className='btn btn-danger'
            onClick={this.removeItemClicked}>  - 1</button>);
        if (quantityInCart > 1) {
            minusAllButton =
            (<button name="minusAll"
                    className='btn btn-danger'
                    onClick={this.removeItemClicked}>- All</button>)
        }
      }

      return (
          <div className="product thumbnail" >
              <img src="background.png" alt="product" onClick={this.pictureClicked}/>
              <div className="caption">
                  <h3>
                      <a href={url}>Japan</a>
                  </h3>
                  <div className="product__price row">
                    <div className="col-md-3">
                      <strong className="dPrice">$500</strong> {currency}
                    </div>
                    <div className="col-md-4">
                      <strong className="dPrice">Pax: 5</strong> {currency}
                    </div>
                    <div className="col-md-5">
                      <strong className="dPrice">$to: 2500$</strong> {currency}
                    </div>
                  </div>
                  <p>
                  Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
              </div>
          </div>
      );
    }
}

Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    currency: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    removeAllFromCart: PropTypes.func.isRequired,
    quantityInCart: PropTypes.number
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

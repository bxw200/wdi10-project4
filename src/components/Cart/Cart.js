import React, {PropTypes} from 'react';
import Location from '../Location/Location'
import './Cart.css'

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className='cartLocationsDiv'>
      <Location/>
      <Location/>
      <Location/>
      <Location/>
      <Location/>
      </div>);
  }
}

Cart.propTypes = {
};

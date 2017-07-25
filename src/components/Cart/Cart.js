import React, {PropTypes} from 'react';
import Location from '../Location/Location'
import data from '../../data/data';

import './Cart.css'

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className='cartLocationsDiv'>

      {data.map(loc =>(
          <Location key={loc.id} location={loc}/>

      ))}
      </div>);
  }
}

Cart.propTypes = {
};

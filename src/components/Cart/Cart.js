import React, {PropTypes} from 'react';
import Location from '../Location/Location'
import data from '../../data/data';
import { Button } from 'react-bootstrap';

import './Cart.css'

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className='cartLocationsDiv'>
      {
        data.map(x =>(<Location key={x.id} location={x}/>))
      }
      <div>
      <a href="/itinerary">
      <Button bsStyle="primary">Primary</Button>
      </a>
      </div>
      </div>);
  }
}

Cart.propTypes = {
};

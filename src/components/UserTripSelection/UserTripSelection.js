import React, {PropTypes} from 'react';

import './UserTripSelection.css';

export default class UserTripSelection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="messageDiv">
          <img src="images/1.png" alt="Choose an option for where you want to go."/>
          <p>Hi! Choose an option for where you want to go.</p>
        </div>
        <div className="selectionDiv">
          <button className="btn btn-success">By Category</button>
          <button className="btn btn-info">By Budget  </button>          
        </div>
      </div>);
  }
}

UserTripSelection.propTypes = {
};

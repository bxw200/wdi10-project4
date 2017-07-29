import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
// import TodoListView from '../TodoListView/TodoListView';

import './UserTripSelection.css';

export default class UserTripSelection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tripselection } = this.props;

    const renderTripSelection = () => {
      if(onClick(className="select-category")) {
        return (
          <div>What are you interested in doing?</div>
        )
      }
      elseif(onClick(className="select-budget")) {
        return (
          <div>How much is your budget per person?</div>
        )
      }
      else {


      }

//map takes the todos in the state (array) & maps it
      // return tripselection.map( (tripselection) => {
      //   console.log(tripselection)
      //   return (
      //     <TodoListView todo={todo} />
      //
      // });
    }

    return (
      <div>
        <div className="messageDiv">
          <img src="images/1.png" alt="Choose an option for where you want to go."/>
          <p>Hi! Choose an option for where you want to go.</p>
        </div>
        <div className="selectionDiv">
          <button className="btn btn-success select-category">By Category</button>
          <button className="btn btn-info select-budget">By Budget  </button>
        </div>
      </div>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps) (UserTripSelection);

export default connect(
    (state) => {
      return state;
    }
) (UserTripSelection);

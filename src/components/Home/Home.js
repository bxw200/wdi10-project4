import React, {PropTypes} from 'react';

import './Home.css';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='homeDiv'>
        <h1>Say Hello! to iTina</h1>
        <span>
          <div className = "logo"> logo here</div>
        </span>
        <div>
          <section>
            <span>
              <h2>When there's time on your hands but you don't know what you want to do.</h2>
              <h2>...and for doing things you never had time for.</h2>
            </span>

          </section>

          <section>
            <h2>Let iTina help! </h2>
          </section>
        </div>
        <a href='/login'>
          <button>Let's go! </button>
        </a>
      </div>
    );
  }
}

Home.propTypes = {
};

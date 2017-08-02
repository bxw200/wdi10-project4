import React, {PropTypes} from 'react';
import axios from 'axios';
import {Row, Col, Form, Checkbox } from 'react-bootstrap';

import './Home.css';

import {connect} from 'react-redux';
import {addCategory} from '../../actions/categoriesAction';
import {addPlace} from '../../actions/placesAction';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    //<editor-fold must work with store
    // let urlCall = 'places';
    // axios.get(urlCall).then(res=>{
    //   if (res.data) {
    //     console.log(`server ${urlCall}-call responded with data. `, res.data);
    //     res.data.forEach(place=>{
    //       this.props.addPlace(place);
    //     });
    //   }else {
    //     console.log(`server ${urlCall}-call responded, but no data. `, res);
    //   }
    // }).catch(err=>{
    //   if (err.response) {
    //     console.warn(`server ${urlCall}-call responded with error. `, err.response);
    //   }else {
    //     console.error(`server ${urlCall}-call (error) didn't respond. `, err);
    //   }
    // }).then(()=>{
    //
    //
    //   urlCall = 'categories';
    //
    //   axios.get('categories').then(res=>{
    //     if (res.data) {
    //       console.log(`server ${urlCall}-call responded with data. `, res.data);
    //       res.data.forEach(cat=>{
    //         this.props.addCategory(cat);
    //       });
    //     }else {
    //       console.log(`server ${urlCall}-call responded, but no data. `, res);
    //     }
    //   }).catch(err=>{
    //     if (err.response) {
    //       console.warn(`server ${urlCall}-call responded with error. `, err.response);
    //     }else {
    //       console.error(`server ${urlCall}-call (error) didn't respond. `, err);
    //     }
    //   })
    //
    // })
    // </editor-fold>
  }


  render() {
    return (
      <div className="box">
        <div className='homeDiv'>
          <Row className="show-grid 1">
            <Col xs={12} md={8}>
              <h1>Say Hello! to iTina</h1>
            </Col>
            <Col xs={6} md={4}>
              <span>
                <div className = "logo">
                  <img src="images/logo.png" alt="Logo"></img>
                </div>
              </span>
            </Col>
          </Row>
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
          <button>Let's get started! </button>
        </a>
      </div>
      </div>
    );
  }
}

Home.propTypes = {
};

const mapDispatchToProps = (dispatch) =>{
  return {
    addCategory: (cat) => {
        dispatch(addCategory(cat));
    },
    addPlace: (place) => {
      dispatch(addPlace(place));
    }
  }
}


export default connect(null, mapDispatchToProps)(Home);

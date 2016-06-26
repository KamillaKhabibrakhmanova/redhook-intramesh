/*
 *
 * About
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';

export class About extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.about}>
      This is AboutPage container !
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapDispatchToProps)(About);

/*
 *
 * About
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';
import htmlContent from './about.html'

export class About extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.about}>
        <div dangerouslySetInnerHTML={ {__html: htmlContent} } />
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

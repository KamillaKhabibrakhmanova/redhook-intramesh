/**
*
* Header
*
*/

import React from 'react';

import styles from './styles.css';

function Header() {
  return (
    <div className={styles.header}>
      
    </div>

    <div className="container">
	    <div className='row'>
	      <header>
	        <ul className="nav nav-pills pull-right">
	          <li><a href="#">About</a></li>
	        </ul>
	        <h1>Red Hook Intramesh</h1>
	        <h5 className="text-muted">Emergency neighborhood-wide intranet</h5>
	      </header>
	</div>

  );
}

export default Header;

/**
*
* Navbar
*
*/

import React from 'react';

import styles from './styles.css';
import {Navbar} from 'react-bootstrap'

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Brand</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
            </FormGroup>
            {' '}
            <Button type="submit">Submit</Button>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navbar;

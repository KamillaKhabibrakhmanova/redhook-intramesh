/**
*
* ReplyBox
*
*/

import React from 'react';
import {FormGroup, FormControl, HelpBlock, Button} from 'react-bootstrap'
import styles from './styles.css';

const ReplyBox = React.createClass({
  getInitialState() {
    return {
      value: ''
    };
  },

  getValidationState() {
    const length = this.state.value.length;
  },

  handleChange(e) {
    this.setState({ value: e.target.value });
  },

  render() {
    return (
        <form>
          <FormGroup
              controlId="formBasicText"
              validationState={this.getValidationState()}
          >
            <FormControl
                type="text"
                value={this.state.value}
                placeholder="Enter text"
                onChange={this.handleChange}
            />
            <HelpBlock>Validation is based on string length.</HelpBlock>
          </FormGroup>
          <Button type="submit">
            Submit
          </Button>
        </form>
    );
  }
});

export default ReplyBox;

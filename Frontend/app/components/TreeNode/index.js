/**
*
* TreeNode
*
*/

import React from 'react';
import classNames from 'classnames'
import styles from './styles.css';

var TreeNode = React.createClass({
  getInitialState: function() {
    return {isVisible: false};
  },

  toggle: function(e) {
    this.setState({isVisible: !this.state.isVisible});
  },

  render: function() {
    var icon = this.state.isVisible ? '-' : '+';
    var nodes;


    if (this.props.children) {
      if (this.state.isVisible) {
        nodes = this.props.children.map((i) => <TreeNode node={i} children={i.children} />);
      }
    }

    return (
      <div>
      <li style={styles} onClick={this.toggle}>
        <div class='post clearfix reply'>
          <div class='quote-level'>
            <div class='message-container'>
              <div class='person-container'>
                <div class='name'>{this.props.node.name}</div>
              </div>
              <div class='date-container'>
                <div class='time'>{this.props.node.time}</div>
                <div class='date'>{this.props.node.date}</div>
              </div>
              <div class='message'>{this.props.node.comment}</div>
              <footer>
                <div class='reply-button'><a href='#'><img src='/images/reply.gif' width="25" border='0' /></a></div>
                <div class='load-replies-container'><a  href='#'>Load Replies</a></div>
              </footer>
            </div>
          </div>
        </div>
      </li>
        <ul>{nodes}</ul>
      </div>
    );
  }
});

export default TreeNode;

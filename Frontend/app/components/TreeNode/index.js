/**
*
* TreeNode
*
*/

import React from 'react';
import classNames from 'classnames'
import styles from './styles.sass';


var TreeNode = React.createClass({
  getInitialState: function() {
    return {isVisible: false};
  },

  toggle: function(e) {
    this.setState({isVisible: !this.state.isVisible});
  },

  render: function() {
    var nodes;


    if (this.props.children) {
      if (this.state.isVisible) {
        nodes = this.props.children.map((i) => <TreeNode node={i} children={i.children} />);
      }
    }

    return (
      <div>
      <li style={styles} onClick={this.toggle}>
        <div className='post clearfix reply'>
          <div className='quote-level'>
            <div className='message-container'>
              <div className='person-container'>
                <div className='name'>{this.props.node.name}</div>
              </div>
              <div className='date-container'>
                <div className='time'>{this.props.node.time}</div>
                <div className='date'>{this.props.node.date}</div>
              </div>
              <div className='message'>{this.props.node.comment}</div>
              <footer>
                <div className='reply-button'><a href='#'><img src='/images/reply.gif' width="25" border='0' /></a></div>
                <div className='load-replies-container'><a  href='#'>Load Replies</a></div>
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

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
    var span;
    var nodes;


    if (this.props.children) {
      span = <span className="icon" >{icon}</span>;

      if (this.state.isVisible) {
        nodes = this.props.children.map((i) => <TreeNode node={i} children={i.children} />);
      }
    }

    return (
      <div>
      <li style={styles} onClick={this.toggle}>
        {span}
        {this.props.node.name}
        <br/>
        {this.props.node.comment}
      </li>
        <ul>{nodes}</ul>
        </div>
    );
  }
});

export default TreeNode;

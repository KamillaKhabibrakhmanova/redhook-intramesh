/**
*
* Root
*
*/

import React from 'react';
import TreeNode from 'components/TreeNode'

import styles from './styles.css';

class Root extends React.Component {
  render() {
    var nodes = this.props.tree.map((i) => <TreeNode node={i} children={i.children} />)
    return (
        <div style={styles}>
          <ul>{nodes}</ul>
        </div>
    );
  }
}

export default Root;

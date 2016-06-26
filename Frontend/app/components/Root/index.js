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
    var threads = this.props.list.map((i) => <TreeNode node={i} children={i.children} />)
    return (
        <div style={styles} className = "treeRoot">
          <ul>{threads}</ul>
        </div>
    );
  }
}

export default Root;

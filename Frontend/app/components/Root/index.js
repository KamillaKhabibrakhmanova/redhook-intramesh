/**
*
* Root
*
*/

import React from 'react';
import TreeNode from 'components/TreeNode'

import styles from './styles.css';

var Root = React.createClass({
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
                            foobar
                        </div>
                    </div>
                </li>
                <ul>{nodes}</ul>
            </div>
        );
    }
});

export default Root;

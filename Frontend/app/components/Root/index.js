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
                nodes = this.props.children.map((i) => <TreeNode level={1} node={i} children={i.children} />);
            }
        }

        return (
            <div>
                    <div className='post clearfix reply'>
                    	<div className="message-container">
	                    	<div className="person-container">
	                    		<div className='name'>{this.props.node.name}</div>
	                    	</div>
	                    	<div className='date-container'>
	                    	  <div className='time'>{this.props.node.time}</div>
	                    	  <div className='date'>{this.props.node.date}</div>
	                    	</div>
	                        <div className='subject'>
	                            {this.props.node.comment}
	                            <a onClick={this.toggle}>+</a>
	                        </div>
	                    </div>
                   </div>
                <ul>{nodes}</ul>
            </div>
        );
    }
});

export default Root;

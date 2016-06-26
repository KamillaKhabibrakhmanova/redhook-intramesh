/**
*
* TreeNode
*
*/

import React from 'react';
import classNames from 'classnames'
import styles from './styles.sass';
import ReplyBox from 'components/ReplyBox'


var TreeNode = React.createClass({
  getInitialState: function() {
    return {isVisible: true, replying: false};
  },

  toggle: function(e) {
    this.setState({isVisible: !this.state.isVisible});
  },

  reply: function(e) {
      this.setState({replying: !this.state.replying});
  },

  render: function() {
    var nodes,showReplies, replyBox;

    var divStyle = function(n){
      return "margin-left: " + n*5 + 'px'
    };


    if (this.props.children) {
      if (this.state.isVisible) {
        nodes = this.props.children.map((i) => <TreeNode level={this.props.level + 1} node={i} children={i.children} />);
      }
    }

    if(this.props.children) {
        showReplies = <div className='load-replies-container'><a onClick={this.toggle} href='#'>Load Replies</a></div>;
    }
      
      if (this.state.replying){
          replyBox = <ReplyBox />
      }

    return (
      <div>

        <div className='post clearfix reply'>
          <div className='quote-level'>
            <div className={"message-container level-" +this.props.level} style={{marginLeft: this.props.level + 'em'}}  >
              <div className='person-container'>
                <div className='name'>{this.props.node.name}</div>
              </div>
              <div className='date-container'>
                <div className='time'>{this.props.node.time}</div>
                <div className='date'>{this.props.node.date}</div>
              </div>
              <div className='message'>{this.props.node.comment}</div>
              <footer>
                <div className='reply-button'><a onClick={this.reply} href='#'><div className='reply-button-base64'></div></a></div>
                  { replyBox }
                { showReplies }
              </footer>
            </div>
          </div>
        </div>
        <ul>{nodes}</ul>
      </div>
    );
  }
});

export default TreeNode;

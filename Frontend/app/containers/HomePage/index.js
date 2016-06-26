/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */
var json = [
  {
    id: 1,
    name: 'Bob',
    time: '5:25PM',
    date: '6/25/16',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ',
    children: [
      {
        id: 2,
        name: 'Mary',
        time: '5:25PM',
        date: '6/25/16',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ',
        children: [
          {
            id: 7,
            name: 'Paul',
            time: '5:25PM',
            date: '6/25/16',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ',
          }
        ]
      },
      {
        id: 3,
        name: 'Phil',
        time: '5:25PM',
        date: '6/25/16',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ',
        children: [
          {
            id: 5,
            name: 'Jon',
            time: '5:25PM',
            date: '6/25/16',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ',
          },
          {
            id: 6,
            name: 'Paul',
            time: '5:25PM',
            date: '6/25/16',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ',
          }
        ]
      }
    ]
  }
];

import React from 'react';
import TreeNode from 'components/TreeNode'
import Root from 'components/Root'

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.json = json;
  }
  render() {
      var threads = this.json.map((i) =>
          <Root node={i} children={i.children} />)
      return (
          <div >
              <ul>{threads}</ul>
          </div>
      );
  }
}

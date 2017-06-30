import React from 'react';

import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import __ from 'lodash';
import moment from 'moment';
import accounting from 'accounting';
import { Link } from 'react-router';
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      height: window.innerHeight,
      pictureSelect: 0
    }
  }
  render(){
    return (
      <div>
        <Link to={'/contact'} activeClassName="active">contact</Link>
      </div>
    )
  }
}
const MyQuery = gql`
    query getTasks{
      getTasks {
        _id
      }
    }`
export default compose(
graphql(MyQuery, {
    options: (ownProps) => ({
      fetchPolicy: true
    }),
    name: 'getTasks',
})
)(Home);

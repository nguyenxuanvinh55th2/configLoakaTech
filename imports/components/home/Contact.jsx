import React from 'react';
import { Link } from 'react-router';
export default class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>
        Contact
        <Link to={'/'} activeClassName="active">home</Link>
      </div>
    )
  }
}

import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = React.createClass({
  render(){
    return(
      <div className="menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    )
  }

})

export default Header;

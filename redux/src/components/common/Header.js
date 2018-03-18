import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = React.createClass({
  render(){
    return(
      <div className="menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/signup">Sign up</Link></li>
          <li><Link to="/signin">Sign in</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
          <li><Link to="/group">My Groups</Link></li>
          <li><Link to="/friendchat">Friend chat</Link></li>
        </ul>
      </div>
    );
  }

});

export default Header;

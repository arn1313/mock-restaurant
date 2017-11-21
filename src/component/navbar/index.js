import React from 'react';
// import './_navbar.scss';
import * as utils from '../../lib/utils';
import {Link} from 'react-router-dom';


class Navbar extends React.Component {

  render() {
    return (
      <div className="container">
        <header className="header-world">
          <div className="kritter-header">
            <img className="kritter-logo" height="50px" width="50px"/>
            <Link to="/home"><h1>Home</h1></Link>
            <Link to="/home"><h1>Home</h1></Link>

          </div>
          <div className="nav-header">
          </div>
        </header>
      </div >
    );
  }
}

export default Navbar;

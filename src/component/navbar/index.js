import React from 'react';
import './_navbar.scss';
import {Link} from 'react-router-dom';



class Navbar extends React.Component {

  render() {
    return (
      <div className="header-container">
        <img className="logo" src="src/imgs/Logo.png"/>
        <header className="header-world">
          <Link to="/appetizer"><h2>Appetizer</h2></Link>
          <Link to="/entree"><h2>Entree</h2></Link>
          <Link to="/sides"><h2>Sides</h2></Link>
          <Link to="/gallery"><h2>Photo Gallery</h2></Link>
          <Link to="/contact"><h2>Contact</h2></Link>
        </header>
      </div >
    );
  }
}

export default Navbar;

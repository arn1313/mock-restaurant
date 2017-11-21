import React from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import Navbar from '../navbar';
import * as utils from '../.../lib/utils';
import Appetizer from '../appetizer';
import Entree from '../entree';
import Sides from '../sides';
import Contact from '../contact';
import Footer from '../footer';

class App extends React.Component {
  render() {
    return (
      <div className="application">
        <BrowserRouter>
          <div>
            <Navbar/>
            //HERO IMAGE
            <Route exact path="/appetizer" component={Appetizer}/>
            <Route exact path="/entree" component={Entree}/>
            <Route exact path="/sides" component={Sides}/>
            <Route exact path="/contact" component={Contact}/>
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

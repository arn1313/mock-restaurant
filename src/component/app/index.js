import React from 'react';
import './_app.scss';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import Navbar from '../navbar';
import Appetizer from '../appetizer';
import Entree from '../entree';
import Sides from '../sides';
import Contact from '../contact';
import Footer from '../footer';
import Spice from '../spice';
import Disclaimer from '../disclaimer';
import Gallery from '../gallery';

class App extends React.Component {
  render() {
    return (
      <div className="application">
        <BrowserRouter>
          <main>
            <Navbar/>
            <Spice/>
            //HERO IMAGE
            <Route exact path="/appetizer" component={Appetizer}/>
            <Route exact path="/entree" component={Entree}/>
            <Route exact path="/sides" component={Sides}/>
            <Route exact path="/gallery" component={Gallery}/>
            <Route exact path="/contact" component={Contact}/>
            <Disclaimer/>
            <Footer/>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

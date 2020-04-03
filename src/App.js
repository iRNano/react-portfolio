import React,{Fragment} from 'react';
import {BrowserRouter as Router, 
        Switch,
        Route
      } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home'
import Contact from './Contact';
import Projects from "./Projects";
import About from "./About";

const App = () =>{
  return(
    
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
           
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Fragment>
      </Router>
    
  )
}

export default App;

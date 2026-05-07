import React, { Fragment, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';

const Contact = lazy(() => import('./Contact'));
const Projects = lazy(() => import('./Projects'));
const About = lazy(() => import('./About'));

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Suspense fallback={<section>Loading...</section>}>
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
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Suspense>
      </Fragment>
    </Router>
  );
};

export default App;

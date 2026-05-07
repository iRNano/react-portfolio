import React, { Fragment, Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';

const loadContact = () =>
  import(/* webpackChunkName: "route-contact", webpackPrefetch: true */ './Contact');
const loadProjects = () =>
  import(/* webpackChunkName: "route-projects", webpackPrefetch: true */ './Projects');
const loadAbout = () =>
  import(/* webpackChunkName: "route-about", webpackPrefetch: true */ './About');

const Contact = lazy(loadContact);
const Projects = lazy(loadProjects);
const About = lazy(loadAbout);

const App = () => {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const prefetchRoutes = () => {
      loadContact();
      loadProjects();
      loadAbout();
    };

    const idleHandle = window.requestIdleCallback
      ? window.requestIdleCallback(prefetchRoutes)
      : window.setTimeout(prefetchRoutes, 1500);

    return () => {
      if (window.cancelIdleCallback) {
        window.cancelIdleCallback(idleHandle);
      } else {
        window.clearTimeout(idleHandle);
      }
    };
  }, []);

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

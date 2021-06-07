import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import * as Pages from './pages';

import './app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>

          {/* v2 */}
          <Route exact path="/"> <Pages.HomePage /> </Route>
          <Route path="/contact"> <Pages.ContactPage /> </Route>
          <Route path="/projects"> <Pages.ProjectsPage /> </Route>
          <Route path="/project/*"> <Pages.ProjectDetailPage /> </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

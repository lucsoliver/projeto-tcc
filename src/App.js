import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home";

import Quiz from "./Components/Quiz";
import Formulario from "./Components/Formulario";
import Mapa from "./Components/Mapa";

function App() {
  return (
    <Fragment>
      <Router>
        <div>
          <ul>
            <button className="btn-link">
              <Link to="/">Início</Link>
            </button>
            <button className="btn-link">
              <Link to="/quiz">Quiz</Link>
            </button>
            <button className="btn-link">
              <Link to="/formulario">Formulario</Link>
            </button>
            <button className="btn-link">
              <Link to="/mapa">Mapa</Link>
            </button>
          </ul>
        </div>

        <Switch>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/formulario">
            <Formulario />
          </Route>
          <Route path="/mapa">
            <Mapa />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;

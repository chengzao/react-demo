import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

import UseState from './component/UseState'
import UseEffect from './component/UseEffect'
import UseReducer from './component/UseReducer'

import AuthExample from './component/Auth'
import OuterRouter from './component/WithRouter'

function Topic({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>
      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function NoMatch({ location }) {
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
      <header className="nav">
        <ul>
          <li>
            <a href="https://zh-hans.reactjs.org/docs/hooks-intro.html" target="_blank" rel="noopener noreferrer">
              Learn React Hook
            </a>
          </li>
          <li>
            <Link to="/use-state">useState</Link>
          </li>
          <li>
            <Link to="/use-effect">useEffect</Link>
          </li>
          <li>
            <Link to="/use-reducer">useReducer</Link>
          </li>
          <li>
              <Link to="/abc">abc redirect</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <Link to="/auth">auth</Link>
          </li>
          <li>
            <Link to="/with-router">withRouter</Link>
          </li>
        </ul>
      </header>
      <main className="content">
        <Switch>
          <Route exact path="/" render={() => <h3>Home</h3>} />
          <Route path="/use-state" exact component={UseState} />
          <Route path="/use-effect" exact component={UseEffect} />
          <Route path="/use-reducer" exact component={UseReducer} />
          <Redirect from="/abc" to="/topics" />
          <Route path="/topics" component={Topics} />
          <Route path="/auth" component={AuthExample} />
          <Route path="/with-router" component={OuterRouter} />
          <Route component={NoMatch} />
        </Switch>
      </main>
      </Router>

    </div>
  );
}

export default App;

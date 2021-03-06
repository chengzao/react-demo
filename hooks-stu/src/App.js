import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

import UseState from './component/UseState'
import UseEffect from './component/UseEffect'
import UseReducer from './component/UseReducer'
import UseContext from './component/UseContext'
import UseRef from './component/UseRef'
import UseCallback from './component/UseCallback'
import CustomHook from './component/CustomHook'

import AuthExample from './component/Auth'
import OuterRouter from './component/WithRouter'
import Topics from './component/Topics'

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
            <Link to="/use-context">useContext</Link>
          </li>
          <li>
            <Link to="/use-ref">useRef</Link>
          </li>
          <li>
            <Link to="/use-callback">UseCallback</Link>
          </li>
          <li>
            <Link to="/custom-hook">CustomHook</Link>
          </li>
          <li>
            <Link to="/redirect">redirect Topics</Link>
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
          <Route path="/use-context" exact component={UseContext} />
          <Route path="/use-ref" exact component={UseRef} />
          <Route path="/use-callback" exact component={UseCallback} />
          <Route path="/custom-hook" exact component={CustomHook} />
          <Route path="/topics" component={Topics} />
          <Route path="/auth" component={AuthExample} />
          <Route path="/with-router" component={OuterRouter} />
          <Redirect from="/redirect" to="/topics" />
          <Route component={NoMatch} />
        </Switch>
      </main>
      </Router>
    </div>
  );
}

export default App;

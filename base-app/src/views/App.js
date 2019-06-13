import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom'

import './App.css'

import Todo from '../components/todo'
import Todo2 from '../components/todo2'
import LifeCycle from '../components/life-cycle'
import TransItem from '../components/transition'
import TransItem2 from '../components/transition2'
import TransItem3 from '../components/transition3'

import RouterComp from '../components/router-comp'

import WithRouterComp from '../components/with-router'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <p>
            <NavLink
              strict
              activeStyle={{ fontWeight: 'bold', color: 'red' }}
              exact
              to="/"
            >
              Home
            </NavLink>
          </p>
          <p>
            <NavLink strict to="/todo">
              Todo demo 1
            </NavLink>
          </p>
          <p>
            <NavLink strict to="/todo2">
              Todo demo component 1
            </NavLink>
          </p>
          <p>
            <NavLink strict to="/lifecycle">
              Life Cycle
            </NavLink>
          </p>
          <p>
            <NavLink strict to="/transtion">
              normal transtion
            </NavLink>
          </p>
          <p>
            <NavLink strict to="/transtion2">
              react transition group
            </NavLink>
          </p>
          <p>
            <NavLink strict to="/transtion3">
              react transition group 2
            </NavLink>
          </p>
          <RouterComp />
          <WithRouterComp />
          <Switch>
            <Route
              path="/"
              exact
              render={() => {
                return <div> Home Page</div>
              }}
            />
            <Route path="/todo" component={Todo} />
            <Route path="/todo2" component={Todo2} />
            <Route path="/lifecycle" component={LifeCycle} />
            <Route path="/transtion" component={TransItem} />
            <Route path="/transtion2" component={TransItem2} />
            <Route path="/transtion3" component={TransItem3} />

            <Route
              render={() => {
                return <div> Error Page Match! </div>
              }}
            />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App

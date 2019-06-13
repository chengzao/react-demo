import React, { Component, Fragment } from 'react';

import {Menu} from 'antd';

import  {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';

import Todo1 from '../Todo1/index';
import Todo2 from '../Todo2/index';
import Todo3 from '../Todo3/index';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Menu mode="horizontal">
            <Menu.Item key="todo1"><NavLink to='/todo1'>Todo1</NavLink></Menu.Item>
            <Menu.Item key="todo2"><NavLink to='/todo2'>Todo2</NavLink></Menu.Item>
            <Menu.Item key="todo3"><NavLink to='/todo3'>Todo3</NavLink></Menu.Item>
          </Menu>

          <Switch>
            <Route exact path='/' render={ () => {
              return ( <div>Home</div> )
            }}></Route>
            <Route path='/todo1' component={Todo1}></Route>
            <Route path='/todo2' component={Todo2}></Route>
            <Route path='/todo3' component={Todo3}></Route>
            <Route render={() => (<div>Error match </div>)}></Route>
          </Switch>

        </Fragment>
      </Router>
    );
  }
}

export default App;

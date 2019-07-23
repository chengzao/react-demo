import React, { Component, Fragment } from "react";
import "./App.css";

import TodoList from '../component/todo';
import Counter from '../component/counter';
import CounterVan from '../component/counter-van';
import Mask from './mask'

import SelectSearch from "./input";

class App extends Component {
  render() {
    return (
      <Fragment>
        <SelectSearch />
        <Mask></Mask>
        <TodoList></TodoList>
        <Counter></Counter>
        <CounterVan></CounterVan>
      </Fragment>
    );
  }
}

export default App;

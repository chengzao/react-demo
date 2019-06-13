import React, { Component, Fragment } from "react";
import "./App.css";

// import Modal from '../component/modal0'
// import TodoList from '../component/todo';
// import Counter from '../component/counter';
// import CounterVan from '../component/counter-van';

// import ModalMo from '../component/modal1';

// import Mask from './mask'

import SelectSearch from "./selectSearch3";

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>SelectSearch</h1>
        {/* <Modal /> */}
        {/* <ModalMo></ModalMo> */}

        <SelectSearch />

        {/* <Mask></Mask> */}

        {/* <TodoList></TodoList>
        <Counter></Counter>
        <CounterVan></CounterVan> */}
      </Fragment>
    );
  }
}

export default App;

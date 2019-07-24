import React, { Component } from 'react'

import ThemeDemo from './components/themeContext'
import ThemeButton from './components/context'
import UpdateContext from './components/updateContext'
import MultiContext from './components/multiContext'
import WithTheme from './components/withTheme'
import FancyCom from './components/refs'
import UseStateDemo from './components/useState'
class App extends Component {
  render() {
    return (
      <div className="App">
        <hr/>
        <ThemeButton /><hr />
        <ThemeDemo /><hr />
        <UpdateContext /><hr />
        <MultiContext /><hr />
        <WithTheme /><hr />
        <FancyCom /><hr />
        <UseStateDemo />
      </div>
    )
  }
}

export default App

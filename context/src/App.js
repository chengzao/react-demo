import React, { Component } from 'react'

import ThemeDemo from './components/themeContext'
import ThemeButton from './components/context'
import UpdateContext from './components/updateContext'
import MultiContext from './components/multiContext'
import WithTheme from './components/withTheme'
import FancyCom from './components/refs'
import UseStateDemo from './components/useState'
import RcSelect from './components/rcSelect'
class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeButton />
        <ThemeDemo />
        <UpdateContext />
        <MultiContext />
        <WithTheme />
        <FancyCom />
        <UseStateDemo />
        <RcSelect />
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import Toolbar from './Toolbar'
import { ThemeButtonContext } from './ThemeButtonContext'
import './index.scss'

export default class ThemeButton extends Component {
  render() {
    return (
      <div>
        <ThemeButtonContext.Provider value="dark-theme">
          <Toolbar theme="Dark" />
        </ThemeButtonContext.Provider>
        <ThemeButtonContext.Consumer>
          {value => (
            <div>App have no Provider Context Warp Default Value: {value} !</div>
          )}
        </ThemeButtonContext.Consumer>
      </div>
    )
  }
}

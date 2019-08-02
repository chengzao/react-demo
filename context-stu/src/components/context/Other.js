import React, { Component } from 'react'

import { ThemeButtonContext } from './ThemeButtonContext'

export default class Other extends Component {
  static contextType = ThemeButtonContext
  render() {
    console.log(this.context);
    return (
      <div className="other--red">
        <ThemeButtonContext.Consumer>
          {value => <div>Context Consumer Value {value} !</div>}
        </ThemeButtonContext.Consumer>
      </div>
    )
  }
}

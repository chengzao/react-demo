import React from 'react'

import { ThemeButtonContext } from './ThemeButtonContext'

import Button from './Button'

class ThemedButton extends React.Component {
  static contextType = ThemeButtonContext
  render() {
    return <Button theme={this.props.theme} value={this.context} />
  }
}

export default ThemedButton

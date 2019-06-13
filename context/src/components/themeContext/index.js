import React from 'react'
import { ThemeContext, themes } from './theme-context'
import ThemedButton from './themed-button'
import './style.scss'

// An intermediate component that uses the ThemedButton
function Toolbar(props) {
  return <ThemedButton onClick={props.changeTheme}>Change Theme</ThemedButton>
}

export default class ThemeDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: themes.light,
    }

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }))
    }
  }

  render() {
    // ThemedButton 位于 ThemeProvider 内
    // 在外部使用时使用来自 state 里面的 theme
    // 默认 dark theme
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <ThemedButton />
      </div>
    )
  }
}

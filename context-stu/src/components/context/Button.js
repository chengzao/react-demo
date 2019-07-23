import React, { Component } from 'react'

import Other from "./Other";

export default class Button extends Component {
  render() {
    const { theme, value } = this.props;
    // console.log(this.props);
    return (
      <div>
        Button Theme { theme} && ThemeContext Value {value} ~
        <Other></Other>
      </div>
    )
  }
}

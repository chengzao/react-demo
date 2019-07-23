import React, { Component } from 'react'

export default class ProfilePage extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.user } | {this.props.theme}
      </div>
    )
  }
}

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class HelloMessage extends Component {
  render() {
    return <h1> HelloMessage , {this.props.hello} </h1>
  }
}

class NoteList extends Component {
  render() {
    return (
      <ol>
        {this.props.children.map((child, index) => (
          <li key={index}>{child}</li>
        ))}
      </ol>
    )
  }
}

class MyTitle extends Component {
  render() {
    return <h1>{this.props.title}</h1>
  }
}

MyTitle.propTypes = {
  title: PropTypes.string
}

class LikeButton extends Component {
  state = {
    liked: false
  }
  handleClick() {
    // console.log(this)
    this.setState({
      liked: !this.state.liked
    })
  }
  render() {
    const text = this.state.liked ? 'liked' : "don't like"
    return (
      <div>
        <h2>React之this.state以及点击事件</h2>
        <p className="clickButton" onClick={() => this.handleClick()}>
          You {text} this.click to toggle
        </p>
      </div>
    )
  }
}

class OtherComp extends Component {
  handleClick() {
    this.refs.myTextInput.focus()
  }

  state = {
    value: 'Hello!'
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }
  render() {
    const names = ['react', 'vue', 'angular']
    const data = 'PropType'
    const val = this.state.value
    const arr = [<h5 key="1">Hello World</h5>, <h5 key="2">Hello React</h5>]
    return (
      <div className="App">
        <ul>
          {names.map((name, index) => {
            return <li key={index}> Hello , {name} </li>
          })}
        </ul>
        <h4>React组件嵌套组件以及数据传递子组件</h4>
        <HelloMessage hello="React" />
        <ol>{arr}</ol>

        <h4>this.props.children</h4>
        <NoteList>
          <span>Hello</span>
          <span>Wold</span>
          <span>React</span>
        </NoteList>

        <h4>React之PropTypes</h4>
        <MyTitle title={data} />

        <h4>React之ref</h4>
        <input type="text" ref="myTextInput" />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.handleClick.bind(this)}
        />
        <LikeButton />
        <div>
          <p>React之实现双向数据绑定</p>
          <input
            type="text"
            value={val}
            onChange={this.handleChange.bind(this)}
          />
          <p>{val}</p>
        </div>
      </div>
    )
  }
}

export default OtherComp

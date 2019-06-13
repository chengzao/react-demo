import React, {Component} from 'react';

class LifeCycle extends Component {
  constructor(props) {
    super(props)
    console.log('constructor')
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  render() {
    console.log('render')
    return (
      <div>Life Cycle</div>
    )
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  // 当组件(已有值)重新从父组件接收参数时， 会被执行
  componentWillReceiveProps (){
    console.log('componentWillReceiveProps')
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')

    return false;

    // true : 以下生命周期会执行： componentWillUpdate render componentDidUpdate
    // false: 以下声明周期不执行：componentWillUpdate render componentDidUpdate
  }

  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

}

export default LifeCycle;

import React, {Component} from 'react'
import * as Sentry from '@sentry/browser'
class Button extends Component{
  constructor(){
    super()
    this.state = {
      name: 'I am Button'
    }
    this.methodDoesNotExist = this.methodDoesNotExist.bind(this)
  }
  methodDoesNotExist(){
    // throw new Error(`我是一个抛出的错误日志: ${new Date()}`)
    try {
      console.log(a);
      let a = 2
    } catch (error) {
      // 主动触发捕获错误
      Sentry.captureMessage(error);
    }
  }
  render(){
    return (<button onClick = { this.methodDoesNotExist } > Break the world</button>)
  }
}

export default Button

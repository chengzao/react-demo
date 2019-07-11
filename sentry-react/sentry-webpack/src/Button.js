import React, {Component} from 'react'

class Button extends Component{
  constructor(){
    super()
    this.state = {
      name: 'I am Button'
    }
    this.methodDoesNotExist = this.methodDoesNotExist.bind(this)
  }
  methodDoesNotExist(){
    throw new Error(`我是一个抛出的错误日志: ${new Date()}`)
  }
  render(){
    return (<button onClick = { this.methodDoesNotExist } > Break the world</button>) 
  }
}

export default Button
import React, { Component, Fragment } from 'react'
import ReactDom from 'react-dom'

class Modal extends Component{

  componentDidMount() {
    this.modalTarget = document.createElement('div')
    this.modalTarget.className = 'modalWarp'
    document.body.appendChild(this.modalTarget)
    this.renderModal()
  }
  componentWillUpdate() {
    this.renderModal()
  }

  componentWillUnmount() {
    ReactDom.unmountComponentAtNode(this.modalTarget)
    document.body.removeChild(this.modalTarget)
  }
  renderModal() {
    ReactDom.render(
      <Fragment>{this.props.children}</Fragment>,
      this.modalTarget
    )
  }
  render() {
    return <noscript />
  }
}


export default Modal;

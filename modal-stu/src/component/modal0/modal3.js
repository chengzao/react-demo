import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';

import store from '../../store'

class Modal extends Component {
  componentWillMount() {
    this.modalTarget = document.createElement('div')
    this.modalTarget.className = 'modalWarp'
    document.body.appendChild(this.modalTarget)
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.modalTarget).parentNode)
    document.body.removeChild(this.modalTarget)
  }
  render() {
    return ReactDOM.createPortal(
      <Provider store={store()}><div>{this.props.children}</div></Provider>,
      this.modalTarget
    )
  }
}

export default Modal;

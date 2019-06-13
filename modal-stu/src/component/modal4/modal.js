import { Component } from 'react'
import ReactDOM from 'react-dom'

class Modal extends Component {
  componentWillMount() {
    if (!this.modalTarget) {
      this.modalTarget = document.createElement('div')
      this.modalTarget.className = 'modal-select'
      document.body.appendChild(this.modalTarget)
    }
  }

  componentDidMount() {
    this.modalTarget.addEventListener('click', (event) => {
      const ev = event || window.event;
      const targetEle = ev.target || ev.srcElement;

      let hasTrue = targetEle.className.indexOf('modal-select') > -1 ? true: false

      if (hasTrue) {
        this.props.closeModal()
      }
    }, false)
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    if (this.modalTarget) {
      ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.modalTarget).parentNode)
      document.body.removeChild(this.modalTarget)
      this.modalTarget.removeEventListener('click', () => { })
      document.body.style.overflow = '';
    }
  }
  render() {
    return this.modalTarget && ReactDOM.createPortal(
      this.props.children,
      this.modalTarget
    )
  }
}

export default Modal;

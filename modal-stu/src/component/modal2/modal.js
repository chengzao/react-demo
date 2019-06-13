import { Component } from 'react'
import ReactDOM from 'react-dom'

class Modal extends Component {
  componentWillMount() {
    if (!this.modalTarget) {
      this.modalTarget = document.createElement('div')
      this.modalTarget.className = 'modalWarp'
      document.body.appendChild(this.modalTarget)
    }
  }

  mo(e) { e.preventDefault() };

  componentDidMount() {
    this.modalTarget.addEventListener('click', (event) => {
      const ev = event || window.event;
      const targetEle = ev.target || ev.srcElement;
      if (targetEle.className === 'modalWarp') {
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
    return ReactDOM.createPortal(
      this.props.children,
      this.modalTarget
    )
  }
}

export default Modal;

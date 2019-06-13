import React, { Component } from 'react';
import NewPortal from '../../newPortal';
import Transition from '../../transition';
import './modal.css';
class Modal extends Component {
  constructor(props) {
    super(props)
    this.confirm = this.confirm.bind(this)
    this.maskClick = this.maskClick.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.state = {
      visible: false,
    }
  }

  componentDidMount() {
    this.setState({ visible: this.props.visible })
  }

  componentWillReceiveProps(props) {
    this.setState({ visible: props.visible })
  }

  closeModal() {
    const { onClose } = this.props
    onClose && onClose()
    this.setState({ visible: false })
  }

  confirm() {
    const { confirm } = this.props
    confirm && confirm()
    this.setState({ visible: false })
  }

  maskClick() {
    this.setState({ visible: false })
  }

  render() {
    const { visible } = this.state;
    const { title, children } = this.props;
    return <NewPortal>
      <Transition
        visible={visible}
        transitionName="modal"
        enterActiveTimeout={200}
        enterEndTimeout={100}
        leaveActiveTimeout={100}
        leaveEndTimeout={200}
      >
        <div className="modal">
          <div className="modal-title">{title}</div>
          <div className="modal-content">{children}</div>
          <div className="modal-operator">
            <button
              onClick={this.closeModal}
              className="modal-operator-close"
            >取消</button>
            <button
              onClick={this.confirm}
              className="modal-operator-confirm"
            >确认</button>
          </div>
        </div>
      </Transition>
      <Transition
        visible={visible}
        transitionName="modal"
        enterActiveTimeout={200}
        enterEndTimeout={100}
        leaveActiveTimeout={100}
        leaveEndTimeout={200}
      >
        <div
          className="mask"
          onClick={this.maskClick}
        ></div>
      </Transition>
    </NewPortal>
  }
}
export default Modal;

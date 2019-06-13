import React, { Component } from "react";
import PropTypes from "prop-types";

import Modal from "./modal";

import "./modal.css";

export default class WrapModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      count: 0
    };
  }

  static defaultProps = {
    name: "React Modal"
  };

  toggleModal = () => {
    // let _t = this.state.showModal;
    // let _m = !_t;
    // this.setState({ showModal: _m });

    this.setState((preState, props) => {
      return { showModal: !preState.showModal };
    });
  };

  handleAddCount = count => {
    // console.log('handle add', count)
    this.setState(() => {
      return {
        count: count + 1
      };
    });
  };
  handleCloseModal = () => {
    this.setState(() => {
      return {
        showModal: false
      };
    });
  };

  render() {
    let { count, showModal } = this.state;
    return (
      <div>
        <div className="left">Hello World</div>
        <div className="right">
          <button onClick={this.toggleModal}>click to show</button>
          <p>Click Count Number: {count}</p>
          {showModal && (
            <Modal closeModal={this.handleCloseModal}>
              <Child
                addCount={() => this.handleAddCount(count)}
                closeModal={this.handleCloseModal}
                count={count}
              />
              <p className="modal-sibling">Modal Count: {count}</p>
            </Modal>
          )}
        </div>
      </div>
    );
  }
}

class Child extends Component {
  static propType = {
    handleClick: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired
  };

  handleClick = () => {
    this.props.addCount();
  };

  closeModal = () => {
    this.props.closeModal();
  };

  render() {
    const { count } = this.props;

    return (
      <div className="modal">
        <button onClick={this.handleClick}>Click add Count</button>
        <br />
        <p>Modal Child Count : {count}</p>

        <div className="modal-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            accusantium nam expedita. Obcaecati cum, maxime molestias, eligendi
            nobis vel illum laboriosam adipisci quis veniam eius. Doloremque
            quam quia quis nam!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            accusantium nam expedita. Obcaecati cum, maxime molestias, eligendi
            nobis vel illum laboriosam adipisci quis veniam eius. Doloremque
            quam quia quis nam!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            accusantium nam expedita. Obcaecati cum, maxime molestias, eligendi
            nobis vel illum laboriosam adipisci quis veniam eius. Doloremque
            quam quia quis nam!
          </p>
        </div>

        <button onClick={this.closeModal}>Click closed Modal</button>
      </div>
    );
  }
}

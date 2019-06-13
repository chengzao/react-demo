import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import score from 'string-score'

import Modal from "./modal";

import "./modal.css";

export default class WrapModal extends Component {
  constructor(props) {
    super(props);

    let { isOpen, list } = this.props

    this.state = {
      showModal: isOpen /* 弹窗是否打开 */,
      list: list
    };
  }

  static defaultProps = {
    isOpen: false,
    list: []
  };

  handleCloseModal = () => {
    this.setState({ showModal: false});
  }

  componentWillReceiveProps(props){

    let { isOpen, list} = props

    this.setState({
      showModal: isOpen,
      list: list
    })
  }

  handleItem = (item) => {
    this.props.targetEl(item)
  }

  render() {
    let { showModal, list } = this.state;

    return (
      <Fragment>
        {showModal && (
          <Modal closeModal={this.handleCloseModal}>
            <ItemView
              closeModal={this.handleCloseModal}
              list={ list }
              targetEl={this.handleItem}
            />
          </Modal>
        )}
      </Fragment>
    );
  }
}

class ItemView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: '',
      list: this.props.list,
      curIndex: null,
      defaultValue: '请选择'
    }
  }

  static propType = {
    closeModal: PropTypes.func.isRequired,
    list: PropTypes.object.isRequired
  };

  closeModal = () => {
    this.props.closeModal();
  };

  handleInputValue = (ev) => {
    let inputValue = ev.target.value;

    let { list } = this.props;

    list.map(item => item.desc = item.value+ ' '+ item.pinyin + ' '+ item.py )

    let newList = list.filter((item) => {
      let _ret = score(item.desc, inputValue) > 0.3 ? true : false
      return _ret
    })

    this.setState({
      inputValue: inputValue,
      list: inputValue === ''? list: newList
    })

  }

  handleClickItem = (item, index) => {
    // console.log('item', item, index);
    item.targetIndex = index

    this.setState({
      curIndex: index,
      inputValue: item.value
    })

    this.props.targetEl({"value": item.value, "targetIndex": index})
  }

  handleClearValue = () => {
    let { list } = this.props
    this.setState({
      list: list,
      inputValue: '',
      curIndex: null
    })
    this.props.targetEl({value: this.state.defaultValue})
  }

  render() {
    let { inputValue, list, curIndex } = this.state

    return (
      <div className="modal">
        <div className="modal-input">
          <input type="text"
            focus="true"
            autoFocus="autofocus"
            placeholder={this.state.defaultValue}
            value={inputValue}
            onChange={this.handleInputValue}
          />
          <button onClick={this.handleClearValue}>点击清除</button>
          <button onClick={this.closeModal}>点击关闭</button>
        </div>
        <div className="modal-content">
          {
           list.length?list.map((item, index) => {

              let className = 'modal-content-item';
              if (index === curIndex) {
                className += ' current';
              }
              return (<div
              className={className}
              onClick={() => this.handleClickItem(item, index)}
              key={index}
              >{item.value}</div>)
            }): <div>搜索结果不存在,重新搜索</div>
          }
        </div>

      </div>
    );
  }
}

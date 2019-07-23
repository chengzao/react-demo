import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import pinyinlite from 'pinyinlite/index_full'
import ItemView from './item';

import Modal from "./modal";
import "./modal.css";

export default class WrapModal extends Component {
  constructor(props) {
    super(props);

    let { list } = this.props
    list.length > 0 && this.handleCharToPinyin(list)

    this.state = {
      showModal: false /* 弹窗是否打开 */,
      list: list, /* 传入的显示的数组 */
      inputValue: '', /* input的值 */
      defaultValue: '请选择', /* input的placeholder值 */
      item: {}
    };
  }

  static propType = {
    list: PropTypes.array.isRequired,
    handleItem: PropTypes.func.isRequired
  }

  static defaultProps = {
    list: [],
    handleItem: () => {}
  };

  /**
   * 将数组对象中的值转为拼音
   * @param {传入的数组对象} list
   */
  handleCharToPinyin(list) {
    list.map((item) => {
      return item.pinyin = pinyinlite(item.value).join('').toLowerCase()
    })
    list.map((item) => {
      return item.py = pinyinlite(item.value)
        .map(label => label.toString().substr(0, 1))
        .join('')
        .toLowerCase()
    })
  }

  componentWillReceiveProps(props){
    let { list } = props
    list.length > 0 && this.handleCharToPinyin(list)
    this.setState({
      list: list
    })
  }

  /**
   * 获取点击的当前项
   */
  handleItem = (item) => {
    this.setState(() => ({
      inputValue: item.value,
      item: item
    }), () => {
      this.props.handleItem(item)
    })
  }

  /**
   * 获取焦点，打开modal
   */
  handleFocus = () => {
    this.setState({
      showModal: true
    })
  }

  /**
   * 处理关闭modal
   */
  handleCloseModal = () => {
    this.setState({ showModal: false});
  }

  render() {
    let { showModal, list, inputValue, defaultValue, item } = this.state;
    return (
      <Fragment>
        <input type="text"
          readOnly
          value={inputValue}
          onFocus={this.handleFocus}
          placeholder={defaultValue}
        />
        {showModal && (
          <Modal
            closeModal={this.handleCloseModal}
          >
            <ItemView
              closeModal={this.handleCloseModal}
              list={list}
              item={item}
              targetEl={this.handleItem}
            />
          </Modal>
        )}
      </Fragment>
    );
  }
}


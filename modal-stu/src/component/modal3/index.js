import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import pinyinlite from 'pinyinlite/index_full'
import ItemView from './item';
// import Transition from '../../transition';


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
      classes: null,
    };

    this.leaveAnimate = this.leaveAnimate.bind(this)
    this.enterAnimate = this.enterAnimate.bind(this)
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
      inputValue: item.value
    }), () => {
      this.props.handleItem(item)
    })
  }

  /**
   * 获取焦点，打开modal
   */
  handleFocus = () => {
    // this.setState({
    //   showModal: true
    // })
    // 进入动画
    this.enterAnimate()
  }

  /**
   * 处理关闭modal
   */
  handleCloseModal = () => {
    // this.setState({ showModal: false});

    this.leaveAnimate()
  }

  // 进入动画
  enterAnimate() {
    const enterClasses = 'modal-enter'
    const enterActiveClasses = 'modal-enter-active'
    const enterEndActiveClasses = 'modal-enter-end'
    const enterTimeout = 0
    const enterActiveTimeout = 200
    const enterEndTimeout = 100
    this.setState({ showModal: true, classes: enterClasses })
    const enterActiveTimer = setTimeout(_ => {
      this.setState({ classes: enterActiveClasses })
      clearTimeout(enterActiveTimer)
    }, enterTimeout)
    const enterEndTimer = setTimeout(_ => {
      this.setState({ classes: enterEndActiveClasses })
      clearTimeout(enterEndTimer)
    }, enterTimeout + enterActiveTimeout)

    const initTimer = setTimeout(_ => {
      this.setState({ classes: '' })
      clearTimeout(initTimer)
    }, enterTimeout + enterActiveTimeout + enterEndTimeout)
  }

  // 离开动画
  leaveAnimate() {
    const leaveClasses = 'modal-leave'
    const leaveActiveClasses = 'modal-leave-active'
    const leaveEndActiveClasses = 'modal-leave-end'
    const leaveTimeout = 0
    const leaveActiveTimeout = 100
    const leaveEndTimeout = 200
    this.setState({ classes: leaveClasses })
    const leaveActiveTimer = setTimeout(_ => {
      this.setState({ classes: leaveActiveClasses })
      clearTimeout(leaveActiveTimer)
    }, leaveTimeout)
    const leaveEndTimer = setTimeout(_ => {
      this.setState({ classes: leaveEndActiveClasses })
      clearTimeout(leaveEndTimer)
    }, leaveTimeout + leaveActiveTimeout)
    const initTimer = setTimeout(_ => {
      this.setState({ showModal: false, classes: '' })
      clearTimeout(initTimer)
    }, leaveTimeout + leaveActiveTimeout + leaveEndTimeout)
  }


  render() {
    let { showModal, list, inputValue, defaultValue, classes } = this.state;
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
            className={classes}
          >
              <ItemView
                closeModal={this.handleCloseModal}
                list={list}
                targetEl={this.handleItem}
              />
          </Modal>
        )}
      </Fragment>
    );
  }
}


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import score from 'string-score'

class Item extends Component {
  constructor(props) {
    super(props)
    let { value, index} = this.props.item

    this.state = {
      inputValue: value|| '',
      list: this.props.list,
      curIndex: null,
      defaultValue: '请选择',
      showClear: false,
      item: { value: value|| '', index: index||-1}
    }
  }

  static propType = {
    closeModal: PropTypes.func.isRequired,
    list: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.setState({
      showClear: this.state.inputValue !== ''? true: false
    })
  }

  /**
   * 点击关闭modal
   */
  closeModal = () => {
    this.props.closeModal();
  };

  /**
   * 处理input的value
   */
  handleInputValue = (ev) => {
    let inputValue = ev.target.value;
    let newList = this.handleFilterList(inputValue)

    let hasVal = inputValue !== '' ? true: false;

    this.setState({
      inputValue: inputValue,
      list: newList,
      showClear: hasVal
    })
  }
  /**
   * 返回输入匹配的list列表
   * @param {input输入值} value
   */
  handleFilterList(value) {
    let { list } = this.props;
    list.map(item => item.desc = item.value + ' ' + item.pinyin + ' ' + item.py)
    let newList = list.filter((item) => {
      let _ret = score(item.desc, value) > 0.3 ? true : false
      return _ret
    })
    return value === '' ? list : newList
  }

  /**
   * 获得当前项
   */
  handleClickItem = (item, index) => {
    item.index = index
    this.setState(() => ({
      curIndex: index,
      inputValue: item.value,
      showClear: true,
      item: item
    }), () => {
      // this.props.targetEl({ "value": item.value, "targetIndex": index })
    })
  }

  /**
   * 点击清除按钮
   */
  handleClearValue = () => {
    let { list } = this.props
    this.setState(() => ({
      list: list,
      inputValue: '',
      curIndex: null,
      showClear: false,
      item: {value: '', index: -1}
    }), () => {
      // 点击清除按钮input获得焦点
      this.input.focus()
      // this.props.targetEl({ value: '', index: -1 })
    })
  }
  /**
   * 取消按钮事件
   */
  handleCancle = () => {
    this.setState(() => ({
      inputValue: '',
      curIndex: null,
      showClear: false
    }), () => {
      // this.props.targetEl({ value: '', index: -1 })
      this.closeModal()
    })
  }
  /**
   * 点击确认按钮
   */
  handleConfirm = () => {
    let { value, index } = this.state.item
    this.props.targetEl({ value, index })
    this.closeModal()
  }

  render() {
    let { inputValue, list, curIndex, showClear } = this.state

    return (
      <div className="modal-main">
        <div className="modal-header">
          <input type="text"
            ref = { (input) => { this.input = input } }
            focus='true'
            autoFocus="autofocus"
            placeholder={this.state.defaultValue}
            value={inputValue}
            onChange={this.handleInputValue}
          />
          {showClear && <button onClick={this.handleClearValue}>X</button>}
        </div>
        <div className="modal-content">
          {
            list.length ? list.map((item, index) => {
              let className = 'modal-content-item';
              if (index === curIndex) {
                className += ' current';
              }
              return (<div
                className={className}
                onClick={() => this.handleClickItem(item, index)}
                key={index}
              >{item.value}</div>)
            }) : <div className='modal-content-item'>搜索结果不存在,重新搜索</div>
          }
        </div>
        <div className="modal-footer">
          <div className="modal-item" onClick={this.handleConfirm}>确定</div>
          <div className="modal-item" onClick={this.closeModal}>关闭</div>
        </div>

      </div>
    );
  }
}

export default Item;

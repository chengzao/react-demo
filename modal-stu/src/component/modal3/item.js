import React, { Component } from 'react';
import PropTypes from 'prop-types';
import score from 'string-score'

class Item extends Component {
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
    this.setState({
      inputValue: inputValue,
      list: newList
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
   * 处理点击当前项
   */
  handleClickItem = (item, index) => {
    item.targetIndex = index
    this.setState(() => ({
      curIndex: index,
      inputValue: item.value
    }), () => {
      this.props.targetEl({ "value": item.value, "targetIndex": index })
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
      curIndex: null
    }), () => {
      this.props.targetEl({ value: this.state.defaultValue })
    })
  }

  render() {
    let { inputValue, list, curIndex } = this.state
    return (
      <div className="modal-main">
        <div className="modal-header">
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

      </div>
    );
  }
}

export default Item;

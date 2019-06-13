import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {
  render() {
    return (
      <div
      onClick={this.handerClickItem.bind(this, this.props.index)}>
      {this.props.content + ' '+ this.props.test}</div>
    )
  }

  componentDidMount() {
    // async or axjx or axios
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate',nextProps, nextState)

    if(nextProps.content !== this.props.content){
      return true
    }else{
      return false
    }
  }



  handerClickItem(index) {
    this.props.deleteItem(index)
  }
}

// 默认值
TodoItem.defaultProps = {
  test: ' : default'
}

// 数据类型校验
TodoItem.propTypes = {
  content: PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired,
  deleteItem: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
}

export default TodoItem;

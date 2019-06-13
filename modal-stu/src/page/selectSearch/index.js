import React, { Component } from "react";
import ModalLa from "../../component/modal2";
import pinyinlite from 'pinyinlite/index_full'


class SelectSearch extends Component {
  constructor() {
    super();

    let list = [{ value: 'xiao' }, { value: '张三' }, { value: '李四' }, { value: 'select' }, { value: 'search' }, { value: 'list' }]

    this.handleCharToPinyin(list)

    this.state = {
      isOpen: false,
      list: list,
      inputValue: ' '
    };
  }

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

  handleTargetEle = (target) => {
    console.log('item', target);

    this.setState({
      inputValue: target? target.value : ' '
    })

  }

  handleFocus = () => {
    this.setState({ isOpen: true});
  };

  render() {
    return (
      <div>
        {
          [1,2].map((item, index)=>{
            return (
              <div key={index}>
                <input type="text"
                  onFocus={this.handleFocus}
                  value={this.state.inputValue}
                  readOnly
                />
                <ModalLa
                  isOpen={this.state.isOpen}
                  list={this.state.list}
                  targetEl={this.handleTargetEle}
                  name={index}
                />
              </div>
            )
          })
        }


      </div>
    );
  }
}

export default SelectSearch;

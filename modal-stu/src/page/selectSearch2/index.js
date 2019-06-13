import React, { Component } from "react";
import ModalLa from "../../component/modal3";
// import pinyinlite from 'pinyinlite/index_full'


class SelectSearch extends Component {
  constructor() {
    super();

    let list = [{ value: 'xiao' }, { value: '张三' }, { value: '李四' }, { value: 'select' }, { value: 'search' }, { value: 'list' }]

    this.state = {
      list: list,
    };
  }

  handleItemValue = (target) => {
    console.log('item', target);
  }

  render() {
    return (
      <div>
        {
          [1,2].map((item, index)=>{
            return (
              <div key={index}>
                <ModalLa
                  list={this.state.list}
                  handleItem={this.handleItemValue}
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

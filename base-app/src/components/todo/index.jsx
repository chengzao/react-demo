import React, { Component} from 'react';

// dangerouslySetInnerHTML : 允许在里面输出html标签

class TodoList extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)

    this.handerIptChange = this.handerIptChange.bind(this)

    this.state = {
      list: ['react','vue'],
      iptVal: 'todo list'
    }
  }

  handerIptChange(e) {
    let value = e.target.value;

    this.setState(() => {
      return {
        iptVal: value
      }
    }, () => {
      console.log('setState is End , I am a callback! ')
    })
  }

  handerButtonClick() {
    this.setState({
      list: [...this.state.list, this.state.iptVal],
      iptVal: ''
    })
  }
  handerDeleteItem(index) {
    // console.log('index ', index);
    let newList = [...this.state.list];
    newList.splice(index, 1)

    this.setState({
      list: newList
    })
  }
  render() {
    return (
       <div>
        <label htmlFor="insertArea">输入 </label>
          <input
          id='insertArea'
          onChange={this.handerIptChange}
          value={this.state.iptVal}
          type="text"
          />
          <button onClick={this.handerButtonClick.bind(this)}>提交</button>

          <ul>
            {
              this.state.list.map((item,index) => {
                return (
                <li
                  onClick={this.handerDeleteItem.bind(this, index)}
                  key={index}
                  dangerouslySetInnerHTML={{__html: item}}
                ></li>
                )
              })
            }
          </ul>
       </div>
    );
  }
}

export default TodoList;

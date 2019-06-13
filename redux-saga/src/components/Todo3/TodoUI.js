import React from 'react';
import { Button, Input, List  } from 'antd';

// 无状态组件 ： 无生命周期函数
const TodoUI = (props) => {
  return (
    <div className='todolist'>
      <Input
        className='inputStyle'
        placeholder="Basic usage"
        value={props.inputValue}
        onChange={props.handerInputChange}
      />

      <Button className='submitbutton' onClick={props.handerBtnClick} type="primary">提交</Button>

      <List
        bordered
        className= 'listStyle'
        dataSource={props.list}
        renderItem={(item, index) => (<List.Item onClick={() => {props.handerDeleteItem(index)}}  key={index}>{item}</List.Item>)}
      />
    </div>
  )
}

// 有生命周期
// class TodoUI extends Component {
//   render () {
//     return (
//       <div className='todolist'>
//         <Input
//           className='inputStyle'
//           placeholder="Basic usage"
//           value={this.props.inputValue}
//           onChange={this.props.handerInputChange}
//         />

//         <Button className='submitbutton' onClick={this.props.handerBtnClick} type="primary">提交</Button>

//         <List
//           bordered
//           className= 'listStyle'
//           dataSource={this.props.list}
//           renderItem={(item, index) => (<List.Item onClick={() => {this.props.handerDeleteItem(index)}}  key={index}>{item}</List.Item>)}
//         />
//       </div>
//     )
//   }
// }

export default TodoUI;

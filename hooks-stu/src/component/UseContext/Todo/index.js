import React, { useReducer } from 'react';
import uuid from 'uuid/v4';
import TodoContext from './TodoContext'

import Filter from './Filter'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

// 初始化数据
const initialTodos = [
  {
    id: uuid(),
    task: 'Learn React',
    complete: true,
  },
  {
    id: uuid(),
    task: 'Learn Firebase',
    complete: true,
  },
  {
    id: uuid(),
    task: 'Learn GraphQL',
    complete: false,
  },
];

// 处理筛选条件
const filterReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_ALL':
      return 'ALL';
    case 'SHOW_COMPLETE':
      return 'COMPLETE';
    case 'SHOW_INCOMPLETE':
      return 'INCOMPLETE';
    default:
      throw new Error();
  }
};
// 处理添加和勾选
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'DO_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: true };
        } else {
          return todo;
        }
      });
    case 'UNDO_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: false };
        } else {
          return todo;
        }
      });
    case 'ADD_TODO':
      return state.concat({
        task: action.task,
        id: action.id,
        complete: false,
      });
    case 'REMOVE_TODO':
      return state.filter(todo => {
        return todo.id !== action.id
      });
    default:
      throw new Error();
  }
};

const Todo = () => {
  const [filter, dispatchFilter] = useReducer(filterReducer, 'ALL');
  const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos);

  // 处理过滤条件
  const filteredTodos = todos.filter(todo => {
    if (filter === 'ALL') {
      return true;
    }
    if (filter === 'COMPLETE' && todo.complete) {
      return true;
    }
    if (filter === 'INCOMPLETE' && !todo.complete) {
      return true;
    }
    return false;
  });

  return (
    <div>
      <TodoContext.Provider value={dispatchTodos}>
        <Filter dispatch={dispatchFilter} />
        <TodoList todos={filteredTodos} />
        <AddTodo />
      </TodoContext.Provider>
    </div>
  )
};

export default Todo;

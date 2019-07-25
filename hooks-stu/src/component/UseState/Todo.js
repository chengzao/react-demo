import React,{ useState } from 'react';
import uuid from 'uuid/v4';

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

const Todo = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState(initialTodos);

  const handleChangeInput = event => {
    setTask(event.target.value);
  };
  const handleSubmit = event => {
    if (task) {
      setTodos(todos.concat({ id: uuid(), task, complete: false }));
    }

    setTask('');

    event.preventDefault();
  };

  const handleChangeCheckbox = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <hr/>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleChangeCheckbox(todo.id)}
              />
              {todo.task}
            </label>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={handleChangeInput} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
};

export default Todo;

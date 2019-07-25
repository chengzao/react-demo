import React, { useState } from 'react';

const INITIAL_LIST = [
  {
    id: '0',
    title: 'React with RxJS for State Management Tutorial',
    url:
      'https://www.robinwieruch.de/react-rxjs-state-management-tutorial/',
  },
  {
    id: '1',
    title: 'A complete React with Apollo and GraphQL Tutorial',
    url: 'https://www.robinwieruch.de/react-graphql-apollo-tutorial',
  },
];

function TodoList() {
  const [list, setList] = useState(INITIAL_LIST);
  const [item, setItem] = useState('')

  function onRemoveItem(id) {
    const newList = list.filter(item => item.id !== id);
    setList(newList);
  }

  function onAddItem(){
    if(!item) return false
    let index = list.length
    let newList = [...list, {
      id: String(index++),
      title: item,
      url: 'https://www.robinwieruch.de/react-rxjs-state-management-tutorial/'
    }]
    setList(newList);
  }

  return (
    <div className="use-state-todo">
      <hr/>
      <input type="text" placeholder="Write Something..." value={item} onChange={ e => setItem(e.target.value) } />
      <button onClick={() => onAddItem()}>添加</button>
      <ul>
        {list.map(item => (
          <li key={item.id}>
            <a href={item.url}>{item.title}</a>
            <button type="button" onClick={() => onRemoveItem(item.id)}>
              Remove
          </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList

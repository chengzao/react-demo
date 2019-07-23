import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import TodoList from './Todo';

import store from './store'

const App = (
  <Provider store={store}>
    <TodoList/>
  </Provider>
);

ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker();

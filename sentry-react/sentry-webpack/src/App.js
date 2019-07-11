import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as Sentry from '@sentry/browser';

import Button from './Button'
// 自建sentry服务的dsn组成部分
// dsn: PROTOCOL://PUBLIC_KEY:SECRET_KEY@localhost:9000/PROJECT_ID
Sentry.init({
  dsn: "http://05bdfb27xxxa71a2b4977:00a40ae1bc9xxxx099ea7f0@localhost:9000/4" ,
  release: 'react-sentry@20190711',
  environment: process.env.NODE_ENV
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
         <Button />
      </header>
    </div>
  );
}

export default App;

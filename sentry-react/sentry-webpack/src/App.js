import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as Sentry from '@sentry/browser';

import Button from './Button'
import sentry from "./sentry"

Sentry.init({
  dsn: sentry.dsn,
  release: sentry.release,
  environment: sentry.environment
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

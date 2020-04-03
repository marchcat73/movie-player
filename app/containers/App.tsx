/* eslint-disable no-console */
import React, { Component } from 'react';

const { ipcRenderer } = require('electron');

type AppState = {
  msg: string;
};

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = { msg: '' };
  }

  onButtonClick = () => {
    ipcRenderer.send('categories:get');
  };

  render() {
    const { msg } = this.state;

    return (
      <div>
        <h1>Welcom</h1>
        <p>{msg}</p>
        <button onClick={this.onButtonClick} type="button">
          click me
        </button>
      </div>
    );
  }
}

export default App;

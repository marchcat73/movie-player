/* eslint-disable no-console */
import React, { Component } from 'react';
import Category from '../components/Category';

const { ipcRenderer } = require('electron');

class App extends Component<{}, {}> {
  onButtonClick = () => {
    ipcRenderer.send('categories:get');
  };

  render() {
    return (
      <div>
        <Category />
      </div>
    );
  }
}

export default App;

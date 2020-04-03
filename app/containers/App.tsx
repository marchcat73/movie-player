import React, { Component } from 'react';
import { Store } from '../reducers/types';

type AppState = {
  msg: string;
};

class App extends Component<{}, AppState> {
  constructor(props: Store) {
    super(props);
    this.state = { msg: '' };
  }

  render() {
    const { msg } = this.state;

    return (
      <div>
        <h1>Welcom</h1>
        <p>{msg}</p>
      </div>
    );
  }
}

export default App;

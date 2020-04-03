import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import { History } from 'history';
import { Store } from '../reducers/types';
import App from './App';

type Props = {
  store: Store;
  history: History;
};

const Root = ({ store }: Props) => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default hot(Root);

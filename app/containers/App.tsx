/* eslint-disable no-console */
import React from 'react';
import { Category, Movie } from '../components';

const App = () => {
  return (
    <div>
      <div>
        <Category />
      </div>
      <div>
        <Movie />
      </div>
    </div>
  );
};

export default App;

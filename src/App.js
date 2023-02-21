import React from 'react';

import Hello from './Hello';
import Tables from './Tables';
import Cards from './Cards';


export default function App() {
  return (
    <div id="app">
      <h1>
        <u>Hello React JS</u>{' '}
      </h1>
      <p>
        <b>Start editing to see some magic happen </b>
      </p>
      <Hello />
      <Cards />
      <Tables />
      
    </div>
  );
}

import React from 'react';

import './index.css';

export default function Click(props) {
  const add = function () {
    alert('React is a library for javascript')
  };
  return (
    <div id="click">
      <button onClick={add}>click</button>
    </div>
  );
}

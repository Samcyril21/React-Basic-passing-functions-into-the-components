import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Alternative from './Alternative';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Message() {
  alert('we are here to learn react');
}

root.render(
  <div>
    <App />
    <Alternative name={'Samcyril'} msgfn={Message} />
    {'sam' === 'sam' ? <h2>samcyril</h2> : <h2>jaipal</h2>}
  </div>
);

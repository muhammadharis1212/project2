import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div className="mystyle">
    <App name="Muhammad Haris" age={25} />
    <div>Hello from <strong>Haris</strong>
    <h1>Your Turn</h1>
    5 + 10 = {5+10}
    <div>
      <h2>Unordered list</h2>
      <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>
    </div>
    <div>
      <h2>Ordered list</h2>
      <ol>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ol>
    </div>
    
    </div>

  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
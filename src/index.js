import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import openSocket from 'socket.io-client';

// const socket = openSocket('http://localhost:8000');
// export function subscribeToTimer(callback) {
//   socket.on('timer', timestamp => callback(null, timestamp));
//   socket.emit('subscribeToTimer', 1000);
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

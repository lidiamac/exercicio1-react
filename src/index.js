import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Multi from './components/Multi';
import Estilos from './components/Estilos'
import Primeiro from './components/Primeiro'


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Multi/>
    <Primeiro/>
    <Estilos/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

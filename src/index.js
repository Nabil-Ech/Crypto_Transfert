import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
export { default as Loader } from './components/Footer';
export { default as Transactions } from './components/Transactions';
export { default as Services } from './components/Services';
export { default as Navbar } from './components/Navbar';
export { default as Footer } from './components/Footer';
export { default as Welcome } from './components/Welcome';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './imports.css';
import App from './App';

import { Provider } from 'react-redux';
import store from './ReduxStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
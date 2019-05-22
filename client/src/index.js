<<<<<<< HEAD
// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
=======
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider } from './Auth';
>>>>>>> 37beebfdd4adaee3a10ab45355c558cf0424b083

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);

import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)

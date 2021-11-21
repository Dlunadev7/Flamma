import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
// import SimpleReactLightbox from 'simple-react-lightbox';
// import './../node_modules/animate.css/animate.css';
import './assets/styles/index.scss';
import './assets/icons/icomoon/style.css';

import {BrowserRouter as Router,Switch,withRouter,Route} from "react-router-dom";

ReactDOM.render(
    <Router>
      <App />
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

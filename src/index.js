import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
console.log("basename here")
ReactDOM.render(
  <BrowserRouter basename="/gh_page_test" >
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);

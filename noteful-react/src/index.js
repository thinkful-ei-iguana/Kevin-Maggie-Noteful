import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DummyStore from './dummyStore';

ReactDOM.render(
                <BrowserRouter>
                  <App store={DummyStore}/>
                </BrowserRouter>, 
                document.getElementById('root'));


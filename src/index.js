import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './Components/App';
import { Provider } from 'react-redux';
import store from "../src/store";
import {BrowserRouter as Routers} from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Routers>
    <App />
    </Routers>
  </Provider>
);


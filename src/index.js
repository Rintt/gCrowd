import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import Store from "./Store/Index.js"
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
import history from './history';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter history={history}>
        <Provider store={Store} >

    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)


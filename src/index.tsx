import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

import 'normalize.css'
import App from './App'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
)

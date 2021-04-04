import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import store from './app/store'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'

import Loading from './components/Core/Loading'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <React.Suspense fallback={<Loading />}>
        <Router>
          <App />
        </Router>
      </React.Suspense>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

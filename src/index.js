import React from 'react'
import ReactDOM from 'react-dom'
import App from '../src/components/App'
import GlobalStyle from './components/GlobalStyles'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

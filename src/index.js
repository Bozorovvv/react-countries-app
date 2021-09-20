import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import countries from './data/data'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App countries={countries} />
  </React.StrictMode>,
  document.getElementById('root')
)

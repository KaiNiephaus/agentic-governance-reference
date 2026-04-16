import './theme/variables.css'
import './styles/base.css'
import './styles/nav.css'
import './styles/components.css'
import './styles/animations.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

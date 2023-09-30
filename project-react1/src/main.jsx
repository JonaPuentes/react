import React from 'react'
import ReactDOM from 'react-dom/client'

//importo el comp
import { App } from './app.jsx'
//importo el css
import './index.css'

//accedo al DOM
const root = ReactDOM.createRoot(document.getElementById('root'))

//renderizo el comp
root.render(
  <App />
)

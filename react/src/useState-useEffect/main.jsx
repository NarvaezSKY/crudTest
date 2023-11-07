import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Div } from '../useContext/ExampleComponent.jsx'
import CounterFunction from '../useContext/Component.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CounterFunction>
  <React.StrictMode>
    <App />
    <Div/>
  </React.StrictMode>
  </CounterFunction>
)

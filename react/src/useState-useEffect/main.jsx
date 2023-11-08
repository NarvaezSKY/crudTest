import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Div } from '../useContext/ExampleComponent.jsx'
import CounterFunction from '../useContext/Component.jsx'
import { Component } from '../useRef/Component.jsx'
import {  PrintNumber } from '../useMemo/Component.jsx'
import { Callback } from '../useCallback/Component.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <CounterFunction>
  <React.StrictMode>
    <App />
    <Div/>
    <Component/>
    <PrintNumber/>
    <Callback/>
  </React.StrictMode>
  </CounterFunction>
)

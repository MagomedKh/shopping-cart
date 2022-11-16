import React from 'react'
import reactDom from 'react-dom/client'
import App from './app'
import 'bootstrap/dist/css/bootstrap.css'

const root = reactDom.createRoot(document.querySelector('#root'))

root.render(<App />)
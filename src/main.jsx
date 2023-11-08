import React from 'react'
import ReactDOM from 'react-dom/client'
import { CollatzSequence } from './components/CollatzSequence'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CollatzSequence></CollatzSequence>
  </React.StrictMode>,
)

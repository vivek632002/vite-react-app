import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NavigationStack from './navigations/navigation-stack.jsx'
import { BrowserRouter } from 'react-router-dom'
import UseMemo from './hooks/useMomo/useMemo.jsx'
import UseMemoEx2 from './hooks/useMomo/useMemoEx.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <UseMemoEx2/>
    </BrowserRouter>
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import GlobalState from './components/Context.jsx'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <GlobalState>
        <App />
    </GlobalState>
    </BrowserRouter>
)

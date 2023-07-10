import ReactDOM from 'react-dom/client'
import App from './App'
import './reset.css'
import './global.css'
import { StrictMode } from 'react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)

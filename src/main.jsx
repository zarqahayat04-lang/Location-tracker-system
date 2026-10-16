import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

<button
  className="location-button"
  onClick={() => alert("Opening map for the selected location...")}
>
  View on Map
</button>

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
<<<<<<< HEAD
import { Button } from "@/components/ui/button"
import App from './app'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App />
=======
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
>>>>>>> 9dc862c0c99905eb4c77fc9823c6b879cd7a33ef
  </StrictMode>,
)

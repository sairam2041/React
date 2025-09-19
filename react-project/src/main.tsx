import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DrawingCanvas from './features/components/DrawingCanvas.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DrawingCanvas />
  </StrictMode>
)
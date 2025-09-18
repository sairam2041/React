import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ImageUploadPage } from './features/components/ImageUploadPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ImageUploadPage />
  </StrictMode>,
)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SketchProvider } from 'sketchbook-ui'
import 'sketchbook-ui/style.css'
import './App.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SketchProvider>
      <App />
    </SketchProvider>
  </StrictMode>,
)
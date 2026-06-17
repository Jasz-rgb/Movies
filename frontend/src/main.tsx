import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HashRouter } from 'react-router-dom'
import { GridProvider } from './context/GridProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GridProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </GridProvider>
  </StrictMode>,
)

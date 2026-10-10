import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/tokens.css'
import './styles/typography.css'
import './styles/global.css'
import './styles/components.css'
import './styles/selected-work.css'
import './styles/capabilities.css'
import './styles/about.css'
import './styles/experience.css'
import './styles/footer.css'
import './styles/case-study.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
  )

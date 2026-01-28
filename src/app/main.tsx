import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Components from '../pages/components'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <Components />
  </StrictMode>,
)

import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/History'
import { History } from './pages/Home'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
    </Routes>
  )
}

export { Router }

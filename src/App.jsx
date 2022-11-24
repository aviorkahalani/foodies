import { Outlet } from 'react-router-dom'
import { AppFooter } from './components/AppFooter'
import { AppHeader } from './components/AppHeader'

function App() {
  return (
    <div className="app-container flex flex-col min-h-screen">
      <AppHeader />
      <Outlet />
      <AppFooter />
    </div>
  )
}

export default App

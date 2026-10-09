import LandingPage from './pages/LandingPage'
import { ToastProvider } from './components/ui/Toast'

function App() {
  return (
    <ToastProvider>
      <LandingPage />
    </ToastProvider>
  )
}

export default App

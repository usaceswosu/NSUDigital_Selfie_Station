// main page, controls which screen to show
import { useState } from 'react'
import WelcomeScreen from './views/WelcomeScreen'
import CameraView from './views/CameraView'

export default function App() {
  const [screen, setScreen] = useState('welcome')

  if (screen === 'welcome') {
    return <WelcomeScreen onStart={() => setScreen('camera')} />
  }

  return <CameraView />
}

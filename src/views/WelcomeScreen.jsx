// the first page
import './WelcomeScreen.css'

export default function WelcomeScreen({ onStart }) {
  return (
    <div className="app">
      <header className="header">
        <h1>Digital Selfie Station</h1>
        <p className="subtitle">USACE - Tulsa District</p>
      </header>

      <main className="screen welcome">
        <p className="welcome-text">Ready to take a photo? Share your visit with USACE!</p>
        <button className="start-btn" onClick={onStart}>Start</button>
      </main>
    </div>
  )
}

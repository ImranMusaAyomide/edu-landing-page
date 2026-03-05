import { useState } from 'react'
import './App.css'
import Header from './Header'
import HeroSection from './HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HeroSection />

    </>
  )
}

export default App

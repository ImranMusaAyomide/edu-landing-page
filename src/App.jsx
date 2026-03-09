import { useState } from 'react'
import './App.css'
import Header from './Header'
import HeroSection from './HeroSection'
import Feature from './Feature'
import Statistics from './Statistics'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HeroSection />
      <Feature />
      <Statistics />
    </>
  )
}

export default App

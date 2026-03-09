import { useState } from 'react'
import './App.css'
import Header from './Header'
import HeroSection from './HeroSection'
import Feature from './Feature'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HeroSection />
      <Feature />
    </>
  )
}

export default App

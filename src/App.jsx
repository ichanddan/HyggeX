import React from 'react'
import { Navbars } from './Components/Navbar'
import { Hero } from './Components/Hero'
import { FAQ } from './Components/FAQ'
document.title="Hyggex"
export default function App() {
  return (
    <div>
      <Navbars/>
      <Hero/>
      <FAQ/>
    </div>
  )
}

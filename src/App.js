import React, { useEffect } from 'react'
import Hero from './components/Hero/Hero'
import Aos from "aos"
import "aos/dist/aos.css"
const App = () => {
  useEffect(() => {
    Aos.init({
      offset:100,
      duration:800,
      easing:'ease-in-sine',
      delay:100,
    })
  })
  return (
    <div> 
    <Hero/>
     </div>
  )
}

export default App

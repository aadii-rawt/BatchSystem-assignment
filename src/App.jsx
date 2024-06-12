import { useState } from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import SecondSec from './Components/SecondSec'
import ThridSec from './Components/ThridSec'
import FourthSec from './Components/FourthSec'
import Testimonial from './Components/Testimonial'
import FAQSec from './Components/FAQSec'
import Footer from './Components/Footer'
import SevenSec from './Components/SevenSec'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main dark:bg-gray-950 dark:text-white">
        <div className="container">
          <Header />
          <Hero />
          <SecondSec />
          <ThridSec />
          <FourthSec />
          <Testimonial />
          <FAQSec />
          <SevenSec />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App

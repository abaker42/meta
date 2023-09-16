import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import  About  from '@/sections/About'
import  Explore from '@/sections/Explore'
import  Feedback from '@/sections/Feedback'
import  GetStarted from '@/sections/GetStarted'
import  Hero from '@/sections/Hero'
import  Insights from '@/sections/Insights'
import  WhatsNew from '@/sections/WhatsNew'
import  World from '@/sections/World'

function Home() {
  return (
    <div className="bg-slate-800 overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Explore />
      <GetStarted />
      <WhatsNew />
      <World />
      <Insights />
      <Feedback />
      <Footer />
    </div>
  )
}

export default Home
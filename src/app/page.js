import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '@/sections'

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
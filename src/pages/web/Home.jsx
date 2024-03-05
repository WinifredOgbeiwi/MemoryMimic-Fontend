import React from 'react'
import Hero from '../../components/home/hero.component'
import Features from '../../components/home/features.component'
import Subscribe from '../../components/home/subscribe.component'
import CallToAction from '../../components/home/cta.component'
import Footer from '../../components/home/footer.component'
import About from './About'

const Home = () => {
  return (
    <>
   <Hero/>
   <About/>
   <Features/>
   <CallToAction/>
   <Subscribe/>
   <Footer/>
    </>
  )
}

export default Home

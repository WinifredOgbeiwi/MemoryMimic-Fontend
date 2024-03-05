import React from 'react'
import Hero from '../../components/home/hero.component'
import Features from '../../components/home/features.component'
import Subscribe from '../../components/home/subscribe.component'
import CallToAction from '../../components/home/cta.component'
import About from './About'

const Home = () => {
  return (
    <>
   <Hero/>
   <About/>
   <Features/>
   <CallToAction/>
   <Subscribe/>
    </>
  )
}

export default Home

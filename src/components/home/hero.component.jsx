import React from 'react'
import Button from '../common/Button'
import Images from '../../constant/assest'
import { Heading, HeadingParagraphs } from '../common/Texts'

const Hero = () => {
  return (
    <main className='hero-container flex'>
      <div className='hero-content-container flex'>
        <Heading text=" File storage and sharing for remote teams that work together on" span="Web3" />
        <HeadingParagraphs text="Deupload is a online file manager on decentralized cloud storage and IPFS that allows you storage, share, collect files privately and team collaboration without subscription." />
        <div className="nav-buttons">
          <Button text="Get Started" specific="nav-button" location="" />
          <Button text="Learn More" specific="nav-button2" location="" />
        </div>
      </div>
      <img src={Images.HeroImg} alt="" />
    </main>
  )
}

export default Hero

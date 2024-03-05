import React from 'react'
import Images from '../../constant/assest'
import Button from '../common/Button'
import { SubHeadingParagraphs, SubSubHeadings } from '../common/Texts'

const Subscribe = () => {
    return (
        <section className='subscribe-container flex'>
            <div className='subscribe-content-container'>
                <SubHeadingParagraphs text="Sign up for updates" color="#651FFF" />
                <SubSubHeadings text="Get the tips to improve your work" />
                <p>Stay up to date on our latest tutorials, tech talks, events, blog posts, and product launches by sign up our newsletter.</p>
                <div className='action'>
                    <input type="text" name="" id="" placeholder='Enter your email' />
                    <Button text="Subscribe" specific="nav-button" />
                </div>
            </div>
            <div className='subscribe-img-container'>
                <img src={Images.SubscribeImg} alt="" width="100%" />
            </div>
        </section>
    )
}

export default Subscribe

import React from 'react'
import Images from '../../constant/assest'
import Button from '../common/Button'
import { Heading, SubHeadingParagraphs, SubSubHeadings, } from '../common/Texts'

const Features = () => {
    return (
        <section className='feature-container '>
            <div className='title'>
                <Heading text="Lightweight design, ready to use for " span="team productivity." />
            </div>

            <div className='feature-boxes'>
                <div className='box box1'>
                    <SubSubHeadings text="File Sharing" color="#651FFF" />
                    <SubHeadingParagraphs text="Securely share files within or outside your organization, and control access, track edits, and analyze the shared content stats." />
                    <img src={Images.FeatureImage1} alt="" />
                </div>
                <div className='box box2'>
                    <SubSubHeadings text="File Sharing" color="#651FFF" />
                    <SubHeadingParagraphs text="Securely share files within or outside your organization, and control access, track edits, and analyze the shared content stats." />

                    <img src={Images.FeatureImage2} alt="" />
                </div>
                <div className='box'>

                    <div>
                        <h3><span>Team collaboration</span> in  one simple place with privacy come first.</h3>
                        <SubHeadingParagraphs text="Securely share and work together with Deupload’s simple file storage and sharing, easy user management, unlimited file size, password protected links and more." />
                        <div className='nav-buttons'>
                                <Button text="Start Now" specific="nav-button" />
                        <Button text="More Feature" specific="nav-button2" />
                        </div>
                    
                    </div>

            <div>
                  <img src={Images.FeatureImage3} alt="" />
            </div>
                       
              
                   

                </div>
            </div>
        </section>
    )
}

export default Features

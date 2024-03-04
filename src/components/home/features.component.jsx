import React from 'react'
import Images from '../../constant/assest'
import Button from '../common/Button'
import { Heading, SubHeadingParagraphs, SubSubHeadings, } from '../common/Texts'

const Features = () => {
    return (
        <section>
            <div className='title'>
                <Heading text="Lightweight design, ready to use for " span="team productivity." />
            </div>

            <div className='feature-boxes'>
                <div className='box'>
                    <SubSubHeadings text="File Sharing" color="#651FFF" />
                    <SubHeadingParagraphs text="Securely share files within or outside your organization, and control access, track edits, and analyze the shared content stats." />
                    <img src={Images.FeatureImage1} alt="" />
                </div>
                <div className='box'>
                    <SubSubHeadings text="File Sharing" color="#651FFF" />
                    <SubHeadingParagraphs text="Securely share files within or outside your organization, and control access, track edits, and analyze the shared content stats."/>
                
                    <img src={Images.FeatureImage2} alt="" />
                </div>
                <div className='box'>
                    <div>
                        <h2>Team collaboration in  one simple place with privacy come first.</h2>
                        <p>Securely share and work together with Deupload’s simple file storage and sharing, easy user management, unlimited file size, password protected links and more.</p>
                        <Button text="Start Now" />
                        <Button text="More Feature" />
                    </div>
                    <img src={Images.FeatureImage3} alt="" />

                </div>
            </div>
        </section>
    )
}

export default Features

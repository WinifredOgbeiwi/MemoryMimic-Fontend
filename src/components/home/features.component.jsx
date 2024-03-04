import React from 'react'
import Images from '../../constant/assest'
import Button from '../common/Button'

const Features = () => {
    return (
        <section>
            <h1>Lightweight design, ready to use for team productivity.</h1>
            <div className='feature-boxes'>
                <div className='box'>
                    <h2>File Sharing</h2>
                    <p>Securely share files within or outside your organization, and control access, track edits, and analyze the shared content stats.</p>
                    <img src={Images.FeatureImage1} alt="" />
                </div>
                <div className='box'>
                    <h2>File Sharing</h2>
                    <p>Securely share files within or outside your organization, and control access, track edits, and analyze the shared content stats.</p>
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

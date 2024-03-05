import React from 'react'
import Images from '../../constant/assest'
import { SubHeadingParagraphs, SubHeadings } from '../common/Texts'
import Button from '../common/Button'
const CallToAction = () => {
  return (
    <section className='cta-container'>
      <div>
        <img src={Images.CtaImg} alt="" width="100%" />
      </div>
      <div className='cta-content-container '>
        <SubHeadings text="Streamline team workflows" />
        <SubHeadingParagraphs text="Deupload provides a comprehensive content collaboration platform that empowers you and your team members to share meeting agendas, project outlines, images, videos, and code with ease. By centralizing your team's work in one place, Deupload streamlines your content management process, freeing up more time for effective collaboration." />
        <div className="nav-buttons">
          <Button text="Get Started" specific="nav-button" location="" />
          <Button text="Learn More" specific="nav-button2" location="" />
        </div>
      </div>
    </section>
  )
}

export default CallToAction

import ContactPage from '@/components/miniContact'
import MissionVisionSection from '@/components/ourMission'
import AboutPage from '@/components/ourStory'
import React from 'react'

const About = () => {
  return (
    <div>
        <MissionVisionSection/>
        <AboutPage/>
        <ContactPage
        title="Want to collaborate with us?"
        description="Reach out to explore partnership opportunities and get in touch."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </div>
    
  )
}

export default About
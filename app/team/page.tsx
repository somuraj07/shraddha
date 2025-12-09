import HeroSection from '@/components/HeroSection'
import TeamSection from '@/components/team'
import React from 'react'

const Team = () => {
  return (
    <div>
      <HeroSection
              tag="MEET OUR EXPERT TEAM"
              title="Driving Innovation with Expertise"
              description="Our dedicated team of professionals brings together years of experience in web development, software solutions, and digital marketing. We combine creativity, technology, and strategy to deliver results that help your business grow and thrive in the digital landscape."
              primaryBtnText="Meet the Team"
              primaryBtnLink="#"
              imageSrc="/aboutus-section4-img-new.png"
            />
        <TeamSection/>
    </div>
  )
}

export default Team
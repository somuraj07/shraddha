import DevelopmentProcessSection from '@/components/appProcess'
import AppDevelopmentServicesSection from '@/components/appServices'
import ContactPage from '@/components/contact'
import React from 'react'

const AppDevelop = () => {
  return (
    <div>

        <AppDevelopmentServicesSection/>
        <DevelopmentProcessSection/>
        <ContactPage/>
    </div>
  )
}

export default AppDevelop
import AppDevelopmentProcess from '@/components/appProcess'
import AppDevelopmentServicesSection from '@/components/appServices'
import DigitalMarketingProcessSection from '@/components/digitalProcess'
import DigitalMarketingServicesSection from '@/components/digitalService'
import DevelopmentProcessSection from '@/components/webprocess'
import BusinessServicesSection from '@/components/whiteService'
import React from 'react'

const Service = () => {
  return (
    <div>
        <DigitalMarketingServicesSection/>
        <AppDevelopmentServicesSection/>
        <BusinessServicesSection/>
        <DevelopmentProcessSection/>
        <AppDevelopmentProcess/>
        <DigitalMarketingProcessSection/>
    </div>
  )
}

export default Service
import Footer from '@/components/footer';
import AlertBetaModal from '@/components/modals/alert-beta-modal';
import type { NextPage } from 'next'
import React, { useState } from 'react'
import AboutMe from './index-components/about-me';
import ExperienceSection from './index-components/experience-section';
import SplashScreen from './index-components/splash-screen';
import VisionAndMission from './index-components/vision-mission';
const Home: NextPage = () => {
  return (
    <>
      <AlertBetaModal />
      <SplashScreen />
      <AboutMe />
      <VisionAndMission />
      <ExperienceSection />
      <Footer />
    </>
  )
}


export default Home;
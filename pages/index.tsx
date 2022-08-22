import React from 'react'
import 'react-circular-progressbar/dist/styles.css';
import type { GetServerSideProps, NextPage } from 'next'
import { createContext } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import AboutMe from './index-components/about-me';
import ExperienceSection from './index-components/experience-section';
import SplashScreen from './index-components/splash-screen';
import VisionAndMission from './index-components/vision-mission';
import AlertBetaModal from '@/components/modals/alert-beta-modal';

const MainContext = createContext({});

const Home: NextPage = () => {
        return (
        <>
          
          <MainContext.Provider value={{ }}>
          <AlertBetaModal />
            <SplashScreen />
            <AboutMe />
            <VisionAndMission />
            <ExperienceSection />
          </MainContext.Provider>
        </>
        )
}

export const getServerSideProps: GetServerSideProps = async (props) => {
  return {
    props: {}
  }
}

export default Home;
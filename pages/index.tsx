import React from 'react'
import 'react-circular-progressbar/dist/styles.css';
import type { GetServerSideProps, NextPage } from 'next'
import { createContext } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import AboutMe from '../components/layouts/default/landing/about-me';
import ExperienceSection from '../components/layouts/default/landing/experience-section';
import SplashScreen from '../components/layouts/default/landing/splash-screen';
import VisionAndMission from '../components/layouts/default/landing/vision-mission';
import AlertBetaModal from '@/components/layouts/default/modals/alert-beta-modal';

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

export default Home;
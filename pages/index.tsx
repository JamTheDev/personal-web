import Modal, { ModalClose } from '@/components/modals/modal';
import { faWarning } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import 'react-circular-progressbar/dist/styles.css';
import { Experience } from '@/types/cms-types/experience-types';
import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { createContext } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import AboutMe from './index-components/about-me';
import ExperienceSection from './index-components/experience-section';
import SplashScreen from './index-components/splash-screen';
import VisionAndMission from './index-components/vision-mission';
import AlertBetaModal from '@/components/modals/alert-beta-modal';

type MainContextTypes = {
  experiences: Experience,
  aboutMe: AboutMe
}

const MainContext = createContext({} as MainContextTypes);

const Home: NextPage = () => {
const [opened, setOpenState] = useState(true);
        return (
        <>
          
          <MainContext.Provider value={{ aboutMe: aboutMe, experiences: experiences }}>
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
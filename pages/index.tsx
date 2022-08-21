import { get } from '@/helper/fetch.helper';
import { AboutMe } from '@/types/cms-types/about-me-types';
import { Experience } from '@/types/cms-types/experience-types';
import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import React, { FunctionComponent, HTMLAttributes } from 'react'
import { createContext } from 'react';
import { useContext } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { marked } from "marked";

type MainContextTypes = {
  experiences: Experience,
  aboutMe: AboutMe
}

const MainContext = createContext({} as MainContextTypes);

const Home: NextPage = ({ experiences, aboutMe }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log("up is the  data retrieved")
  return (
    <>
      <MainContext.Provider value={{aboutMe: aboutMe, experiences: experiences}}>
        <SplashScreen />
        <AboutMe />
        <VisionAndMission />
        <ExperienceSection />
      </MainContext.Provider>
    </>
  )
}


const SplashScreen: FunctionComponent = () => {
  return (
    <>
      <div className='grid lg:grid-cols-3 grid-cols-1 lg:p-12 md:p-10 p-0'>
        <div className='lg:col-span-2 md:col-span-2 col-span-1'>
          <div className='p-12 mt-12 flex flex-col justify-center gap-3 h-96'>
            <span className='lg:text-3xl md:text-text-2xl text-2xl font-bold'>What&apos;s Up?</span>
            <span className='lg:text-[3.5rem] md:text-[2.5rem] text-[2rem]'>
              Hi, I&apos;m Jam!
              <br />
              Jack-of-all-trades.
            </span>
            <span className='text-md'>I build things for web, android, desktop, and even cross-platform! I am very active at Discord and Other platforms. Please check out my Projects too!</span>
            <input type="button" className="
        cursor-pointer 
        rounded-full 
        border-black border-2
        w-24 
        hover:bg-black hover:text-white
        transition-colors 
        p-2 m-2" value="whoami" />
          </div>
        </div>

        <div className='col-span-1'>

        </div>
      </div>
    </>
  )
}

const AboutMe: FunctionComponent = () => {
  const context = useContext(MainContext);
  console.log(context)
  return (
    <>
      <div className='lg:px-12 px-8'>
        <span className='text-2xl font-bold'>About Me</span>
        <div className='lg:columns-2 md:columns-2 lg:px-10 md:px-7 px-3 py-8 w-full'>
          <div className='row-span-1'>
            <div className='py-2'>
              <div>
                <span className='text-2xl font-bold'>Short Introduction</span>
              </div>
              <div className='px-2 py-2' dangerouslySetInnerHTML={{__html: marked.parse(context.aboutMe.data.attributes.intro)}}>
                
              </div>
            </div>
            <hr />
            <div className='py-2'>
              <div>
                <span className='text-2xl font-bold'>My Past</span>
              </div>
              <div className='px-2 py-2' dangerouslySetInnerHTML={{__html: marked.parse(context.aboutMe.data.attributes.mypast)}}>
                
              </div>
            </div>
            <hr />
            <div className='py-2'>
              <div>
                <span className='text-2xl font-bold'>Motivation</span>
              </div>
              <div className='px-2 py-2'>
                <span dangerouslySetInnerHTML={{__html: marked.parse(context.aboutMe.data.attributes.mypast)}}>
                  
                </span>
              </div>
            </div>
          </div>
          <div className='lg:col-span-1 md:col-span-1 row-span-1 lg:flex justify-center items-center font-mono text-center'>
            <div className='px-2 lg:py-0 py-5'>
              <div className='w-full '>
                <span className='lg:text-4xl md:text-2xl text-3xl'>&quot;</span>
                <span className='lg:text-3xl md:text-1xl text-2xl'>trust the process.</span>
                <span className='lg:text-4xl md:text-2xl text-3xl'>&quot;</span>
              </div>

              <div className='text-stone-500 w-full'>
                <span className='lg:text-4xl md:text-2xl text-3xl'>&quot;</span>
                <span className='lg:text-3xl md:text-1xl text-2xl'>trust the process.</span>
                <span className='lg:text-4xl md:text-2xl text-3xl'>&quot;</span>
              </div>

              <div className='text-stone-400 w-full'>
                <span className='lg:text-4xl md:text-2xl text-3xl'>&quot;</span>
                <span className='lg:text-3xl md:text-1xl text-2xl'>trust the process.</span>
                <span className='lg:text-4xl md:text-2xl text-3xl'>&quot;</span>
              </div>

              <div className='text-stone-300 w-full'>
                <span className='lg:text-4xl md:text-2xl text-3xl'>&quot;</span>
                <span className='lg:text-3xl md:text-1xl text-2xl'>trust the process.</span>
                <span className='lg:text-4xl md:text-2xl text-3xl'>&quot;</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

const VisionAndMission: FunctionComponent = () => {
  return (
    <>

      <svg
        id="wave"
        style={{ transform: "rotate(0deg)", transition: "0.3s" }}
        viewBox="0 0 1440 130"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sw-gradient-0" x1="1" x2="0" y1="0" y2="0">
            <stop stopColor="#4ade80" offset="0%">
            </stop>
            <stop stopColor="#4ade80" offset="100%">
            </stop>
          </linearGradient>
        </defs>
        <path style={{ transform: "translate(0, 0px)", opacity: "1" }} fill="url(#sw-gradient-0)" d="M0,95L40,98.2C80,101,160,108,240,95C320,82,400,51,480,47.5C560,44,640,70,720,82.3C800,95,880,95,960,91.8C1040,89,1120,82,1200,91.8C1280,101,1360,127,1440,120.3C1520,114,1600,76,1680,50.7C1760,25,1840,13,1920,25.3C2000,38,2080,76,2160,85.5C2240,95,2320,76,2400,72.8C2480,70,2560,82,2640,82.3C2720,82,2800,70,2880,57C2960,44,3040,32,3120,22.2C3200,13,3280,6,3360,22.2C3440,38,3520,76,3600,85.5C3680,95,3760,76,3840,66.5C3920,57,4000,57,4080,50.7C4160,44,4240,32,4320,44.3C4400,57,4480,95,4560,98.2C4640,101,4720,70,4800,66.5C4880,63,4960,89,5040,88.7C5120,89,5200,63,5280,60.2C5360,57,5440,76,5520,88.7C5600,101,5680,108,5720,110.8L5760,114L5760,190L5720,190C5680,190,5600,190,5520,190C5440,190,5360,190,5280,190C5200,190,5120,190,5040,190C4960,190,4880,190,4800,190C4720,190,4640,190,4560,190C4480,190,4400,190,4320,190C4240,190,4160,190,4080,190C4000,190,3920,190,3840,190C3760,190,3680,190,3600,190C3520,190,3440,190,3360,190C3280,190,3200,190,3120,190C3040,190,2960,190,2880,190C2800,190,2720,190,2640,190C2560,190,2480,190,2400,190C2320,190,2240,190,2160,190C2080,190,2000,190,1920,190C1840,190,1760,190,1680,190C1600,190,1520,190,1440,190C1360,190,1280,190,1200,190C1120,190,1040,190,960,190C880,190,800,190,720,190C640,190,560,190,480,190C400,190,320,190,240,190C160,190,80,190,40,190L0,190Z"></path></svg>
      <div className='bg-green-400 w-full px-12 py-5 grid lg:md:grid-cols-2 '>
        <div className='lg:md:col-span-1 row-span-1 py-3 px-3 flex flex-col text-center'>
          <span className='text-3xl text-white font-bold p-5'>VISION</span>
          <span className='text-white'>
            My vision is to be a person who is a better one than who I was yesterday, to be filled with passion and create a huge impact on my community and to the world as well.
          </span>
          <div className='w-full flex justify-center py-3'>
            <div className='w-24 h-1 bg-white'></div>
          </div>
        </div>
        <div className='lg:md:col-span-1 row-span-1 py-3 px-3 flex flex-col text-center'>
          <span className='text-3xl text-white font-bold p-5'>MISSION</span>
          <span className='text-white'>
            To learn, improve, adapt, and overcome situations whilst at the same time helping others in my community and in the world as well using my skills and knowledge about programming and coding.
          </span>
          <div className='w-full flex justify-center py-3'>
            <div className='w-24 h-1 bg-white'></div>
          </div>
        </div>
      </div>
      <svg
        id="wave"
        style={{ transform: "rotate(180deg)", transition: "0.3s" }}
        viewBox="0 0 1440 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sw-gradient-0" x1="1" x2="0" y1="0" y2="0">
            <stop stopColor="#4ade80" offset="0%">
            </stop>
            <stop stopColor="#4ade80" offset="100%">
            </stop>
          </linearGradient>
        </defs>
        <path style={{ transform: "translate(0, 0px)", opacity: "1" }} fill="url(#sw-gradient-0)" d="M0,80L40,68.3C80,57,160,33,240,25C320,17,400,23,480,33.3C560,43,640,57,720,53.3C800,50,880,30,960,33.3C1040,37,1120,63,1200,66.7C1280,70,1360,50,1440,46.7C1520,43,1600,57,1680,63.3C1760,70,1840,70,1920,68.3C2000,67,2080,63,2160,56.7C2240,50,2320,40,2400,36.7C2480,33,2560,37,2640,35C2720,33,2800,27,2880,35C2960,43,3040,67,3120,75C3200,83,3280,77,3360,73.3C3440,70,3520,70,3600,60C3680,50,3760,30,3840,28.3C3920,27,4000,43,4080,53.3C4160,63,4240,67,4320,68.3C4400,70,4480,70,4560,63.3C4640,57,4720,43,4800,38.3C4880,33,4960,37,5040,31.7C5120,27,5200,13,5280,20C5360,27,5440,53,5520,66.7C5600,80,5680,80,5720,80L5760,80L5760,100L5720,100C5680,100,5600,100,5520,100C5440,100,5360,100,5280,100C5200,100,5120,100,5040,100C4960,100,4880,100,4800,100C4720,100,4640,100,4560,100C4480,100,4400,100,4320,100C4240,100,4160,100,4080,100C4000,100,3920,100,3840,100C3760,100,3680,100,3600,100C3520,100,3440,100,3360,100C3280,100,3200,100,3120,100C3040,100,2960,100,2880,100C2800,100,2720,100,2640,100C2560,100,2480,100,2400,100C2320,100,2240,100,2160,100C2080,100,2000,100,1920,100C1840,100,1760,100,1680,100C1600,100,1520,100,1440,100C1360,100,1280,100,1200,100C1120,100,1040,100,960,100C880,100,800,100,720,100C640,100,560,100,480,100C400,100,320,100,240,100C160,100,80,100,40,100L0,100Z"></path></svg>

    </>
  )
}

const ExperienceSection: FunctionComponent = () => {

  const context = useContext(MainContext);

  const arrLength = context.experiences.data.length;
  const splitArr = [
    context.experiences.data.slice(0, Math.floor(arrLength / 2)),
    context.experiences.data.slice(Math.floor(arrLength / 2), arrLength)
  ]

  const ExperienceItem: FunctionComponent<HTMLAttributes<HTMLDivElement> & { image: string, text: string }> = ({ image, text, className, style }) => {
    return (
      <div style={style} className={`relative flex flex-col overflow-hidden group justify-center items-center h-44 w-full col-span-1 gap-0 my-2 ${className} -skew-x-3`}>

        <div className='absolute h-44 w-full bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-80 transition-opacity z-10'>

        </div>

        <img className='relative right-[51%] opacity-30 group-hover:right-0 group-hover:opacity-100 transition-all' src={image} width={120} height={120} />
        <span className='absolute text-white font-bold -skew-x-3 bottom-3 group-hover:z-20 group-hover:bottom-5 transition-all'>{text}</span>
      </div>
    )
  }

  const ExperienceSection: FunctionComponent<{ children: React.ReactNode, sectionTitle: string }> = ({ children, sectionTitle }) => {
    return (
      <>
        <span className='font-bold flex lg:md:justify-start justify-center'>{sectionTitle}</span>
        <div
          className='
        py-5 
        grid lg:md:grid-cols-4
        grid-cols-2
        lg:md:justify-start 
        lg:md:items-start 
        justify-center items-center'>
          {children}
        </div>
      </>
    );
  }

  return (
    <div className='lg:px-12 md:px-10 px-5 py-8'>
      <span className='font-bold text-2xl'>
        Experience
      </span>

      <div className='w-full lg:px-10 md:px-8 px-5 py-8 flex flex-col'>

        <div dangerouslySetInnerHTML={{__html: marked.parse(context.aboutMe.data.attributes.experienceDesc)}}>

        </div>


        <div className='my-6 grid lg:md:grid-cols-2 grid-cols-1 gap-8'>
          <div className='col-span-1'>

            {

              splitArr[0].map((val) => {
                return (
                  <ExperienceSection sectionTitle={val.attributes.tag_name}>
                    {
                      // string formatting does not work on arbitrary values. instead,
                      // we shall use inline styles 
                      val.attributes.experience_items.data.map(e =>
                        <ExperienceItem
                          image={e.attributes.imageUrl}
                          text={e.attributes.item_text}
                          style={
                            {
                              backgroundImage: `linear-gradient(to right, ${e.attributes.color_from}, ${e.attributes.color_to})`
                            }
                          }
                        />
                      )
                    }
                  </ExperienceSection>
                )
              })
            }

          </div>

          <div className='col-span-1'>
            {

              splitArr[1].map((val) => {
                return (
                  <ExperienceSection sectionTitle={val.attributes.tag_name}>
                    {
                      // string formatting does not work on arbitrary values. instead,
                      // we shall use inline styles 
                      val.attributes.experience_items.data.map(e =>
                        <ExperienceItem
                          image={e.attributes.imageUrl}
                          text={e.attributes.item_text}
                          style={
                            {
                              backgroundImage: `linear-gradient(to right, ${e.attributes.color_from}, ${e.attributes.color_to})`
                            }
                          }
                        />
                      )
                    }
                  </ExperienceSection>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("hi")

  // CMS_URL is the Content Management System the application uses. 
  const responses: Response[] = await get([
    `${process.env.CMS_URL!}/api/experience-tags/?populate=*`,
    `${process.env.CMS_URL!}/api/aboutme`,
  ], (err) => {
    if (err.length) {
      console.log("ERROR ENCOUNTERED")
      err.forEach((response) => console.error(response.status, response.statusText));
      return { props: {} }
    }
  })

  const jsonResponses = responses.map(async (e) => await e.json());
  const experiencesJson = await jsonResponses[0];
  const aboutMeJson = await jsonResponses[1];

  return {
    props: {
      experiences: experiencesJson as Experience,
      aboutMe: aboutMeJson as AboutMe
    }
  }
}
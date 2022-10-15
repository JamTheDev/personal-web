import { FunctionComponent } from "react";

const AboutMe: FunctionComponent = () => {
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
                <div className='px-2 py-2'>
                  <span>Hello! I am <b>Jam! </b>
                    I am a filipino of 18 years in age, currently studying <b>Bachelor of Science in Computer Science</b> at <b>University of Makati.</b> </span>
                </div>
              </div>
              <hr />
              <div className='py-2'>
                <div>
                  <span className='text-2xl font-bold'>My Past</span>
                </div>
                <div className='px-2 py-2'>
                  <span>Everything started at <b>10th grade</b> at <b>Marcelo H. Del Pilar National High School.</b> I took programming as a TVL Subject back then, I was very interested in programming and pursuing it. I not only participated and became active at class, I was also self-studying about discord bots && android development by that time.</span>
                </div>
              </div>
              <hr />
              <div className='py-2'>
                <div>
                  <span className='text-2xl font-bold'>Motivation</span>
                </div>
                <div className='px-2 py-2'>
                  <span>
                    Software Development && Programming in general is an extremely hard field, only a few
                    survive and be successful under this field, every day, new frameworks and trends arise || change,
                    and I understand this. But, I believe that with <b>passion,</b> everything is <b>possible.</b>
                    I strive to be a better person than who I was yesterday, break through barriers, and be the best, even
                    if it takes me a long time.
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

  export default AboutMe;
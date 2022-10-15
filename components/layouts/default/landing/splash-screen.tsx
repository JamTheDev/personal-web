import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent, useState, useEffect } from "react";
import Image from "next/image";


const SplashScreen: FunctionComponent = () => {
  const [commits, setCommits] = useState([]);
  const [listEnabled, setListEnabled] = useState(false);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.screen.width)
    window.onresize = (e) => {
      setWidth(window.screen.width)
    }

    (async () => {
      const response = await fetch('/api/commits', { method: "GET" });

      if (response.status == 200) {
        const jsonifiedResponse = await response.json();
        setCommits(jsonifiedResponse.data)
      }

    })()
  }, [])

  return (
    <>
      <div className='grid lg:grid-cols-3 grid-cols-1 lg:px-12 md:px-10 p-0'>
        <div className='lg:col-span-2 md:col-span-2 col-span-1 flex justify-center items-center'>
          <div className='p-12 flex flex-col justify-center gap-3 h-96'>
            <span className='lg:text-3xl md:text-text-2xl text-2xl font-bold'>What&apos;s Up?</span>
            <span className='lg:text-[3.5rem] md:text-[2.5rem] text-[2rem]'>
              Hi, I&apos;m Jam!
              <br />
              {
                /*
                  <TopDownScrollText className="relative" words={[
                    'Software Developer',
                    'Game Developer',
                    'Web Developer',
                  ]}/>
                */
              }
              <div className="overflow-hidden">
                <span className="relative ">Jack-of-all-trades.</span>
              </div>
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

        <div className='col-span-1 lg:py-12 md:py-12 py
          [-2'>
          <div className='flex flex-col justify-center items-center'>
            <FontAwesomeIcon icon={faGithub} size="5x" />
            <span className='text-xl p-2'>Project Commits</span>
          </div>
          <div className='flex flex-col overflow-y-scroll gap-3 p-2 w-full lg:h-96 md:h-96'>
            {listEnabled && width < 600 ? <span className='text-center px-5 py-3 rounded-lg border-2 border-solid border-black hover:bg-black hover:text-white hover:border-white transition-colors' onClick={() => setListEnabled(val => !val)}>Hide commits?</span> : <div />}
            {
              listEnabled || width > 600 ? commits.map((val: any, index) => {
                console.log(val);
                return (
                  <div
                    key={index}
                    onClick={() => window.open(val.html_url, "_blank")}
                    className='flex grid-rows-5 cursor-pointer group hover:bg-black hover:border-stone-500 gap-2 p-2 border-2 border-solid border-stone-300 rounded-md transition-colors'>
                    <div className="col-span-2">
                      <Image className='w-full h-full rounded-full' src={val.author.avatar_url} width={60} height={60} />
                    </div>
                    <div className='col-span-3 flex flex-col gap-1'>
                      <span className='text-sm text-stone-500 group-hover:text-stone-50 transition-colors'>
                        {val.commit.message}
                      </span>

                      <span className='text-xs text-stone-500 group-hover:text-stone-50 transition-colors'>
                        {new Date(val.commit.author.date).toLocaleDateString()}
                      </span>
                    </div>

                  </div>
                )
              }) : <span className='text-center px-5 py-3 rounded-lg border-2 border-solid border-black hover:bg-black hover:text-white hover:border-white transition-colors' onClick={() => setListEnabled(val => !val)}>View commits?</span>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default SplashScreen;
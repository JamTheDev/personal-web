import { FunctionComponent, HTMLAttributes } from "react";

const ExperienceSection: FunctionComponent = () => {

    const ExperienceItem: FunctionComponent<HTMLAttributes<HTMLDivElement> & { image: string, text: string }> = ({ image, text, className }) => {
      return (
        <div className={`relative flex flex-col overflow-hidden group justify-center items-center h-44 w-full col-span-1 gap-0 my-2 ${className} -skew-x-3`}>
  
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
          <span>
            For the past 3 years, I have been learning frameworks, libraries, and various programming languages
            to help me jumpstart my career as a software developer. As a result, I have a huge array of knowledge in different
            fields such as front-end development and back-end development in multiple platforms, even automation aswell. Below are the tools I am using && that I have used
            to build applications.
          </span>
  
          <div className='my-6 grid lg:md:grid-cols-2 grid-cols-1 gap-8'>
            <div className='col-span-1'>
  
              <ExperienceSection sectionTitle='Front-End Frameworks'>
                <ExperienceItem
                  className='bg-cyan-600'
                  image={"https://pluspng.com/img-png/react-logo-png-img-react-logo-png-react-js-logo-png-transparent-png-1142x1027.png"}
                  text={"REACT (TS)"} />
  
                <ExperienceItem
                  className='bg-gradient-to-r from-green-500 to-green-300'
                  image={"https://impicode.com/wp-content/uploads/sites/2/2020/07/330px-Vue.js_Logo_2.svg_-300x260.png"}
                  text={"VUE (TS)"} />
  
                <ExperienceItem
                  className='bg-gradient-to-r from-orange-500 to-orange-300'
                  image={"https://raw.githubusercontent.com/sveltejs/svelte/29052aba7d0b78316d3a52aef1d7ddd54fe6ca84/site/static/images/svelte-android-chrome-512.png"}
                  text={"SVELTE (TS)"} />
  
                <ExperienceItem
                  className='bg-gradient-to-r from-red-500 to-red-300'
                  image={"https://pluspng.com/img-png/angular-logo-png-angular-logo-transparent-png-pluspng-482x512.png"}
                  text={"ANGULAR (TS)"} />
  
  
              </ExperienceSection>
  
              <ExperienceSection sectionTitle='Cross-Platform'>
                <ExperienceItem
                  className='bg-gradient-to-r from-cyan-200 to-cyan-300'
                  image={"https://alexisvt.gallerycdn.vsassets.io/extensions/alexisvt/flutter-snippets/0.0.2/1529817162825/Microsoft.VisualStudio.Services.Icons.Default"}
                  text={"FLUTTER"} />
              </ExperienceSection>
  
              <ExperienceSection sectionTitle='CSS Frameworks'>
                <ExperienceItem
                  className='bg-cyan-200'
                  image={"https://iconape.com/wp-content/files/an/351546/png/tailwind-css-logo.png"}
                  text={"TAILWIND"} />
  
                <ExperienceItem
                  className='bg-gradient-to-r from-purple-400 to-purple-500'
                  image={"https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png"}
                  text={"BOOTSTRAP"} />
              </ExperienceSection>
  
            </div>
  
            <div className='col-span-1'>
              <ExperienceSection sectionTitle='Back-End / Middleware Frameworks'>
                <ExperienceItem
                  className='bg-gradient-to-r from-stone-500 to-stone-700'
                  image='https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png'
                  text='NEXTJS API'
                />
  
                <ExperienceItem
                  className='bg-gradient-to-r from-purple-500 to-cyan-500'
                  image='https://ozekiphone.com/attachments/706/asp_net_icon_transparent.png'
                  text='ASP.NET Web API'
                />
              </ExperienceSection>
  
              <ExperienceSection sectionTitle='Databases'>
                <ExperienceItem
                  className='bg-gradient-to-r from-cyan-300 to-cyan-500'
                  image='https://cdn.iconscout.com/icon/free/png-256/postgresql-5-569524.png'
                  text='PostgreSQL'
                />
  
                <ExperienceItem
                  className='bg-gradient-to-r from-green-300 to-green-400'
                  image='https://cdn.icon-icons.com/icons2/2699/PNG/512/mongodb_logo_icon_170943.png'
                  text='MongoDB'
                />
  
                <ExperienceItem
                  className='bg-gradient-to-r from-orange-200 to-orange-300'
                  image='https://pluspng.com/img-png/firebase-logo-png-firebase-logo-png-transparent-amp-svg-vector-pluspng-2400x3291.png'
                  text='Firebase'
                />
              </ExperienceSection>
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default ExperienceSection;
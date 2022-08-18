import { faFacebook, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent, useState } from "react";
import Button from "./input/button";

const Footer: FunctionComponent = () => {
    return (
        <>
            <div className='relative bottom-0 grid lg:md:grid-cols-2 grid-cols-1 px-12 bg-gradient-to-l from-purple-400 to-purple-800'>
                <div className='relative bottom-5 col-span-1 bg-purple-400 p-4 rounded-md drop-shadow-lg'>
                    <span className='font-bold text-4xl'> INTERESTED? </span>
                    <div className='px-6 py-3 flex flex-col gap-3'>
                        <Button
                            onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=geod332@gmail.com", "_blank")}
                            value="Email me!"
                            className='p-2'
                            prefixIcon={faEnvelope}
                        />

                        <span className='text-stone-7 00'>Or check my socials below:</span>
                        <div className='flex flex-row gap-5'>
                            <FontAwesomeIcon className='cursor-pointer' size="lg" icon={faFacebook} onClick={() => window.open("https://www.facebook.com/jam.thedev2004", "_blank")}/>
                            <FontAwesomeIcon className='cursor-pointer' size="lg" icon={faGithub} onClick={() => window.open("https://www.github.com/JamTheDev", "_blank")} />
                            <FontAwesomeIcon className='cursor-pointer' size="lg" icon={faTwitter} onClick={() => window.open("https://www.twitter.com/JamTheDev", "_blank")} />
                        </div>
                    </div>
                </div>

                <div className='col-span-1'>
                    <span></span>
                </div>
            </div>
        </>
    )
}

export default Footer;
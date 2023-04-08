import Image from 'next/image'
import React from 'react'

import { Envelope, Twitter, Linkedin } from './icons/'
import { GoMarkGithub } from "react-icons/go"

const Sidebar = ({data}) => {
  const {name, role, education, contactLinks} = data;
  return (
    <div className='bg-black flex flex-col content-between w-full h-auto sm:h-screen sm:justify-around sm:w-1/3 sm:fixed'>
        <div className='text-white flex flex-col p-10 items-center'> 
            <Image
                priority
                width={300}
                height={300}
                className='rounded-full mb-8' 
                src='/images/cropped_image.jpg'
                alt='profile picture'
                aria-label='profile-img'
            />
            <h1 className='mb-2'> {name} </h1>
            <h2 className='mb-8'> {role} </h2>
            <p className='mb-2'> {education[0]} </p>
            <div className='text-white text-center mb-4 mt-4 sm:mt-8'>
                <h3 className='mb-2'> Contact & Links </h3>
                <div className='flex flex-row justify-center'>
                    <a className='link-icons' href={contactLinks[0]} aria-label='email-link'>  
                        <Envelope />
                    </a>
                    <a className='link-icons' href={contactLinks[1]} aria-label='github-link'>
                        <GoMarkGithub />
                    </a>
                    <a className='link-icons' href={contactLinks[2]} aria-label='linkedin-link'>
                        <Linkedin />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
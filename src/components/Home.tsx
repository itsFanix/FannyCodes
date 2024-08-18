import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

import proficPic from "../assets/profilPicTwo.jpg"
import { ABOUT_ME } from '../data/info'

function Home() {
  return (
    <div className='pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex p-4 flex-col items-center lg:items-start'>

            <h1 className='pb-4 text-5xl font-thin tracking-tight lg:mt-6 lg:text-6xl 2xl:text-7xl'>
              Fanny NYATSIKOR
            </h1>
            <span className='text-2xl tracking-tight'>
              Sotfware Engineer - Language Enthusiast
            </span>

            <p className='my-2 max-w-xl py-4 font-light tracking-tighter'>
             {ABOUT_ME}
            </p>
            
          <div className='mx-auto w-1/2 max-w-md  m-5 flex flex-row justify-center items-center  gap-4 text-2xl'>
          <a href='https://github.com/itsFanix' target='_blank'>
          <FaGithub />
          </a>
           
           <a href='https://www.linkedin.com/in/gnyatsikor/' target='_blank'>
           <FaLinkedin />
           </a>
            
            
          </div>
        

          </div>

        </div>

        <div className='w-full lg:w-1/2 lg:p-8'>
        <div className='flex justify-center'>

          <img src={proficPic} alt="" className='rounded-2xl h-80 opacity-50 ' />
        </div>

        </div>
        {/* <div className=' mt-20 lg:mt-80'>
          <hr className='border-t border-gray-600 border-27 border-0.5 mx-auto  max-w-5xl ' />

          <div className='mx-auto w-1/2 max-w-md  m-3 flex flex-row justify-center items-center  gap-4 text-2xl'>
            <FaLinkedin />
            <FaGithub />
            <FaTwitterSquare />
            <FaInstagram />
          </div>
        </div> */}
      </div>

    </div>
  )
}

export default Home

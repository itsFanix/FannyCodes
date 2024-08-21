import React from 'react'
import { EXPERIENCES } from '../data/info'
import { motion } from 'framer-motion'

function Experiences() {
  return (
    <div className='cursor-pointer'>
      <h1 className='mb-10 text-center'>Download my Resume</h1>
      <div >
      {EXPERIENCES.map((experience, index) =>(
        <div 
        key={index} className='mb-9 flex flex-wrap lg:justify-center'>
          <motion.div
           whileInView = {{opacity: 0.7, x:0}}
           initial = {{opacity: 0, x:-100}}
           transition={{duration: 1}}
           className='w-full lg:w-1/4'
          >
            <p className='text-green-300 text-sm'>{experience.year}</p>
          </motion.div>

          <motion.div 
           whileInView = {{opacity: 0.70, x:0}}
           initial = {{opacity: 0, x: 100}}
          transition={{duration: 1}}
           whileHover={{
            opacity: 1,
           }}
           className='w-full max-w-xl lg:w-3/4 px-2 hover:bg-blue-200 hover:bg-opacity-10  hover:rounded-lg '
          >
            <div className='flex flex-row justify-between items-center py-4' >
            <h6 className='font-semibold'>  {experience.role}  </h6>
                
                <h2 className=' text-sm text-purple-100'>
                {experience.company}
                </h2> 
               
                <img src={experience.c_Logo} alt="" className='bg-slate-50 rounded p-2' width="90" height="90" />
               
              
                 
               
               


            </div>
            {/* <h6 className='mb-2 font-semibold'>  {experience.role} - 
              <span className='text-sm text-purple-100'>
                {experience.company}
                </span> 
              
                </h6> */}
            <p className='mb-4 text-neutral-300'>{experience.description}</p>

            <div className='flex flex-wrap'>
            {experience.technologies.map((tech, index)=> (
              <span key={index} className='m-2 rounded-md bg-slate-700 px-3 py-0.5 text-sm font-medium text-green-300'>{tech}</span>
            ))}
            </div>
          </motion.div>

        </div>
      ))}
    </div>
    </div>
  )
  
}

export default Experiences

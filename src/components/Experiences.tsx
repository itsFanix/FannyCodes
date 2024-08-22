import React from 'react'
import { EXPERIENCES } from '../data/info'
import { motion } from 'framer-motion'

function Experiences() {
  return (
    <div className=' cursor-pointer '>
      <div className='flex justify-center mb-16'>
      <h1 className=' bg-gradient-to-r from-green-300 via-blue-400 to-purple-500 bg-clip-text text-2xl tracking-tight font-thin text-transparent '> View Full Resume</h1>
      </div>
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
            <p className='text-green-300 text-lg '>{experience.year}</p>
          </motion.div>

          <motion.div 
           whileInView = {{opacity: 0.70, x:0}}
           initial = {{opacity: 0, x: 100}}
          transition={{duration: 1}}
           whileHover={{
            opacity: 1,
           }}
           className=' w-full max-w-2xl lg:w-3/4  px-2 hover:shadow-lg hover:bg-blue-200 hover:bg-opacity-20  hover:rounded-lg '
          >
            <div className='flex flex-wrap flex-row justify-between items-center py-4' >
            <h3 className='font-semibold lg:text-2xl text-xl'>  {experience.role}  </h3>
                
                <h2 className=' text-purple-100 text-xl' >
                {experience.company}
                </h2> 
               <div className=' size-30 flex items-center '>
               <img src={experience.c_Logo} alt="" className='bg-slate-50 rounded p-2 h-auto' width="100" height="100" />
               </div>
               
               
              
                 
               
               


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

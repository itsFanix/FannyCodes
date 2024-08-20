import React from 'react'
import { EXPERIENCES } from '../data/info'
import { motion } from 'framer-motion'

function Experiences() {
  return (
    <div>
      {EXPERIENCES.map((experience, index) =>(
        <div key={index} className='mb-8 flex flex-wrap lg:justify-center rounded border border-red-400'>
          <motion.div
           whileInView = {{opacity: 1, x:0}}
           initial = {{opacity: 0, x:-100}}
           transition={{duration: 1}}
           className='w-full lg:w-1/4'
          >
            <p>{experience.year}</p>
          </motion.div>

          <motion.div
           whileInView = {{opacity: 1, x:0}}
           initial = {{opacity: 0, x: 100}}
           transition={{duration: 1}}
           className='w-full max-w-xl lg:w-3/4'
          >
            <h6 className='mb-2 font-semibold'>   {experience.role} - <span className='text-sm text-purple-100'>{experience.company}</span> </h6>
            <p className='mb-4 text-neutral-300'>{experience.description}</p>

            {experience.technologies.map((tech, index)=> (
              <span key={index} className='m-3 rounded-md bg-slate-700 px-3 py-1 my-2 text-sm font-medium text-green-300'>{tech}</span>
            ))}
          </motion.div>

        </div>
      ))}
    </div>
  )
}

export default Experiences

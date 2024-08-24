
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'


import proficPic from "../assets/fotor-Fai.jpg"
import { ABOUT_ME } from '../data/info'
import { motion } from 'framer-motion'

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } }
})

function Home() {
  return (
    <section className=' lg:mt-3 2xl:mt-36 2xl:mb-28'>
      <div className='flex flex-wrap-reverse'>
        <div className='w-full lg:w-1/2'>
          <div className='flex p-2 flex-col items-center lg:items-start'>

            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className='pb-4 text-5xl font-thin tracking-tight lg:mt-6 lg:text-6xl 2xl:text-7xl'>
              Fanny NYATSIKOR
            </motion.h1>
            <motion.span
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className='bg-gradient-to-r from-green-300 via-blue-400 to-purple-500 bg-clip-text text-2xl tracking-tight font-thin text-transparent'>
              Sotfware Engineer - Language Enthusiast
            </motion.span>


            <motion.p
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className='my-2 max-w-xl py-4 font-light tracking-tighter text-justify'>
              {ABOUT_ME}
            </motion.p>

            <motion.div 
            
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className='mx-auto w-1/2 max-w-md  m-5 flex flex-row justify-center items-center  gap-4 text-2xl'>
              <a href='https://github.com/itsFanix' target='_blank'>
                <FaGithub className='size-10' />
              </a>

              <a href='https://www.linkedin.com/in/gnyatsikor/' target='_blank'>
                <FaLinkedin className='size-10' />
              </a>


            </motion.div>
          </div>

        </div>

        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>

            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0 }}
              src={proficPic} alt="" className='rounded-full h-80 opacity-80 ' />
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

    </section>
  )
}

export default Home

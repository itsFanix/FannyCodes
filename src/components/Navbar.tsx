import { motion } from 'framer-motion'
// import React from 'react'
import { NavLink } from 'react-router-dom'
// import proficPic from "../assets/fotor-Fai2.jpg"


function Navbar() {
    return (
        <nav className=' left-0 z-auto mb-4 flex itemscenter justify-between py-5 2xl:mb-20 '>
            <div className='flex flex-row items-center  '>
                {/* <img src={proficPic} alt="" className=' w-10 h-10 rounded-full ' /> */}
                <h3  className=' text-sm  tracking-tight font-extralight italic'>FannyCodes</h3>
             </div>
          
                <ul className=' m-6 flex flex-row items-center justify-center gap-4 text-xl '>
                    <motion.li
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    >
                        <NavLink   to="/" className={({isActive}) => 
                            isActive?  "underline underline-offset-4 decoration-green-300" : "hover:text-blue-200 "
                        }>Home</NavLink>
                    </motion.li>
                    <motion.li
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    >
                        <NavLink to="/Experiences"  className={({isActive}) => 
                            isActive?  " underline underline-offset-4  decoration-green-300 " : "hover:text-blue-200 "
                        }>Experience</NavLink>
                    </motion.li>
                    <li>
                        <NavLink to="/Project"  className={({isActive}) => 
                            isActive?  "underline underline-offset-4 decoration-green-300" : "hover:text-blue-200 "
                        }>Projects</NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/Blog" className={({isActive}) => 
                            isActive?  "underline underline-offset-4 decoration-green-300" : "hover:text-blue-200 "
                        }>Blog</NavLink>
                    </li> */}
                </ul>
           
        </nav>
    )
}

export default Navbar

import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className=' mb-6 flex items-center justify-between py-5 2xl:mb-40 '>
            <div>
                <h3  className=' text-xl  tracking-tight font-extralight italic'>FannyCodes</h3>
             </div>
          
                <ul className=' m-6 flex flex-row items-center justify-center gap-4 text-xl '>
                    <li>
                        <NavLink   to="/" className={({isActive}) => 
                            isActive?  "underline underline-offset-4 decoration-green-300" : "hover:text-blue-200 "
                        }>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Experiences"  className={({isActive}) => 
                            isActive?  " underline underline-offset-4  decoration-green-300 " : "hover:text-blue-200 "
                        }>Experience</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Project"  className={({isActive}) => 
                            isActive?  "underline underline-offset-4 decoration-green-300" : "hover:text-blue-200 "
                        }>Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Blog" className={({isActive}) => 
                            isActive?  "underline underline-offset-4 decoration-green-300" : "hover:text-blue-200 "
                        }>Blog</NavLink>
                    </li>
                </ul>
           
        </nav>
    )
}

export default Navbar

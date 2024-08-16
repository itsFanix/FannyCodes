import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/">Experience</Link>
            </li>
            <li>
                <Link to="/">Project</Link>
            </li>
            <li>
                <Link to="/">Blog</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar

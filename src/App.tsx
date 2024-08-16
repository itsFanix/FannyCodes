import {BrowserRouter as Router,  Route , Routes} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Experiences from "./components/Experiences"
import Project from "./components/Project"
import Blog from "./components/Blog"



function App() {
  

  return (

    
   <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
    <div className='fixed top-0 -z-10 h-full w-full'>
   
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/Experiences" element= {<Experiences/>}/>
        <Route path="/Project" element= {<Project/>}/>
        <Route path="/Blog" element= {<Blog/>}/>
      </Routes>
    </Router>
    </div>
   </div>
  )
}

export default App

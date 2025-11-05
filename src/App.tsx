import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experiences from "./components/Experiences";
import Project from "./components/Project";
import Blog from "./components/Blog";
//import Footer from "./components/Footer"

function App() {
  //  text-neutral-100 overflow-x-hidden antialiased selection:bg-cyan-300 selection:text-cyan-900
  return (
    <div className="">
      <div className="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(135%_135%_at_50%_10%,#1e293b_50%,#10b981_60%,#63e_100%)]"></div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Experiences" element={<Experiences />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </Router>
      {/* <Footer/> */}
    </div>
  );
}

export default App;

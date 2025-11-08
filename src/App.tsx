import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experiences from "./components/Experiences";
import Project from "./components/Project";
import Blog from "./components/Blog";
import Publications from "./components/Publications";
//import Footer from "./components/Footer"

function App() {
  //
  return (
    <div className=" text-neutral-100 overflow-x-hidden antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(135%_135%_at_50%_10%,#1e293b_50%,#10b981_60%,#63e_100%)]"></div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Publications" element={<Publications />} />
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

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import  Home  from "./pages/Home.jsx"
import Signin from "./pages/Signin.jsx"
import Signup from "./pages/Signup.jsx"
import Profile from './pages/Profile.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Header from './components/Header.jsx'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/signin" element={ <Signin />} />
          <Route path="/signup" element={ <Signup />}/>
          <Route path="/about" element={ <About />}/>
          <Route path="/profile" element={ <Profile />}/>
          <Route path="/projects" element={ <Projects />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App
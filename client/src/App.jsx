
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Project from './Pages/Project'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'

import Dashboard from './Pages/Dashboard'

function App() {


  return (
    <>
    <BrowserRouter>

  <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/signup" element={<Signup/>} />
     <Route path="/project" element={<Project/> }  />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>
    
     
    </>
  )
}

export default App

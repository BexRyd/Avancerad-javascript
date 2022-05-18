import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Flaggskylt from './components/Flaggskylt'
import Hangandeskylt from './components/Hangandeskylt'
import Vaggskyltar from './components/Vaggskyltrar'
import Kundvagn from './components/Kundvagn'
import {BrowserRouter as Router,Routes, Route,} from "react-router-dom";



function App() {
  

  return (
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
  <Route path="/kundvagn" element={<Kundvagn />} />
  <Route path="/Flaggskylt" element={<Flaggskylt />} />
  <Route path="/Hangandeskylt" element={<Hangandeskylt />} />
  <Route path="/Vaggskyltar" element={<Vaggskyltar />} />
      </Routes>
      </Router>
  )
}

export default App




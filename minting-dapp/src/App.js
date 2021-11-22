import React from 'react';
// import './App.css';
import Navbar from './components/Navbar/indexx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Roadmap from './Roadmap';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/road-map' element={<Roadmap/>} />
      </Routes>
    </Router>
  );
}

export default App;
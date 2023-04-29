import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './views/HomePage';
import ParticlesComponent from './components/particles/ParticlesComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/particles' element={<><HomePage/><ParticlesComponent/></>} />
      </Routes>
    </Router>
  );
}

export default App;

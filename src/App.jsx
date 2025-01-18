// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import HireMe from './Hireme';
import About from './About';
import Projects from './Projects';

const App = () => {
  return (
    <Router>
      {/* Navbar remains visible on all pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Searchbar />} />
        <Route path="/hire-me" element={<HireMe />} />
        <Route path='/About' element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

    </Router>
  );
};

export default App;


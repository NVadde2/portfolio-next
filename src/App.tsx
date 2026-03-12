import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import BlogPost from './components/Blog';
import Experience from './components/Experience';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Projects from './components/Projects';

function App() {

  return (
    <>
      <NavBar />
      <div className="static-body bg--work-solid">
        <Routes>
          <Route
            path="/portfolio"
            element={<About />}
          />
          <Route
            path="/projects"
            element={<Projects />}
          />
          <Route
            path="/blog"
            element={<BlogPost />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;

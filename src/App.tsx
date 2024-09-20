import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import BlogPost from './components/Blog';
import Experience from './components/Experience';
import Latest from './components/MainContent';
import NavBar from './components/NavBar';
import Projects from './components/Projects';

function App() {

  return (
    <>
      <NavBar />
      <div className="static-body bg--work-solid">
        <Routes>
          <Route
            path="/"
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
            element={<Latest />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;

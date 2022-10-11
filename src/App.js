import React, { useState } from 'react';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import About from './components/About';
import Resume from './components/Resume';
import './App.css'

function App() {
  //var currentPage = 'About';\
  const [ currentPage, setCurrentPage] = useState('About')
  function render() {
    switch (currentPage) {
      case 'About':
        return <About/>
      case 'Projects':
        return <Projects/>
      case 'Contact':
        return <Contact/>
      case 'Resume':
        return <Resume/>
      default:
        break;
    }
  }
  return (
    <div className="make-space">
      <Nav setCurrentPage = {setCurrentPage}/>
      {render()}
      <Footer/>
    </div>
  );
}

export default App;

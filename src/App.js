import React, { useState } from 'react';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import About from './components/About';
import './App.css'

function App() {
  //var currentPage = 'About';\
  const [ currentPage, setCurrentPage] = useState('About')
  function render() {
    switch (currentPage) {
      case 'About':
        return <About/>
        break;
      case 'Projects':
        return <Projects/>
        break;
      case 'Contact':
        return <Contact/>
      default:
        break;
    }
  }
  return (
    <div class="make-space">
      <Nav setCurrentPage = {setCurrentPage}/>
      {render()}
      <Footer/>
    </div>
  );
}

export default App;

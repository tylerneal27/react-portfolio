import React from 'react';

function Nav(props) {
  return (
    <nav>
      <h1>Tyler Neal's Portfolio</h1>
      <ul className="flex-wrap">
        <a href="#about-me" onClick={() => {props.setCurrentPage('About')}}> about me</a>
        <a href="#work" onClick={() => {props.setCurrentPage('Projects')}}> projects</a>
        <a href="#contact-me" onClick={() => {props.setCurrentPage('Contact')}}> contact me</a>
        <a href="#resume" onClick={() => {props.setCurrentPage('Resume')}}> resume</a>
      </ul>
    </nav>
  );
}

export default Nav;
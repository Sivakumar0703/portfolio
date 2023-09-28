import React from 'react';
import './About.css';
import { Element, Link } from 'react-scroll';

const About = () => {
  return (
   
      <Element>
        <div className='about'>
          <div className='about-container'>
            <h1>Sivakumar S</h1>

            <a href="https://drive.google.com/file/d/19T2YbdCsFgwTVX_grHbP65WSivbKYepC/view?usp=drive_link"> 
              <button className='resume-btn'>Resume</button>
            </a>

            <Link to="project" smooth={true} duration={500}>
              <button className='project-btn'>Project</button>
            </Link>
          </div>



        </div>
      </Element>

 
  )
}

export default About
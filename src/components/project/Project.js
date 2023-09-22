import React from 'react';
import './Project.css';
import project2 from './project1.png';
import project1 from './project2.png';
import { Element } from 'react-scroll';
import ProjectCard from './ProjectCard';


const Project = () => {

const myProject = [
        {
            img: project1,
            title:"Online Products Rental",
            description:"Through online rental platform people can hire equipments/products by online.",
            link:"https://online-rental.netlify.app/"
    
        },
        {
            img: project2,
            title:"Motorcycle Service Booking",
            description:"Now it's easy to get general bike service and also a repair service from home just by one click.Choose your availability and book for your service.Our Chief mechanic will visit your place and get your bike fixed", 
            link:"https://moto-health-care.netlify.app/"
        },
    ]
 




  return (
    <div>
         <p style={{color:'white' , fontSize:'25px' , fontWeight:'bold' , padding:'3px'}}>PROJECTS</p>
         <p  className='project-text'>Projects inculcates, promotes, and upholds the principles of learning through experience and experimentation.Project work can be seen as the experiential learning process in action.</p>
         <p  className='project-text'>Here is my experimental work Which had taught me new things and helped to understand the concept further more from my previous understanding.</p>
        <Element className='project'>
            <div className='project-container'>
            {
            myProject.map((i) => {
               return(
                <ProjectCard img={i.img} title={i.title} description={i.description} link={i.link} key={i.title} />
               ) 
            })
         }
            </div>

        </Element>

    </div>
  )
}

export default Project
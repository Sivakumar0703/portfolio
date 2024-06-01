import React, { useState } from 'react'
import './Project.css';

const ProjectCard = ({img , title , description , link}) => {

    const [show , setShow] = useState(false);
       let screenSize = window.screen.width;
   console.log(screenSize)

  //  const [screenWidth , setScreenWidth] = useState();

  //  useEffect(()=>{
  //   setScreenWidth(window.screen.width)   
  //   console.log(screenWidth)
  //  },[screenWidth])

  return (
    <a href={link} className='link' target='_blank'>
    <div id="project" onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
    {
        show ? (
         <div className='project-detail'> 
            <p className='project-title'>{title}</p>
            <p>{description}</p>
         </div>
        ) : (
         <img src={img} alt="" />
         
        )
    }
           
    
    </div>
    </a>
  )
}

export default ProjectCard
import React, { useState } from 'react'
import './Project.css';

const ProjectCard = ({img , title , description , link , projectCodeLinks}) => {

    const [show , setShow] = useState(false);
    let screenSize = window.screen.width;
   console.log(screenSize)


  //  const [screenWidth , setScreenWidth] = useState();

  //  useEffect(()=>{
  //   setScreenWidth(window.screen.width)   
  //   console.log(screenWidth)
  //  },[screenWidth])

  return ( <div className='card-and-btn'>
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


     <div id="code-btn">
     <a className="btn btn-primary custom-colored-btn-front" href={projectCodeLinks.front} target='_black'>FRONTEND CODE</a>
     <a className="btn btn-success custom-colored-btn-back" href={projectCodeLinks.back} target='_black'>BACKEND CODE</a>
   </div>
  </div>
  )
}

export default ProjectCard
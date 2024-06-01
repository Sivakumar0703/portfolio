
import React from 'react';
import './Contact.css';
import { Element } from 'react-scroll';
import { IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
  return (
    <Element className='contact'>
        <p style={{color:'white' , fontSize:'25px' , fontWeight:'bold' , padding:'3px'}}>CONTACT</p>
        <p className='contact-text'>You can drop your feedback/message in the followings.I do frequently check my inbox so that i can reply you as soon as possible.</p>

        <div className='contact-container'>
            <div >
            <div className=' contacts'>
              
              <p style={{textAlign:'left'}}> <span style={{color:'black'}}> Email : </span>  <span>ssivakumar358@gmail.com  </span> </p> &nbsp;  &nbsp;
             <p style={{textAlign:'left'}}> <span style={{color:'black'}}> Github : </span>  <span>Sivakumar0703  </span> </p> &nbsp; &nbsp;
            {/* <p style={{textAlign:'left'}}> <span style={{color:'black'}}> Linkedin : </span>  siva-kumar-66447bb8 <span></span> </p>  */}
              </div> 
            </div>

             <div className='icons'>
                <a href='https://mail.google.com/mail/?view=cm&fs=1&to=ssivakumar358@gmail.com' target='_blank'> <IconButton> <EmailIcon/> </IconButton> </a>
                <a href='https://github.com/Sivakumar0703' target='_blank'> <IconButton> <GitHubIcon/> </IconButton> </a>
                <a href='https://www.linkedin.com/in/sivakumar-fsd/' target='_blank'> <IconButton> <LinkedInIcon/> </IconButton> </a>
             </div>


        </div>
    </Element>
  )
}

export default Contact
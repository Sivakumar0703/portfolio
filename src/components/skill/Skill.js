import React from 'react';
import './Skill.css';
import { Element } from 'react-scroll';
import { Col, Row } from 'react-bootstrap';
import { LinearProgress } from '@mui/material';
import skillImage from './mern-2.jpg';

const Skill = () => {
  return (
    <div className='skill-section'>
        <Element>
            <Row className='skill'>
                <Col className='skill-img' md={5}>
                    <img src={skillImage} alt='skill' />
                </Col>

                <Col className='progress-bar-container' md={5}>
                    <p className='skill-container-title'>SKILLSET</p>
                    <div className='skill-set'>

                       <p style={{color:"darkmagenta"}}>HTML & CSS</p>
                        <div className='progress-bar bar1'>
                            <LinearProgress variant="determinate" value={80} />
                        </div>

                        <p style={{color:"blue"}}>REACT</p>
                        <div className='progress-bar bar2'>
                            <LinearProgress variant="determinate" value={75} />
                        </div>

                        <p style={{color:"yellowgreen"}}>NODEJS</p>
                        <div className='progress-bar bar3'>
                            <LinearProgress variant="determinate" value={70} />
                        </div>

                        <p style={{color:"green"}}>MONGODB</p>
                        <div className='progress-bar bar4'>
                            <LinearProgress variant="determinate" value={70} />
                        </div>

                        <p style={{color:"navy"}}>MYSQL</p>
                        <div className='progress-bar bar5'>
                            <LinearProgress variant="determinate" value={60} />
                        </div>

                    </div>
                </Col>
            </Row>

        </Element>
    </div>
  )
}

export default Skill
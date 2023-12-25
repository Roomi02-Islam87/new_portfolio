import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Profile from'../../assets/img/profile/profile.webp'
import Button from "react-bootstrap/Button";

import './about.style.css';

const About = () => {
    return (
        <div id="about">
            <div className="about">
            <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
            <Container>
                <Row className="pt-3 pb-5 align-items-center">
                    {/*Profile pic*/}
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2">
                        <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid  />
                        </Row>
                    </Col>
                    {/*about me*/}
                    <Col xs={12} md={6}>
                    <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Roomi Islam</strong>
                <br />A passionate programmer and an organized student of BIT Sindri, persuing B.Tech
                         in CSE branch. I am from Dhanbad(Jharkhand). I Know Full Stack Web Development 
                and Machine Learning (Python).
                
                I work efficiently both as an individual contributor as well as along with a team.
                 I seek new challenges and try to think out-of-the-box while looking for creative solutions to a given problem. Besides the details given in my
                  resume, I believe in character, values, vision, and action. I am a quick learner and believe in learning from my mistakes 
                for I strongly feel that this virtue will take me ahead in life and career.
<br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1WiimByy1fPUNDczz0XeO87qoiyY4dZWv/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/Roomi02-Islam87" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/roomi-islam-939905199/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>

                    </Col>
                </Row>
            </Container>
            </div>
            
        </div>
    )
}

export default About

import React from 'react'
import { Card } from 'react-bootstrap'
import "./About.css"

const About = () => {
    return (
        <div className='aboutContainer'>
            <Card className='p-3 border-1 m-3'>
                <Card.Body >
                    <h3>My Goal in Future..</h3>
                    <br />
                    <b>Name : Mohammad Omar Faruk Emon..</b>
                    <p>Career development goals determine the success my shall achieve in my career. They help me devise methods to improve your skills as a developer and gain more experience to be a CTO. Before you set your career goals, you need to understand what you want for the next step in your career.
                        I want to be best web-deploper...and I love to work for it. My next goal is i want to be a Mern stack dev-loper and then software Engineer...
                    </p>

                </Card.Body>
            </Card>
        </div>
    )
}

export default About
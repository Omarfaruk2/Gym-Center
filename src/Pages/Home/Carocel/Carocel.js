import React from 'react'
import { Carousel } from 'react-bootstrap'
import "./Carocel.css"

import carImg1 from "../../../../src/carocelImg/caro1.jpg"
import carImg2 from "../../../../src/carocelImg/caro2.jpg"
import carImg3 from "../../../../src/carocelImg/caro3.jpg"


const Carocel = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item className='carosetItem'>
                    <img
                        className="d-block w-100"
                        src={carImg1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Change Your Goal</h3>
                        <p>Every New Year, fitness clubs see a HUGE increase in enrollment. .</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carosetItem'>
                    <img
                        className="d-block w-100"
                        src={carImg2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Go Foorword</h3>
                        <p>The biggest struggle for fitness clubs is keeping customers on the right track. You may already be offering personal coaching</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carosetItem'>
                    <img
                        className="d-block w-100"
                        src={carImg3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Your Change is biggest motivation</h3>
                        <p>Motivated by the desire to get fit or lose weight, thousands of people flock to gyms</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Carocel
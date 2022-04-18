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
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carosetItem'>
                    <img
                        className="d-block w-100"
                        src={carImg2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carosetItem'>
                    <img
                        className="d-block w-100"
                        src={carImg3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Carocel